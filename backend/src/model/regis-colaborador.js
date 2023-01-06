const { Model, DataTypes } = require('sequelize')

class Especialistas extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            especialidade: DataTypes.STRING,
            contato: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Especialistas;