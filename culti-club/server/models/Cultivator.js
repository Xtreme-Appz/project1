const Sequelize = require('sequelize');
const db = require('../config/db');

const Cultivator = db.define('cultivator', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  information: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  strains: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  }
});

module.exports = Cultivator;