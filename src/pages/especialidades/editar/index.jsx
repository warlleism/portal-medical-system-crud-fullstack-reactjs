import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/provider";
import { TopTitulo } from "../../../styled/styled";
import Swal from "sweetalert2";
import '../../../global/editar.scss'


const EditarEspecialidade = () => {

    const { editData, setEditData } = useContext(Context);

    const [formulario, setFormulario] = useState({
        id: editData?.id,
        especialidade: editData?.especialidade
    })


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

        await fetch('http://localhost:3001/editarEspecialidade', OptionsRegister)
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


    return (
        <>
            <TopTitulo>
                Editar Especialidade
            </TopTitulo>
            <form onSubmit={EditarConsulta} className="main-editar-consulta">
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