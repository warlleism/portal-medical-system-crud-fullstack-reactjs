import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/provider";
import Swal from "sweetalert2";
import './style.scss'

const EditarConsultas = () => {

    const { editData, setEditData } = useContext(Context);
    const [especialidades, setEspecialidades] = useState([])
    const [searchFilter, setSearchFilter] = useState([])
    const [handler, setHandler] = useState([])

    const [formulario, setFormulario] = useState({
        paciente: editData?.paciente,
        especialidade: editData?.especialidade,
        doutor: editData?.doutor,
        contato: editData?.contato,
        data: editData?.data,
        hora: editData?.hora
    })

    //Consumindo apis que retornam todos especialistas e especialidades
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:3001/todasEspecialidade')
                .then(response => response.json())
                .then(data => data)

            setEspecialidades(result)
        }
        const fetchDataEspecialistas = async () => {
            const result = await fetch('http://localhost:3001/todosEspecialistas')
                .then(response => response.json())
                .then(data => data)

            setHandler(result)
        }
        fetchDataEspecialistas()
        fetchData()
    }, [])


    //Lógica de filtragem de dados, ao selecionar uma especialidade são retornadas os especialistas
    const handlesFilter = () => {
        const searchWord = formulario.especialidade == '' ? false : formulario.especialidade
        const newFilter = handler.filter((value) => {
            return value.especialidade.includes(searchWord)
        })
        setSearchFilter(newFilter)
    }

    //configuração para fazer post
    const OptionsRegister = {
        body: JSON.stringify(formulario),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    //Lógica para enviar post de nova consulta
    const EnviarDados = async (event) => {

        event.preventDefault()

        await fetch('http://localhost:3001/novaConsulta', OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'cadastro feito com sucesso',
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: "Ops.. ocorreu um erro",
                    })
                }
            })
    }

    //UseEffect chamando sempre que o campo especialidade é preenchido (complementa lógica de filtragem)
    useEffect(() => {

        fetch('http://localhost:3001/todosEspecialistas')
            .then(response => response.json())
            .then(data => setHandler(data))

        handlesFilter()

    }, [especialidades])

    return (
        <div className="main-editar-consulta">
            <div className="titulo-top-bar">
                Editar de consultas
            </div>
            <div class="form-group">
                <span>Nome</span>
                <input required className="form-field" type="text" defaultValue={formulario.paciente} name="name" />
            </div>
            <div className="form-group">
                <span>Especialidade</span>
                <select required className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, especialidade: e.target.value })} value={formulario.especialidade}>
                    <option value="">Selecione...</option>
                    {
                        especialidades?.map((e) => {
                            return (
                                <option value={e.nome}>{e.nome}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="form-group">
                <span>Doutor</span>
                <select required className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, doutor: e.target.value })}>
                    <option value="">Selecione...</option>
                    {
                        searchFilter?.map((e) => {
                            return (
                                <option defaultValue={e.nome}>{e.nome}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div class="form-group">
                <span>Contato</span>
                <input required className="form-field" type="text" defaultValue={formulario.contato} name="contato" />
            </div>
            <div class="form-group">
                <span>Data</span>
                <input required className="form-field" type="text" defaultValue={formulario.data} name="data" />
            </div>
            <div class="form-group">
                <span>Hora</span>
                <input required className="form-field" type="text" defaultValue={formulario.hora} name="hora" />
            </div>
            <div className="botao-salvar">
                Salvar
            </div>
        </div>
    )
}

export default EditarConsultas;