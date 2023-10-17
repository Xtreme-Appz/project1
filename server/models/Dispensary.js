const mongoose = require('mongoose');

const DispensarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  inventory: [
    {
      strain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Strain',
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Dispensary', DispensarySchema);