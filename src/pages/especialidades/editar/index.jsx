import React, { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../../context/provider";
import { TopTitulo } from "../../../styled/styled";
import '../../../global/editar.scss'
import apiUtil from "../../../hook/apiUtil";


const EditarEspecialidade = () => {

    const { editData, setEditData } = useContext(Context);
    const apiMetodos = useMemo(() => new apiUtil(), []);

    const [formulario, setFormulario] = useState({
        id: editData?.id,
        especialidade: editData?.especialidade
    })



    //Lógica para enviar post de nova especialidade
    const EditarEspecialidade = async (event) => {
        event.preventDefault()
        apiMetodos.updateData('http://localhost:3001/editarEspecialidade', formulario)
    }

    return (
        <>
            <TopTitulo>
                Editar Especialidade
            </TopTitulo>
            <form onSubmit={EditarEspecialidade} className="main-editar-consulta">
                <div class="form-group">
                    <span>Especialidade</span>
                    <input required className="form-field" type="text" defaultValue={formulario.especialidade} name="name" onChange={(e) => setFormulario({ ...formulario, especialidade: e.target.value })} />
                </div>
                <button className="botao-salvar" type="submit">
                    Salvar
                </button>
            </form>
        </>
    )
}

export default EditarEspecialidade;