const consultas = require('../../model/regis-consulta')

const listarTodasConsultas = async (req, res) => {

    try {
        const listarConsultas = await consultas.sequelize.query('SELECT * FROM consultas WHERE created_at BETWEEN CURDATE() - INTERVAL 30 DAY AND CURDATE()')
        return res.status(200).send(listarConsultas[0]);
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = listarTodasConsultas;