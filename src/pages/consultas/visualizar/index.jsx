import { Context } from "../../../context/provider";
import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import './style.scss'
import { Link } from "react-router-dom";

const VisualizarConsulta = () => {

    const { editData, setEditData } = useContext(Context);

    const [itens, setItens] = useState([])
    const [itensPerPage, setItensPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(itens.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = itens.slice(startIndex, endIndex)



    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:3001/todasConsultas')
                .then(response => response.json())
                .then(data => data)
            setItens(result)
        }
        fetchData()
    }, [])

    return (
        <div className="main-visualizar-consultas">
            <div className="titulo-top-bar">
                Consultas
            </div>

            {
                currentItens.map((e) => {
                    return (

                        <div className="content-visualizar-consultas">
                            <div className="paciente-field">
                                <span>Paciente</span>
                                <div>{e.paciente}</div>
                            </div>
                            <div className="informacoes-field">
                                <div className="field-consulta-itens">
                                    <span>Especialidade</span>
                                    <div>{e.especialidade}</div>
                                </div>
                                <div className="field-consulta-itens">
                                    <span>Especialista</span>
                                    <div>{e.doutor}</div>
                                </div>
                                <div className="field-consulta-itens">
                                    <span>Data</span>
                                    <div>{e.data}</div>
                                </div>
                                <div className="field-consulta-itens">
                                    <span>Horário</span>
                                    <div>{e.hora}</div>
                                </div>
                            </div>
                            <Link to={'/editarConsulta'} class="material-symbols-outlined edit-icon" onClick={() => setEditData({
                                id: e.id,
                                paciente: e.paciente,
                                especialidade: e.especialidade,
                                doutor: e.doutor,
                                contato: e.contato,
                                data: e.data,
                                hora: e.hora,
                            })} >
                                edit
                            </Link>
                        </div>
                    )
                })
            }

            <div className="paginação">
                <div onClick={(e) => setCurrentPage(currentPage == 0 ? currentPage : currentPage - 1)}>Anterior</div>
                {
                    Array.from(Array(pages), (item, index) => {
                        return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index}</button>
                    })
                }
                <div onClick={(e) => setCurrentPage(currentPage == pages - 1 ? currentPage : currentPage + 1)}>Próximo</div>

            </div>



        </div >
    )
}

export default VisualizarConsulta;