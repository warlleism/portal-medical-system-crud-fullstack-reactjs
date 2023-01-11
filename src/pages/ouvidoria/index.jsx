import React, { useState } from "react";
import '../../global/style.scss'
import { TopTitulo } from "../../styled/styled";

const Ouvidoria = () => {

    const [formulario, setFormulario] = useState({
        paciente: "",
        especialidade: "",
        doutor: "",
        contato: "",
        data: "",
        hora: ""
    })

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
                Ouvidoria
            </TopTitulo>
            <form className="main-cadastrar-consulta">
                <div className="form-group">
                    <span>ASSUNTO</span>
                    <select className="form-field" type="text">
                        <option value="">- - Escolha um assunto - -</option>
                        <option value="">Denuncia</option>
                        <option value="">Ponderação</option>
                        <option value="">Dúvidas</option>
                        <option value="">Outros</option>
                    </select>
                </div>


                <div className="form-group">
                    <span>nome</span>
                    <input required className="form-field" type="text"  />
                </div>

                <div className="form-group">
                    <span>sou pessoa</span>
                    <select className="form-field" type="text">
                        <option value="">- - Escolha um assunto - -</option>
                        <option value="">Física</option>
                        <option value="">Juridica</option>
                    </select>
                </div>

                <div className="form-group">
                    <span>e-mail</span>
                    <input required className="form-field" type="email"  />
                </div>

                <div className="form-group">
                    <span>Contato</span>
                    <input required className="form-field" value={formulario.contato} />
                </div>

                <button type="submit" className="botao-salvar" onClick={() => window.alert('Logo entraremos em contato!')}>
                    Enviar
                </button>
            </form>
        </>
    )
}

export default Ouvidoria;