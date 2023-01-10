import React from "react";
import './style.scss'

const Home = () => {
    return (
        <div className="home-page-container">

            <div className="container-consultas-especialistas">
                <div className="container-info">
                    <div className="container-todas-consultas-especialistas">
                        Número de consultas
                    </div>
                    <div className="container-quantidade-consultas-especialistas">
                        <div></div>
                        <div>
                            <div>
                                25
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-info">
                    <div className="container-todas-consultas-especialistas">
                        Especialistas Registrados
                    </div>
                    <div className="container-quantidade-consultas-especialistas">
                        <div></div>
                        <div>
                            <div>
                                55
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-ultimas-consultas-atualizacoes">

                <div className="container-bloco-info">
                    <div>Ultimas Consultas</div>
                    <div>Atualizações</div>
                </div>

                <div className="container-ultimas-info">
                    <div className="container-consultas-mes">
                        <div className="container-info-ultimas">
                            <span>Paciente</span>
                            <div>Warllei Martins</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Data</span>
                            <div>15/03/2023</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Horário</span>
                            <div>10:30</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Especialidade</span>
                            <div>Dermatologia</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Especialista</span>
                            <div>Cládio Galeno</div>
                        </div>
                    </div>

                    <div className="container-consultas-mes">
                        <div className="container-info-ultimas">
                            <span>Paciente</span>
                            <div>Warllei Martins</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Data</span>
                            <div>15/03/2023</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Horário</span>
                            <div>10:30</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Especialidade</span>
                            <div>Dermatologia</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Especialista</span>
                            <div>Cládio Galeno</div>
                        </div>
                    </div>

                    <div className="container-consultas-mes">
                        <div className="container-info-ultimas">
                            <span>Paciente</span>
                            <div>Warllei Martins</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Data</span>
                            <div>15/03/2023</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Horário</span>
                            <div>10:30</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Especialidade</span>
                            <div>Dermatologia</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Especialista</span>
                            <div>Cládio Galeno</div>
                        </div>
                    </div>

                    <div className="container-consultas-mes">
                        <div className="container-info-ultimas">
                            <span>Paciente</span>
                            <div>Warllei Martins</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Data</span>
                            <div>15/03/2023</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Horário</span>
                            <div>10:30</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Especialidade</span>
                            <div>Dermatologia</div>
                        </div>
                        <div className="container-info-ultimas">
                            <span>Especialista</span>
                            <div>Cládio Galeno</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container-ouvidoria">

                <div>
                    <img src={require('../../imagens/ouvidoria.png')} alt="" />
                    <div>
                        <div>Ouvidoria</div>
                        <div>Reclamação, denúncia, sugestão, lei de acesso...</div>
                    </div>
                </div>
                <div className="container-canal">
                    Canal de comunicação
                </div>

            </div>




        </div>
    )
}

export default Home;