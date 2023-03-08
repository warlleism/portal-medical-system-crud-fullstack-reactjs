import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container } from "../styled/styled";
import $ from "jquery";
import React, { useEffect, useState } from "react";
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
    const [ouvidoria, setOuvidoria] = useState(false)
    const [count, setCount] = useState(0)

    $("#container").click(function () {
        setConsultas(false)
        setMedicos(false)
        setEspecialidades(false)
    });

    const HidderBar = () => {
        const a = document.getElementById('nav-bar')

        if (count <= 0) {
            $(".menu-nav").click(function () {
                a.style.transform = 'translateX(-100%)'
                setCount(count + 1)
            });
        } else {
            $(".menu-nav").click(function () {
                a.style.transform = 'translateX(0%)'
                setCount(count - 1)
            });
        }
    }

    useEffect(() => {
        HidderBar()
    }, [])

    return (
        <BrowserRouter>
            <div className="nav-bar" id="nav-bar">
                <div className="main-logo" id="logo" onClick={() => {
                    setConsultas(false)
                    setMedicos(false)
                    setConsultas(false)
                    setEspecialidades(false)
                    setOuvidoria(false)

                }}>
                    <Link to={'/'} style={{ transition: ".5s ease-in-out" }}>
                        <div><strong style={{ color: "#01DB8B" }}>M</strong>edical</div>
                        <div><strong style={{ color: "#01DB8B" }}>G</strong>roup
                            <div className="circle">
                            </div>
                        </div>
                    </Link>
                    <div className="arrow-back-navbar" id="arrow-nav-bar">
                        <span className="material-symbols-outlined nav-arrow" translate="no" onClick={() => window.history.back()}>
                            arrow_back
                        </span>
                        <span className="material-symbols-outlined menu-nav" translate="no" onClick={() => HidderBar()}>
                            menu
                        </span>
                    </div>
                </div>
                <div className="list-links-field">
                    <div>
                        <div className="link-field"
                            style={{ backgroundColor: consultas ? "#009860" : false }}
                            onClick={() => {
                                setConsultas(!consultas)
                                setMedicos(false)
                                setEspecialidades(false)
                                setOuvidoria(false)
                            }}>
                            <div className="title-icon-link-field" >
                                <span className="material-symbols-outlined" translate="no" >
                                    content_paste
                                </span>
                                <div>Consultas</div>
                            </div>
                            <i className="material-symbols-outlined" translate="no" >
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
                            style={{ backgroundColor: medicos ? "#009860" : false }}
                            onClick={() => {
                                setMedicos(!medicos)
                                setConsultas(false)
                                setEspecialidades(false)
                                setOuvidoria(false)
                            }}>
                            <div className="title-icon-link-field" >
                                <span className="material-symbols-outlined" translate="no">
                                    vaccines
                                </span>
                                <div>Especialista</div>
                            </div>
                            <i className="material-symbols-outlined" translate="no">
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
                        <div className="link-field"
                            style={{ backgroundColor: especialidades ? "#009860" : false }}
                            onClick={() => {
                                setEspecialidades(!especialidades)
                                setConsultas(false)
                                setMedicos(false)
                                setOuvidoria(false)
                            }}>
                            <div className="title-icon-link-field" >
                                <span className="material-symbols-outlined" translate="no">
                                    stethoscope
                                </span>
                                <div>Especialidades</div>
                            </div>
                            <i className="material-symbols-outlined" translate="no">
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

                    <Link to={'/ouvidoria'} className="link-field"
                        style={{ backgroundColor: ouvidoria ? "#009860" : false }}
                        onClick={() => {
                            setConsultas(false)
                            setMedicos(false)
                            setConsultas(false)
                            setEspecialidades(false)
                            setOuvidoria(!ouvidoria)
                        }}>
                        <div className="title-icon-link-field" >
                            <span className="material-symbols-outlined" translate="no">
                                support_agent
                            </span>
                            <div>Ouvidoria</div>
                        </div>
                        <i className="material-symbols-outlined" translate="no" style={{ opacity: 0, pointers: 'none' }}>
                            arrow_drop_down
                        </i>
                    </Link>
                </div>

                <div className="profile-login-logout">
                    <span className="material-symbols-outlined" translate="no">
                        login
                    </span>
                    <span className="material-symbols-outlined" translate="no">
                        logout
                    </span>
                    <span className="material-symbols-outlined user" translate="no">
                        person
                    </span>
                </div>
            </div>

            <Container className="container-main-content">
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



        </BrowserRouter >
    )
}

export default Main;