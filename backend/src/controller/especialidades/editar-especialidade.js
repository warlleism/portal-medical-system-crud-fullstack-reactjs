const especialidades = require('../../model/regis-especialidades')

const editarEspecialidade = async (req, res) => {

    var { especialidade , id} = req.body

    try {
        const editarespecialidade = await especialidades.update({ especialidade }, { where: { id: id } })
        return res.status(200).send({ status: 200, sucess: 'Editado com sucesso' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = editarEspecialidade;