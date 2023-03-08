import React, { useEffect, useMemo, useState } from "react";
import { TopTitulo } from "../../../styled/styled";
import useGetData from './../../../hook/getData';
import apiUtil from "../../../hook/apiUtil";
import '../../../global/cadastrar.scss'


const CadastrarConsultas = () => {

    const [data] = useGetData('http://localhost:3001/todosEspecialistas')
    const [especialidade, setEspecialidade] = useState([])
    const [searchFilter, setSearchFilter] = useState([])
    const [handler, setHandler] = useState([])

    const apiMetodos = useMemo(() => new apiUtil(), []);

    const [formulario, setFormulario] = useState({
        paciente: "",
        especialidade: "",
        doutor: "",
        contato: "",
        data: "",
        hora: ""
    })


    function filtrarEspecialidades(profissionais) {
        const especialidades = [];
        const especialidadesUnicas = [];

        for (let i = 0; i < profissionais?.length; i++) {
            const especialidade = profissionais[i]?.especialidade;

            if (!especialidades?.includes(especialidade)) {
                especialidades?.push(especialidade);
                especialidadesUnicas?.push(profissionais[i]);
            }
        }
        setEspecialidade(especialidadesUnicas);
    }


    //Consumindo apis que retornam todos especialistas e especialidades
    useEffect(() => {

        const fetchDataEspecialistas = async () => {
            const result = await fetch('http://localhost:3001/todosEspecialistas')
                .then(response => response.json())
                .then(data => data)
            setHandler(result)
        }
        fetchDataEspecialistas()
    }, [])


    //Lógica de filtragem de dados, ao selecionar uma especialidade são retornadas os especialistas
    const handlesFilter = () => {
        const searchWord = formulario.especialidade == '' ? false : formulario.especialidade
        const newFilter = handler.filter((value) => {
            return value.especialidade.includes(searchWord)
        })
        setSearchFilter(newFilter)
    }



    //Lógica para enviar post de nova consulta
    const EnviarDados = async (event) => {
        event.preventDefault()
        apiMetodos.createData('http://localhost:3001/novaConsulta', formulario)
    }

    //UseEffect chamando sempre que o campo especialidade é preenchido (complementa lógica de filtragem)
    useEffect(() => {
        fetch('http://localhost:3001/todosEspecialistas')
            .then(response => response.json())
            .then(data => setHandler(data))
        handlesFilter()
    }, [formulario.especialidade])


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
                Criar nova consultas
            </TopTitulo>
            <form onSubmit={EnviarDados} className="main-cadastrar-consulta">

                <div className="form-group">
                    <span>Paciente</span>
                    <input required className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, paciente: e.target.value })} />
                </div>

                <div className="form-group">
                    <span>Especialidade</span>
                    <select className="form-field" type="text" onClick={() => filtrarEspecialidades(data)} onChange={(e) => setFormulario({ ...formulario, especialidade: e.target.value })}>
                        <option value="">Selecione...</option>
                        {
                            especialidade?.map((e) => {
                                return (
                                    <option key={e.id} value={e.especialidade}>{e.especialidade}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <span>Doutor</span>
                    {
                        searchFilter.length == 0
                            ?
                            <select className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, doutor: e.target.value })} disabled>
                                <option value="">Selecione...</option>
                            </select>
                            :
                            <select className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, doutor: e.target.value })}>
                                <option value="">Selecione...</option>
                                {
                                    searchFilter?.map((e) => {
                                        return (
                                            <option value={e.nome}>{e.nome}</option>

                                        )
                                    })
                                }
                            </select>

                    }
                </div>

                <div className="form-group">
                    <span>Contato</span>
                    <input required className="form-field" value={formulario.contato} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group">
                    <span>Data</span>
                    <input required className="form-field" type="date" onChange={(e) => setFormulario({ ...formulario, data: e.target.value })} />
                </div>

                <div className="form-group">
                    <span>Hora</span>
                    <input required className="form-field" type="time" onChange={(e) => setFormulario({ ...formulario, hora: e.target.value })} />
                </div>

                <button type="submit" className="botao-salvar">
                    Salvar
                </button>

            </form>
        </>
    )
}

export default CadastrarConsultas;