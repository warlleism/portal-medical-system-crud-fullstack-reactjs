const consultas = require('../../model/regis-consulta')

const listarConsulta = async (req, res) => {

    var { id } = req.body

    try {
        const listarConsultas = await consultas.findOne({ where: { id: id } })
        return res.status(200).send(listarConsultas);
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = listarConsulta;