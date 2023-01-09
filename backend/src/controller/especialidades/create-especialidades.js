const especialidades = require('../../model/regis-especialidades')

const criarNovaEspecialidade = async (req, res) => {
    var { nome } = req.body;

    const user = await especialidades.findOne({ where: { nome } })

    if (user) {
        return res.send({ status: 200, sucess: 'Especialidade já cadastrada.' });
    }

    try {
        const criarEspecialidade = await especialidades.create({ nome })
        return res.status(200).send({ status: 200, sucess: 'Especialidade cadastrada com sucesso' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = criarNovaEspecialidade;