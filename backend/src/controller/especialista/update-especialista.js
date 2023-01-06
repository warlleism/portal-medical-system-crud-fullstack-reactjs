const especialista = require('../../model/regis-colaborador')

const editarEspecialista = async (req, res) => {

    var { id, nome, especialidade, contato } = req.body

    try {
        const editarEspecialista = await especialista.update({  nome, especialidade, contato }, { where: { id: id } })
        return res.status(200).send('Editado com sucesso');
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = editarEspecialista;