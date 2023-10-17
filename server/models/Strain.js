const mongoose = require('mongoose');

const StrainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  logo: {
    type: String,
    required: true
  },
  thcLevel: {
    type: Number,
    required: true
  },
  cbdLevel: {
    type: Number,
    required: true
  },
  betaCaryophyllene: {
    type: Number,
    required: true
  },
  betaMyrcene: {
    type: Number,
    required: true
  },
  limonene: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  effects: {
    type: [String],
    required: true
  },
  cultivator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cultivator',
    required: true
  }
});

module.exports = mongoose.model('Strain', StrainSchema);