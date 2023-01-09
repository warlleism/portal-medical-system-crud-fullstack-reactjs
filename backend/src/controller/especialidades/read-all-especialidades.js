const especialidades = require('../../model/regis-especialidades')

const listarTodasEspecialidades = async (req, res) => {
    try {
        const listarEspecialidades = await especialidades.findAll()
        return res.status(200).send(listarEspecialidades);
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = listarTodasEspecialidades;