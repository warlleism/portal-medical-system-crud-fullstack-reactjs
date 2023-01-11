const { Model, DataTypes } = require('sequelize')

class Especialidades extends Model {
    static init(sequelize) {
        super.init({
            especialidade: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Especialidades;