const express = require('express');
const router = express.Router();
const Cultivator = require('../models/Cultivator');
const authMiddleware = require('../utils/authMiddleware');

// Get all cultivators
router.get('/', async (req, res) => {
  try {
    const cultivators = await Cultivator.find();
    res.json(cultivators);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one cultivator
router.get('/:id', getCultivator, (req, res) => {
  res.json(res.cultivator);
});

// Create one cultivator
router.post('/', authMiddleware, async (req, res) => {
  const cultivator = new Cultivator({
    name: req.body.name,
    strains: req.body.strains
  });

  try {
    const newCultivator = await cultivator.save();
    res.status(201).json(newCultivator);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one cultivator
router.patch('/:id', authMiddleware, getCultivator, async (req, res) => {
  if (req.body.name != null) {
    res.cultivator.name = req.body.name;
  }
  if (req.body.strains != null) {
    res.cultivator.strains = req.body.strains;
  }
  try {
    const updatedCultivator = await res.cultivator.save();
    res.json(updatedCultivator);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one cultivator
router.delete('/:id', authMiddleware, getCultivator, async (req, res) => {
  try {
    await res.cultivator.remove();
    res.json({ message: 'Deleted Cultivator' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function for get by ID
async function getCultivator(req, res, next) {
  let cultivator;
  try {
    cultivator = await Cultivator.findById(req.params.id);
    if (cultivator == null) {
      return res.status(404).json({ message: 'Cannot find cultivator' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.cultivator = cultivator;
  next();
}

module.exports = router;