import { Context } from "../../../context/provider";
import React, { useEffect, useState } from "react";
import { TopTitulo } from "../../../styled/styled";
import { useContext } from 'react';
import Swal from "sweetalert2";

import '../../consultas/visualizar/style.scss'
import { Link } from "react-router-dom";

const VisualizarEspecialistas = () => {

    const { editData, setEditData } = useContext(Context);


    const [count, seCount] = useState(0)

    const [id, setId] = useState('')
    const [itens, setItens] = useState([])
    const [itensPerPage, setItensPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(itens.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = itens.slice(startIndex, endIndex)

    const fetchData = async () => {
        const result = await fetch('http://localhost:3001/todosEspecialistas')
            .then(response => response.json())
            .then(data => data)
        setItens(result)
    }

    useEffect(() => {
        fetchData()
    }, [count])


    //Lógica para enviar post de nova consulta
    const DeletarConsulta = () => {

        const OptionsRegister = {
            body: JSON.stringify({ id: id }),
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch('http://localhost:3001/deletarEspecialista', OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Especialista deletado com sucesso',
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: "Ops.. ocorreu um erro",
                    })
                }
            })
        fetchData()
        setId('')
        seCount(count + 1)
    }


    return (
        <>
            <TopTitulo>
                Consultas
            </TopTitulo>
            <div className="main-visualizar-consultas">
                {
                    id == ''
                        ?
                        false
                        :
                        < div className="content-excluir" >
                            <div className="texto-confirmar">
                                <div>Confirmar Ação</div>
                                <span class="material-symbols-outlined">
                                    info
                                </span>
                            </div>
                            <div className="line"></div>
                            <div className="content-excluir-text">Esta ação não pode ser desfeita! tem certeza que deseja continuar?</div>
                            <div className="container-acao">
                                <div className="modal-confirm" onClick={() => setId('')}>
                                    Cancelar
                                </div>
                                <div className="modal-confirm rigth" onClick={() => DeletarConsulta()}>
                                    Excluir
                                </div>
                            </div>
                        </div>
                }

                {
                    currentItens.map((e) => {
                        return (
                            <div className="content-visualizar-consultas" key={e.id} >
                                <div style={{ display: "flex" }}>
                                    <div className="paciente-field" style={{ pointerEvents: "none" }}>
                                        <span>Doutor</span>
                                        <div>{e.nome}</div>
                                    </div>
                                    <div className="paciente-field" style={{ pointerEvents: "none" }}>
                                        <span>Contato</span>
                                        <div>{e.contato}</div>
                                    </div>
                                </div>
                                <div className="informacoes-field">
                                    <div className="field-consulta-itens">
                                        <span>Especialidade</span>
                                        <div>{e.especialidade}</div>
                                    </div>
                                </div>
                                <Link to={'/editarEspecialista'} className="material-symbols-outlined edit-icon" onClick={() => setEditData({
                                    id: e.id,
                                    nome: e.nome,
                                    especialidade: e.especialidade,
                                    contato: e.contato,
                                })} >
                                    edit
                                </Link>
                                <div className="material-symbols-outlined edit-icon" style={{ right: 70 }} onClick={() => {
                                    setId(e.id)
                                    window.scrollTo(0, 0)
                                }}>
                                    delete
                                </div>
                            </div>
                        )
                    })
                }

                <div className="paginação">
                    <div onClick={(e) => setCurrentPage(currentPage == 0 ? currentPage : currentPage - 1)}>Anterior</div>
                    {
                        Array.from(Array(pages), (item, index) => {
                            return <button value={index} key={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
                        })
                    }
                    <div onClick={(e) => setCurrentPage(currentPage == pages - 1 ? currentPage : currentPage + 1)}>Próximo</div>
                </div>
            </div >
        </>
    )
}

export default VisualizarEspecialistas;