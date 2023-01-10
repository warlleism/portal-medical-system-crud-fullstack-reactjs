import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './style.scss'

import CadastrarConsultas from "../pages/consultas/cadastrar";
import EditarConsultas from "../pages/consultas/editar";
import VisualizarConsulta from "../pages/consultas/visualizar";
import Home from "../pages/home";

const Main = () => {

    const [consultas, setConsultas] = useState(false)
    const [medicos, setMedicos] = useState(false)
    const [pacientes, setPacientes] = useState(false)
    const [procedimentos, setProcedimentos] = useState(false)
    const [countNavBar, setCountNavBar] = useState(false)

    const hiddenBar = () => {
        const data = document.querySelectorAll('#hidden-bar')
        const nav = document.getElementById('navBar')
        let arrowBack = document.getElementById('arrow-nav-bar')
        const navTitle = document.getElementById('hidden-bar-title')
        const icon = document.querySelectorAll('#icon-center')

        if (countNavBar == false) {
            icon[0].style.justifyContent = 'center'
            icon[1].style.justifyContent = 'center'
            icon[2].style.justifyContent = 'center'
            icon[3].style.justifyContent = 'center'
            icon[4].style.justifyContent = 'center'

            for (let i = 0; i <= data.length; i++) {
                navTitle.style.opacity = 0
                arrowBack.style.right = '35px'
                data[i].style.display = 'none'
                nav.style.width = "90px"
                setCountNavBar(true)
            }

        } else {
            icon[0].style.justifyContent = 'flex-start'
            icon[1].style.justifyContent = 'flex-start'
            icon[2].style.justifyContent = 'flex-start'
            icon[3].style.justifyContent = 'flex-start'
            icon[4].style.justifyContent = 'flex-start'
            for (let i = 0; i <= data.length; i++) {
                navTitle.style.opacity = 1
                data[i].style.display = 'block'
                nav.style.width = "240px"
                arrowBack.style.right = '10px'
                setCountNavBar(false)
            }
        }
    }

    const alterData = (event) => {
        const arrow = event.querySelector('i')
        if (consultas || medicos || pacientes || procedimentos) {
            arrow.style.transform = 'rotate(0deg)'
        } else {
            arrow.style.transform = 'rotate(-180deg)'
        }
    }

    return (
        <BrowserRouter>
            <div>
                <div className="nav-bar" id="navBar" >
                    <div className="main-logo">
                        <Link to={'/'} id="hidden-bar-title" style={{ transition: ".5s ease-in-out" }}>
                            <div><strong style={{ color: "#01DB8B" }}>M</strong>edical</div>
                            <div><strong style={{ color: "#01DB8B" }}>G</strong>roup
                                <div className="circle">
                                </div>
                            </div>
                        </Link>
                        <div className="arrow-back-navbar" id="arrow-nav-bar">
                            {
                                countNavBar
                                    ?
                                    <span className="material-symbols-outlined" onClick={() => hiddenBar()}>
                                        menu
                                    </span>
                                    :
                                    <span className="material-symbols-outlined" onClick={() => hiddenBar()}>
                                        arrow_back
                                    </span>
                            }
                        </div>
                    </div>
                    <div className="list-links-field">

                        <div>
                            <div className="link-field" onClick={(event) => {
                                alterData(event.target)
                                setConsultas(!consultas)
                            }}>
                                <div className="title-icon-link-field" id="icon-center">
                                    <span className="material-symbols-outlined">
                                        content_paste
                                    </span>
                                    <div id="hidden-bar">Consultas</div>
                                </div>
                                <i className="material-symbols-outlined" id="hidden-bar">
                                    arrow_drop_down
                                </i>
                            </div>
                            {
                                consultas && countNavBar == false
                                    ?
                                    <div className="container-field">
                                        <Link to={'/cadastrarConsulta'} className="field">
                                            <div>Criar nova consulta</div>
                                        </Link>
                                        <Link to={'/visualizarConsulta'} className="field">
                                            <div>Consultas</div>
                                        </Link>
                                    </div>
                                    :
                                    false
                            }
                        </div>

                        <div>
                            <div className="link-field"
                                onClick={(event) => {
                                    alterData(event.target)
                                    setMedicos(!medicos)
                                }}>
                                <div className="title-icon-link-field" id="icon-center">
                                    <span className="material-symbols-outlined">
                                        vaccines
                                    </span>
                                    <div id="hidden-bar">Médicos</div>
                                </div>
                                <i className="material-symbols-outlined" id="hidden-bar">
                                    arrow_drop_down
                                </i>
                            </div>

                            {
                                medicos && countNavBar == false
                                    ?
                                    <div className="container-field">
                                        <div className="field">
                                            <div>Cadastrar</div>
                                        </div>
                                        <div className="field">
                                            <div>Visualizar</div>
                                        </div>
                                        <div className="field">
                                            <div>Editar</div>
                                        </div>
                                    </div>
                                    :
                                    false
                            }
                        </div>

                        <div>
                            <div className="link-field" onClick={(event) => {
                                alterData(event.target)
                                setPacientes(!pacientes)
                            }}>
                                <div className="title-icon-link-field" id="icon-center">
                                    <span className="material-symbols-outlined">
                                        person
                                    </span>
                                    <div id="hidden-bar">Pacientes</div>
                                </div>
                                <i className="material-symbols-outlined" id="hidden-bar">
                                    arrow_drop_down
                                </i>
                            </div>
                            {
                                pacientes && countNavBar == false
                                    ?
                                    <div className="container-field">
                                        <div className="field">
                                            <div>Cadastrar</div>
                                        </div>
                                        <div className="field">
                                            <div>Visualizar</div>
                                        </div>
                                        <div className="field">
                                            <div>Editar</div>
                                        </div>
                                    </div>
                                    :
                                    false
                            }
                        </div>

                        <div>
                            <div className="link-field" onClick={(event) => {
                                alterData(event.target)
                                setProcedimentos(!procedimentos)
                            }}>
                                <div className="title-icon-link-field" id="icon-center">
                                    <span className="material-symbols-outlined">
                                        stethoscope
                                    </span>
                                    <div id="hidden-bar">Pricedimentos</div>
                                </div>
                                <i className="material-symbols-outlined" id="hidden-bar">
                                    arrow_drop_down
                                </i>
                            </div>
                            {
                                procedimentos && countNavBar == false
                                    ?
                                    <div className="container-field">
                                        <div className="field">
                                            <div>Cadastrar</div>
                                        </div>
                                        <div className="field">
                                            <div>Visualizar</div>
                                        </div>
                                        <div className="field">
                                            <div>Editar</div>
                                        </div>
                                    </div>
                                    :
                                    false
                            }
                        </div>

                        <div className="link-field">
                            <div className="title-icon-link-field" id="icon-center">
                                <span className="material-symbols-outlined">
                                    support_agent
                                </span>
                                <div id="hidden-bar">Contatos</div>
                            </div>
                            <i className="material-symbols-outlined" id="hidden-bar" style={{ opacity: 0, pointerEvents: 'none' }}>
                                arrow_drop_down
                            </i>
                        </div>
                    </div>

                    <div className="profile-login-logout" id="hidden-bar">
                        <span className="material-symbols-outlined">
                            login
                        </span>
                        <span className="material-symbols-outlined">
                            logout
                        </span>
                        <span className="material-symbols-outlined user">
                            person
                        </span>
                    </div>
                </div>

                <div className="content-forms">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cadastrarConsulta" element={<CadastrarConsultas />} />
                        <Route path="/editarConsulta" element={<EditarConsultas />} />
                        <Route path="/visualizarConsulta" element={<VisualizarConsulta />} />
                        {/* <Route path="/pcgamer" element={<PcGamer />} /> */}
                        {/* <Route path="/eletronicos" element={<Eletronicos />} /> */}
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default Main;