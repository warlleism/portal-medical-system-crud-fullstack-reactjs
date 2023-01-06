const especialista = require('../../model/regis-colaborador')

const listarTodosEspecialistas = async (req, res) => {
    try {
        const listarEspecialistas = await especialista.findAll()
        return res.status(200).send(listarEspecialistas);
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = listarTodosEspecialistas;