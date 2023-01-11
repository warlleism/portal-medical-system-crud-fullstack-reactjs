import React, { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../../context/provider";
import { TopTitulo } from "../../../styled/styled";
import apiUtil from "../../../hook/apiUtil";
import '../../../global/editar.scss'


const EditarEspecialista = () => {

    const { editData, setEditData } = useContext(Context);
    const apiMetodos = useMemo(() => new apiUtil(), []);


    const [formulario, setFormulario] = useState({
        id: editData?.id,
        nome: editData?.nome,
        especialidade: editData?.especialidade,
        contato: editData?.contato
    })


    //Lógica para enviar post de nova consulta
    const EditarConsulta = async (event) => {
        event.preventDefault()
        apiMetodos.updateData('http://localhost:3001/editarEspecialista', formulario)
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
                Editar Especialista
            </TopTitulo>
            <form onSubmit={EditarConsulta} className="main-editar-consulta">
                <div class="form-group">
                    <span>Nome</span>
                    <input required className="form-field" type="text" defaultValue={formulario.nome} name="name" onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })} />
                </div>
                <div class="form-group">
                    <span>Especialidade</span>
                    <input required className="form-field" type="text" defaultValue={formulario.especialidade} name="name" onChange={(e) => setFormulario({ ...formulario, especialidade: e.target.value })} />
                </div>
                <div class="form-group">
                    <span>Contato</span>
                    <input required className="form-field" value={formulario.contato} onChange={(e) => handleChange(e)} />
                </div>
                <button className="botao-salvar" type="submit">
                    Salvar
                </button>
            </form>
        </>
    )
}

export default EditarEspecialista;