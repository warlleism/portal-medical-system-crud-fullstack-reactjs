const especialista = require('../../model/regis-colaborador')

const deletarEspecialista = async (req, res) => {

    var { id } = req.body

    try {
        const deletarEspecialista = await especialista.destroy({ where: { id: id } })
        return res.status(200).send({ status: 200, sucess: 'Excluido com sucesso' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = deletarEspecialista;