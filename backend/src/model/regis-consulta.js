const { Model, DataTypes } = require('sequelize')

class Consultas extends Model {
    static init(sequelize) {
        super.init({
            paciente: DataTypes.STRING,
            doutor: DataTypes.STRING,
            especialidade: DataTypes.STRING,
            contato: DataTypes.STRING,
            data: DataTypes.STRING,
            hora: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Consultas;