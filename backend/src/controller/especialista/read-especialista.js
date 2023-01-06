const especialista = require('../../model/regis-colaborador')

const listarEspecialista = async (req, res) => {

    var { id } = req.body

    try {
        const listarEspecialista = await especialista.findOne({ where: { id: id } })
        return res.status(200).send(listarEspecialista);
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = listarEspecialista;