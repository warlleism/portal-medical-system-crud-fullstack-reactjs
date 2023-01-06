const sequelize = require("sequelize");
const config = require("../config/config");
const regisColaborador = require('../model/regis-colaborador')
const regisConsulta = require('../model/regis-consulta')

const connection = new sequelize(config);

regisColaborador.init(connection);
regisConsulta.init(connection);

module.exports = connection;