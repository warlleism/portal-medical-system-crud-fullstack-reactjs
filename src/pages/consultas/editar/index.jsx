import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/provider";
import { TopTitulo } from "../../../styled/styled";
import Swal from "sweetalert2";
import '../../../global/editar.scss'

const EditarConsultas = () => {

    const { editData, setEditData } = useContext(Context);
    const [especialidades, setEspecialidades] = useState([])
    const [searchFilter, setSearchFilter] = useState([])
    const [handler, setHandler] = useState([])

    const [formulario, setFormulario] = useState({
        id: editData?.id,
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
            const result = await fetch('http://localhost:3001/todasEspecialidades')
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
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    //Lógica para enviar post de nova consulta
    const EditarConsulta = async (event) => {

        event.preventDefault()

        await fetch('http://localhost:3001/editarConsulta', OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'edição feita com sucesso',
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

    //lógicas para formatação de número
    const phoneMask = (value) => {
        if (!value) return ""
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, "($1) $2")
        value = value.replace(/(\d)(\d{4})$/, "$1-$2")
        setFormulario({ ...formulario, contato: value })

    }
    //lógicas para apenas serem inseridos números
    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        phoneMask(value)
    };


    return (
        <>
            <TopTitulo>
                Editar consulta
            </TopTitulo>
            <form onSubmit={EditarConsulta} className="main-editar-consulta">
                <div class="form-group">
                    <span>Nome</span>
                    <input required className="form-field" type="text" defaultValue={formulario.paciente} name="name" onChange={(e) => setFormulario({ ...formulario, paciente: e.target.value })} />
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
                    <input required className="form-field" value={formulario.contato} onChange={(e) => handleChange(e)} />
                </div>
                <div class="form-group">
                    <span>Data</span>
                    <input required className="form-field" type="date" defaultValue={formulario.data} />
                </div>
                <div class="form-group">
                    <span>Hora</span>
                    <input required className="form-field" type="time" defaultValue={formulario.hora} />
                </div>
                <button className="botao-salvar" type="submit">
                    Salvar
                </button>
            </form>
        </>
    )
}

export default EditarConsultas;