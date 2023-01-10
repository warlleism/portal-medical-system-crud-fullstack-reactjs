const express = require("express");
const Router = express.Router();

const consultasHome = require('../controller/atualizacoes/last-30-days-registers.js')
const qtdEspecialistas = require('../controller/atualizacoes/qtd-consultas-registers')

const criarNovaEspecialidade = require('../controller/especialidades/create-especialidades')
const listarEspecialidade = require('../controller/especialidades/read-all-especialidades')

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

Router.post('/novaEspecialidade', criarNovaEspecialidade)
Router.get('/todasEspecialidade', listarEspecialidade)

Router.post('/novaConsulta', criarNovaConsulta)
Router.post('/listarConsulta', listarConsulta)
Router.get('/todasConsultas', listarTodasConsultas)
Router.delete('/deletarConsulta', deletarConsulta)
Router.put('/editarConsulta', editarConsulta)

Router.post('/novoEspecialista', criarNovoEspecialista)
Router.post('/listarEspecialista', listarEspecialista)
Router.get('/todosEspecialistas', listarTodosEspecialistas)
Router.post('/deletarEspecialista', deletarEspecialista)
Router.put('/editarEspecialista', editarEspecialista)

Router.get('/consultasHome', consultasHome)
Router.get('/qtdEspecialistas', qtdEspecialistas)

module.exports = Router;