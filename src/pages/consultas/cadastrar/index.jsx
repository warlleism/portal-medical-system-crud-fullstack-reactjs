import React, { useState } from "react";
import Swal from "sweetalert2";
import './style.scss'

const CadastrarConsultas = () => {


    const [formulario, setFormulario] = useState({
        paciente: "",
        especialidade: "",
        doutor: "",
        contato: "",
        data: "",
        hora: ""
    })

    const OptionsRegister = {
        body: JSON.stringify(formulario),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const EnviarDados = async (event) => {

        event.preventDefault()

        await fetch('http://localhost:3001/novaConsulta', OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'cadastrado feito com sucesso',
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: "Ops.. ocorreu um erro",
                    })
                }
            })
    }

    return (
        <form onSubmit={EnviarDados} className="main-cadastrar-consulta">

            <div className="titulo-top-bar">
                Criar nova consultas
            </div>

            <div className="form-group">
                <span>Paciente</span>
                <input required className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, paciente: e.target.value })} />
            </div>

            <div className="form-group">
                <span>Especialidade</span>
                <select className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, especialidade: e.target.value })}>
                    <option value="">Selecione...</option>
                    <option value="Dermatologia">Dermatologia</option>
                </select>
            </div>

            <div className="form-group">
                <span>Doutor</span>
                <select className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, doutor: e.target.value })}>
                    <option value="">Selecione...</option>
                    <option value="Dr. Oswaldo">Dr. Oswaldo</option>
                </select>
            </div>

            <div className="form-group">
                <span>Contato</span>
                <input required className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, contato: e.target.value })} />
            </div>
            <div className="form-group">
                <span>Data</span>
                <input required className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, data: e.target.value })} />
            </div>

            <div className="form-group">
                <span>Hora</span>
                <input required className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, hora: e.target.value })} />
            </div>

            <button type="submit" className="botao-salvar">
                Salvar
            </button>

        </form>
    )
}

export default CadastrarConsultas;