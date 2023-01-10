const consultas = require('../../model/regis-consulta')

const listarUltimasConsultasMes = async (req, res) => {

    try {
        const listarConsultas = await consultas.sequelize.query('SELECT * FROM consultas WHERE created_at > DATE_ADD(CURDATE(),INTERVAL -31 DAY) ORDER BY created_at DESC')
        return res.status(200).send(listarConsultas[0]);
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = listarUltimasConsultasMes;