const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.ENUM,
    values: ['admin', 'dispensary', 'cultivator'],
    allowNull: false
  }
});

module.exports = User;