const especialidade = require('../../model/regis-especialidades')

const deletarEspecialidade = async (req, res) => {

    var { id } = req.body

    try {
        const deletarEspecialidade = await especialidade.destroy({ where: { id: id } })
        return res.status(200).send({ status: 200, sucess: 'Excluido com sucesso' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = deletarEspecialidade;