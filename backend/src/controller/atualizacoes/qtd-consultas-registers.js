const especialistas = require('../../model/regis-colaborador')
const consultas = require('../../model/regis-consulta')

const quantidadeColaboradores = async (req, res) => {

    try {
        const listarQtdEspecialistas = await especialistas.sequelize.query('SELECT count(*) as qtd FROM especialistas;')
        const listarQtdConsultas = await especialistas.sequelize.query('SELECT count(*) as qtd FROM consultas;')
        const a = listarQtdEspecialistas[0].map(e => e.qtd)
        const b = listarQtdConsultas[0].map(e => e.qtd)
        return res.status(200).send([a,b]);
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = quantidadeColaboradores;