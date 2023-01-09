const consulta = require('../../model/regis-consulta')

const editarConsulta = async (req, res) => {

    var { id, paciente, doutor, especialidade, contato, data, hora } = req.body

    try {
        const editarConsulta = await consulta.update({ paciente, doutor, especialidade, contato, data, hora }, { where: { id: id } })
        return res.status(200).send({ status: 200, sucess: 'Editado com sucesso' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = editarConsulta;