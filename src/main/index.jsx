import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './style.scss'

import CadastrarConsultas from "../pages/consultas/cadastrar";
import EditarConsultas from "../pages/consultas/editar";
import VisualizarConsulta from "../pages/consultas/visualizar";

const Main = () => {

    const [consultas, setConsultas] = useState(false)
    const [medicos, setMedicos] = useState(false)
    const [pacientes, setPacientes] = useState(false)
    const [procedimentos, setProcedimentos] = useState(false)


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
                <div className="nav-bar">
                    <div className="main-logo">
                        <div><strong style={{ color: "#01DB8B" }}>M</strong>edical</div>
                        <div><strong style={{ color: "#01DB8B" }}>G</strong>roup
                            <div className="circle">
                            </div>
                        </div>
                        <div className="arrow-back-navbar">
                            <span className="material-symbols-outlined">
                                arrow_back
                            </span>
                        </div>
                    </div>
                    <div className="list-links-field">

                        <div>
                            <div className="link-field" onClick={(event) => {
                                alterData(event.target)
                                setConsultas(!consultas)
                            }}>
                                <div className="title-icon-link-field">
                                    <span className="material-symbols-outlined">
                                        content_paste
                                    </span>
                                    <div>Consultas</div>
                                </div>
                                <i className="material-symbols-outlined">
                                    arrow_drop_down
                                </i>
                            </div>
                            {
                                consultas
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
                                <div className="title-icon-link-field">
                                    <span className="material-symbols-outlined">
                                        vaccines
                                    </span>
                                    <div>Médicos</div>
                                </div>
                                <i className="material-symbols-outlined">
                                    arrow_drop_down
                                </i>
                            </div>

                            {
                                medicos
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
                                <div className="title-icon-link-field">
                                    <span className="material-symbols-outlined">
                                        person
                                    </span>
                                    <div>Pacientes</div>
                                </div>
                                <i className="material-symbols-outlined">
                                    arrow_drop_down
                                </i>
                            </div>
                            {
                                pacientes
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
                                <div className="title-icon-link-field">
                                    <span className="material-symbols-outlined">
                                        stethoscope
                                    </span>
                                    <div>Pricedimentos</div>
                                </div>
                                <i className="material-symbols-outlined">
                                    arrow_drop_down
                                </i>
                            </div>
                            {
                                procedimentos
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
                            <div className="title-icon-link-field">
                                <span className="material-symbols-outlined">
                                    support_agent
                                </span>
                                <div>Contatos</div>
                            </div>
                            <i className="material-symbols-outlined" style={{ opacity: 0, pointerEvents: 'none' }}>
                                arrow_drop_down
                            </i>
                        </div>
                    </div>
                    <div className="profile-login-logout">
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
                        {/* <Route path="/" element={<Main />} /> */}
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