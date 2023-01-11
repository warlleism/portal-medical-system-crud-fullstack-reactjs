import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container } from "../styled/styled";
import $ from "jquery";
import React, { useState } from "react";
import './style.scss'

import CadastrarConsultas from "../pages/consultas/cadastrar";
import EditarConsultas from "../pages/consultas/editar";
import VisualizarConsulta from "../pages/consultas/visualizar";
import CadastrarEspecialista from "../pages/especialistas/cadastrar";
import VisualizarEspecialistas from "../pages/especialistas/visualizar";
import EditarEspecialista from "../pages/especialistas/editar";
import VisualizarEspecialidades from "../pages/especialidades/visualizar";
import EditarEspecialidade from "../pages/especialidades/editar";
import Ouvidoria from "../pages/ouvidoria";
import Home from "../pages/home";

const Main = () => {

    const [consultas, setConsultas] = useState(false)
    const [medicos, setMedicos] = useState(false)
    const [especialidades, setEspecialidades] = useState(false)

    $("#container").click(function () {
        setConsultas(false)
        setMedicos(false)
        setEspecialidades(false)
    });


    return (
        <BrowserRouter>
            <div>
                <div className="nav-bar" id="navBar" >
                    <div className="main-logo" id="logo">
                        <Link to={'/'} id="hidden-bar-title" style={{ transition: ".5s ease-in-out" }}>
                            <div><strong style={{ color: "#01DB8B" }}>M</strong>edical</div>
                            <div><strong style={{ color: "#01DB8B" }}>G</strong>roup
                                <div className="circle">
                                </div>
                            </div>
                        </Link>
                        <div className="arrow-back-navbar" id="arrow-nav-bar">
                            <span className="material-symbols-outlined" onClick={() => window.history.back()}>
                                arrow_back
                            </span>
                        </div>
                    </div>
                    <div className="list-links-field">

                        <div>
                            <div className="link-field" onClick={() => {
                                setConsultas(!consultas)
                                setMedicos(false)
                                setEspecialidades(false)
                            }}>
                                <div className="title-icon-link-field" id="icon-center">
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
                                onClick={() => {
                                    setMedicos(!medicos)
                                    setConsultas(false)
                                    setEspecialidades(false)
                                }}>
                                <div className="title-icon-link-field" id="icon-center">
                                    <span className="material-symbols-outlined">
                                        vaccines
                                    </span>
                                    <div>Doutores(a)</div>
                                </div>
                                <i className="material-symbols-outlined">
                                    arrow_drop_down
                                </i>
                            </div>

                            {
                                medicos
                                    ?
                                    <div className="container-field">
                                        <Link to={'/cadastrarEspecialista'} className="field">
                                            <div>Cadastrar novo doutor(a)</div>
                                        </Link>
                                        <Link to={'visualizarEspecialistas'} className="field">
                                            <div>Doutores(a)</div>
                                        </Link>
                                    </div>
                                    :
                                    false
                            }
                        </div>


                        <div>
                            <div className="link-field" onClick={() => {
                                setEspecialidades(!especialidades)
                                setConsultas(false)
                                setMedicos(false)
                            }}>
                                <div className="title-icon-link-field" id="icon-center">
                                    <span className="material-symbols-outlined">
                                        stethoscope
                                    </span>
                                    <div>Especialidades</div>
                                </div>
                                <i className="material-symbols-outlined">
                                    arrow_drop_down
                                </i>
                            </div>
                            {
                                especialidades
                                    ?
                                    <div className="container-field">
                                        <Link to={"/visualizarEspecialidades"} className="field">
                                            <div>Especialidades</div>
                                        </Link>
                                    </div>
                                    :
                                    false
                            }
                        </div>

                        <Link to={'/ouvidoria'} className="link-field">
                            <div className="title-icon-link-field" id="icon-center">
                                <span className="material-symbols-outlined">
                                    support_agent
                                </span>
                                <div>Ouvidoria</div>
                            </div>
                            <i className="material-symbols-outlined" style={{ opacity: 0, pointers: 'none' }}>
                                arrow_drop_down
                            </i>
                        </Link>
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

                <Container id="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cadastrarConsulta" element={<CadastrarConsultas />} />
                        <Route path="/editarConsulta" element={<EditarConsultas />} />
                        <Route path="/visualizarConsulta" element={<VisualizarConsulta />} />
                        <Route path="/cadastrarEspecialista" element={<CadastrarEspecialista />} />
                        <Route path="/visualizarEspecialistas" element={<VisualizarEspecialistas />} />
                        <Route path="/editarEspecialista" element={<EditarEspecialista />} />
                        <Route path="/visualizarEspecialidades" element={<VisualizarEspecialidades />} />
                        <Route path="/editarEspecialidades" element={<EditarEspecialidade />} />
                        <Route path="/ouvidoria" element={<Ouvidoria />} />
                    </Routes>

                </Container>
            </div>

        </BrowserRouter >
    )
}

export default Main;