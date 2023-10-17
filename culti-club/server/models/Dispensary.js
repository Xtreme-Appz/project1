const Sequelize = require('sequelize');
const db = require('../config/db');

const Dispensary = db.define('dispensary', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  inventory: {
    type: Sequelize.JSON,
    allowNull: false
  },
  information: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Dispensary;