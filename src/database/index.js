const Sequelize = require('sequelize')
const dbConfig = require('../config/database');
const Usuario = require('../model/Products');

const connection = new Sequelize(dbConfig)

Usuario.init(connection);

module.exports = connection;