const { Model, DataTypes } = require('sequelize')

class Especialidades extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Especialidades;