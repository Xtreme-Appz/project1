const mongoose = require('mongoose');

const CultivatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  logo: {
    type: String,
    required: true
  },
  strains: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Strain'
  }],
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Cultivator', CultivatorSchema);