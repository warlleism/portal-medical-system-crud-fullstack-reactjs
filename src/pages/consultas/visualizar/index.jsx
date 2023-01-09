import { Context } from "../../../context/provider";
import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import Swal from "sweetalert2";

import './style.scss'
import { Link } from "react-router-dom";

const VisualizarConsulta = () => {

    const { editData, setEditData } = useContext(Context);

    const [excluir, setExcluir] = useState(false)
    const [itens, setItens] = useState([])
    const [itensPerPage, setItensPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(itens.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = itens.slice(startIndex, endIndex)

    const fetchData = async () => {
        const result = await fetch('http://localhost:3001/todasConsultas')
            .then(response => response.json())
            .then(data => data)
        setItens(result)
    }

    fetchData()


    //Lógica para enviar post de nova consulta
    const DeletarConsulta = (id) => {

        const OptionsRegister = {
            body: JSON.stringify({ id: id }),
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch('http://localhost:3001/deletarConsulta', OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Consulta deletada com sucesso',
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: "Ops.. ocorreu um erro",
                    })
                }
            })

        fetchData()
        setExcluir(false)
    }


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
                            <div class="material-symbols-outlined edit-icon" style={{ right: 70 }} onClick={() => setExcluir(true)}>
                                delete
                            </div>
                            {
                                excluir

                                    ?
                                    <>
                                        <div className="modal-confirm" onClick={() => DeletarConsulta(e.id)}>
                                            Confirmar
                                        </div>
                                        <div className="modal-confirm rigth" onClick={() => setExcluir(false)}>
                                            Cancelar
                                        </div>
                                    </>
                                    :
                                    false
                            }
                        </div>
                    )
                })
            }

            <div className="paginação">
                <div onClick={(e) => setCurrentPage(currentPage == 0 ? currentPage : currentPage - 1)}>Anterior</div>
                {
                    Array.from(Array(pages), (item, index) => {
                        return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
                    })
                }
                <div onClick={(e) => setCurrentPage(currentPage == pages - 1 ? currentPage : currentPage + 1)}>Próximo</div>

            </div>



        </div >
    )
}

export default VisualizarConsulta;