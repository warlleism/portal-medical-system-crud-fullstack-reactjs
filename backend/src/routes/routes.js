const express = require("express");
const Router = express.Router();

const criarNovaConsulta = require('../controller/consulta/create-consulta')
const listarConsulta = require('../controller/consulta/read-consulta')
const listarTodasConsultas = require('../controller/consulta/read-all-consultas')
const deletarConsulta = require('../controller/consulta/delete-consulta')
const editarConsulta = require('../controller/especialista/update-especialista')


const criarNovoEspecialista = require('../controller/especialista/create-especialista')
const listarEspecialista = require('../controller/especialista/read-especialista')
const listarTodosEspecialistas = require('../controller/especialista/read-all-especialistas')
const deletarEspecialista = require('../controller/especialista/delete-especialista')
const editarEspecialista = require('../controller/especialista/update-especialista')

Router.post('/novaConsulta', criarNovaConsulta)
Router.post('/listarConsulta', listarConsulta)
Router.get('/todasConsultas', listarTodasConsultas)
Router.post('/deletarConsulta', deletarConsulta)
Router.post('/editarConsulta', editarConsulta)

Router.post('/novoEspecialista', criarNovoEspecialista)
Router.post('/listarEspecialista', listarEspecialista)
Router.get('/todosEspecialistas', listarTodosEspecialistas)
Router.post('/deletarEspecialista', deletarEspecialista)
Router.post('/editarEspecialista', editarEspecialista)

module.exports = Router;