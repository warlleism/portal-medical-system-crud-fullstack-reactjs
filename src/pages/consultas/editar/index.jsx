import React, { useContext } from "react";
import { Context } from "../../../context/provider";
import './style.scss'

const EditarConsultas = () => {

    const { editData, setEditData } = useContext(Context);

    return (
        <div className="main-editar-consulta">
            {console.log(editData)}

            <div className="titulo-top-bar">
                Editar de consultas
            </div>


            <div class="form-group">
                <span>Nome</span>
                <input required className="form-field" type="text" defaultValue={editData?.paciente ? editData?.paciente : ""} name="name" />
            </div>

            <div class="form-group">
                <span>Doutor</span>
                <input required className="form-field" type="text" defaultValue={editData?.doutor ? editData?.doutor : ""} name="doutor" />
            </div>


            <div class="form-group">
                <span>Especialidade</span>
                <input required className="form-field" type="text" defaultValue={editData?.especialidade ? editData?.especialidade : ""} name="especialidade" />
            </div>

            <div class="form-group">
                <span>Contato</span>
                <input required className="form-field" type="text" defaultValue={editData?.contato ? editData?.contato : ""} name="contato" />
            </div>


            <div class="form-group">
                <span>Data</span>
                <input required className="form-field" type="text" defaultValue={editData?.data ? editData?.data : ""} name="data" />
            </div>

            <div class="form-group">
                <span>Hora</span>
                <input required className="form-field" type="text" defaultValue={editData?.hora ? editData?.hora : ""} name="hora" />
            </div>

            <div className="botao-salvar">
                Salvar
            </div>

        </div>
    )
}

export default EditarConsultas;