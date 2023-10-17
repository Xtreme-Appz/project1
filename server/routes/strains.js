const express = require('express');
const router = express.Router();
const Strain = require('../models/Strain');
const authMiddleware = require('../utils/authMiddleware');

// Get all strains
router.get('/', async (req, res) => {
  try {
    const strains = await Strain.find();
    res.json(strains);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one strain
router.get('/:id', getStrain, (req, res) => {
  res.json(res.strain);
});

// Create one strain
router.post('/', authMiddleware, async (req, res) => {
  const strain = new Strain({
    name: req.body.name,
    type: req.body.type,
    thcLevel: req.body.thcLevel,
    cbdLevel: req.body.cbdLevel,
    betaCaryophyllene: req.body.betaCaryophyllene,
    betaMyrcene: req.body.betaMyrcene,
    limonene: req.body.limonene,
    effects: req.body.effects,
    cultivator: req.body.cultivator
  });

  try {
    const newStrain = await strain.save();
    res.status(201).json(newStrain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware function for get by ID
async function getStrain(req, res, next) {
  let strain;
  try {
    strain = await Strain.findById(req.params.id);
    if (strain == null) {
      return res.status(404).json({ message: 'Cannot find strain' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.strain = strain;
  next();
}

module.exports = router;