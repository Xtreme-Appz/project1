const Sequelize = require('sequelize');
const db = require('../config/db');

const Strain = db.define('strain', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  logo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  thcLevel: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  cbdLevel: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  betaCaryophyllene: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  betaMyrcene: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  limonene: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  effects: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  cultivatorId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'cultivators',
      key: 'id'
    }
  }
});

module.exports = Strain;