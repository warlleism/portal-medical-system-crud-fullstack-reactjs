const express = require("express");
const Router = express.Router();

const consultasHome = require('../controller/atualizacoes/last-30-days-registers.js')
const qtdEspecialistas = require('../controller/atualizacoes/qtd-consultas-registers')

const listarEspecialidade = require('../controller/especialidades/read-all-especialidades')
const deletarEspecialidade = require('../controller/especialidades/delete-especialidade')
const editarEspecialidade = require('../controller/especialidades/editar-especialidade')

const criarNovaConsulta = require('../controller/consulta/create-consulta')
const listarConsulta = require('../controller/consulta/read-consulta')
const listarTodasConsultas = require('../controller/consulta/read-all-consultas')
const deletarConsulta = require('../controller/consulta/delete-consulta')
const editarConsulta = require('../controller/consulta/update-consulta')

const criarNovoEspecialista = require('../controller/especialista/create-especialista')
const listarEspecialista = require('../controller/especialista/read-especialista')
const listarTodosEspecialistas = require('../controller/especialista/read-all-especialistas')
const deletarEspecialista = require('../controller/especialista/delete-especialista')
const editarEspecialista = require('../controller/especialista/update-especialista')

Router.get('/todasEspecialidades', listarEspecialidade)
Router.delete('/deletarEspecialidade', deletarEspecialidade)
Router.put('/editarEspecialidade', editarEspecialidade)

Router.post('/novaConsulta', criarNovaConsulta)
Router.post('/listarConsulta', listarConsulta)
Router.get('/todasConsultas', listarTodasConsultas)
Router.delete('/deletarConsulta', deletarConsulta)
Router.put('/editarConsulta', editarConsulta)

Router.post('/novoEspecialista', criarNovoEspecialista)
Router.post('/listarEspecialista', listarEspecialista)
Router.get('/todosEspecialistas', listarTodosEspecialistas)
Router.delete('/deletarEspecialista', deletarEspecialista)
Router.put('/editarEspecialista', editarEspecialista)

Router.get('/consultasHome', consultasHome)
Router.get('/qtdEspecialistas', qtdEspecialistas)

module.exports = Router;