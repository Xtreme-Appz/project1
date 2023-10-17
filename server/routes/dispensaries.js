const express = require('express');
const router = express.Router();
const Dispensary = require('../models/Dispensary');
const authMiddleware = require('../utils/authMiddleware');

// Get all dispensaries
router.get('/', async (req, res) => {
  try {
    const dispensaries = await Dispensary.find();
    res.json(dispensaries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one dispensary
router.get('/:id', getDispensary, (req, res) => {
  res.json(res.dispensary);
});

// Create one dispensary
router.post('/', authMiddleware, async (req, res) => {
  const dispensary = new Dispensary({
    name: req.body.name,
    location: req.body.location,
    inventory: req.body.inventory
  });

  try {
    const newDispensary = await dispensary.save();
    res.status(201).json(newDispensary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one dispensary
router.patch('/:id', authMiddleware, getDispensary, async (req, res) => {
  if (req.body.name != null) {
    res.dispensary.name = req.body.name;
  }
  if (req.body.location != null) {
    res.dispensary.location = req.body.location;
  }
  if (req.body.inventory != null) {
    res.dispensary.inventory = req.body.inventory;
  }
  try {
    const updatedDispensary = await res.dispensary.save();
    res.json(updatedDispensary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one dispensary
router.delete('/:id', authMiddleware, getDispensary, async (req, res) => {
  try {
    await res.dispensary.remove();
    res.json({ message: 'Deleted Dispensary' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function for get by ID
async function getDispensary(req, res, next) {
  let dispensary;
  try {
    dispensary = await Dispensary.findById(req.params.id);
    if (dispensary == null) {
      return res.status(404).json({ message: 'Cannot find dispensary' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.dispensary = dispensary;
  next();
}

module.exports = router;