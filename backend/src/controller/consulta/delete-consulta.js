const consulta = require('../../model/regis-consulta')

const deletarConsulta = async (req, res) => {

    var { id } = req.body

    try {
        const deletarConsulta = await consulta.destroy({ where: { id: id } })
        return res.status(200).send('Deletado com sucesso');
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = deletarConsulta;