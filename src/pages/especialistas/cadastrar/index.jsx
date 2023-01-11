import React, { useEffect, useState } from "react";
import { TopTitulo } from "../../../styled/styled";
import Swal from "sweetalert2";
import '../../../global/cadastrar.scss'


const CadastrarEspecialista = () => {

    const [formulario, setFormulario] = useState({
        nome: "",
        especialidade: "",
        contato: "",
    })


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

        await fetch('http://localhost:3001/novoEspecialista', OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: data.sucess,
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: data.error,
                    })
                }
            })
    }


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
                Criar novo especialista
            </TopTitulo>
            <form onSubmit={EnviarDados} className="main-cadastrar-consulta">

                <div className="form-group">
                    <span>Nome</span>
                    <input required className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })} />
                </div>

                <div className="form-group">
                    <span>Especialidade</span>
                    <input required className="form-field" type="text" onChange={(e) => setFormulario({ ...formulario, especialidade: e.target.value })} />
                </div>

                <div className="form-group">
                    <span>Contato</span>
                    <input required className="form-field" value={formulario.contato} onChange={(e) => handleChange(e)} />
                </div>

                <button type="submit" className="botao-salvar">
                    Salvar
                </button>

            </form>
        </>
    )
}

export default CadastrarEspecialista;