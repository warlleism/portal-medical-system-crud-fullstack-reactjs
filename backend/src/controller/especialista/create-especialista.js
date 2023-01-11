const especialista = require('../../model/regis-colaborador')
const especialidades = require('../../model/regis-especialidades')

const criarNovoEspecialista = async (req, res) => {
    var { nome, especialidade, contato } = req.body;

    const esp = await especialidades.findOne({ where: { especialidade } })

    if (esp) {
        const criarEspecialista = await especialista.create({ nome, especialidade, contato })
        return res.status(200).send({ status: 200, sucess: 'Especialista cadastrado com sucesso' });
    }

    try {
        const criarEspecialista = await especialista.create({ nome, especialidade, contato })
        const criarEspecialidade = await especialidades.create({ especialidade })
        return res.status(200).send({ status: 200, sucess: 'Especialista cadastrado com sucesso' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = criarNovoEspecialista;