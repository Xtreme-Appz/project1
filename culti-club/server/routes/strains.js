const express = require('express');
const router = express.Router();
const Strain = require('../models/Strain');

// Get all strains
router.get('/', async (req, res) => {
  try {
    const strains = await Strain.find().sort({ THC: -1 }).limit(20);
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
router.post('/', async (req, res) => {
  const strain = new Strain({
    name: req.body.name,
    logo: req.body.logo,
    THC: req.body.THC,
    CBD: req.body.CBD,
    betaCaryophyllene: req.body.betaCaryophyllene,
    betaMyrcene: req.body.betaMyrcene,
    limonene: req.body.limonene,
    type: req.body.type,
    effects: req.body.effects
  });

  try {
    const newStrain = await strain.save();
    res.status(201).json(newStrain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one strain
router.patch('/:id', getStrain, async (req, res) => {
  if (req.body.name != null) {
    res.strain.name = req.body.name;
  }
  if (req.body.logo != null) {
    res.strain.logo = req.body.logo;
  }
  if (req.body.THC != null) {
    res.strain.THC = req.body.THC;
  }
  if (req.body.CBD != null) {
    res.strain.CBD = req.body.CBD;
  }
  if (req.body.betaCaryophyllene != null) {
    res.strain.betaCaryophyllene = req.body.betaCaryophyllene;
  }
  if (req.body.betaMyrcene != null) {
    res.strain.betaMyrcene = req.body.betaMyrcene;
  }
  if (req.body.limonene != null) {
    res.strain.limonene = req.body.limonene;
  }
  if (req.body.type != null) {
    res.strain.type = req.body.type;
  }
  if (req.body.effects != null) {
    res.strain.effects = req.body.effects;
  }
  try {
    const updatedStrain = await res.strain.save();
    res.json(updatedStrain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one strain
router.delete('/:id', getStrain, async (req, res) => {
  try {
    await res.strain.remove();
    res.json({ message: 'Deleted Strain' });
  } catch (err) {
    res.status(500).json({ message: err.message });
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