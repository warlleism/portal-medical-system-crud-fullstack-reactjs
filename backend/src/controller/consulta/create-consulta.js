const consulta = require('../../model/regis-consulta')

const criarNovaConsulta = async (req, res) => {
    var { paciente, doutor, especialidade, contato, data, hora } = req.body;

    const user = await consulta.findOne({ where: { paciente, especialidade } })

    if (user) {
        return res.send({ status: 200, sucess: 'consulta de paciente já cadastrada.' });
    }

    try {
        const criarConsulta = await consulta.create({ paciente, doutor, especialidade, contato, data, hora })
        return res.status(200).send({ status: 200, sucess: 'Cadastrado com sucesso' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }
}

module.exports = criarNovaConsulta;