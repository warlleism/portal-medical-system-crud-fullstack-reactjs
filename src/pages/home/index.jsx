import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.scss'

const Home = () => {


    const [data, setData] = useState([])
    const [qtdInfo, setQtdInfo] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch('http://localhost:3001/consultasHome')
                .then(response => response.json())
                .then(data => data)
            setData(result)
        }

        fetchData()

        const fetchDataQtd = async () => {
            const result = await fetch('http://localhost:3001/qtdEspecialistas')
                .then(response => response.json())
                .then(data => data)
            setQtdInfo(result)
        }

        fetchDataQtd()
    }, [])

    return (
        <div className="home-page-container">
{
    console.log(qtdInfo[0])
}
            <div className="container-consultas-especialistas">
                <Link to={'/visualizarConsulta'} className="container-info">
                    <div className="container-todas-consultas-especialistas">
                        Número de consultas
                    </div>
                    <div className="container-quantidade-consultas-especialistas">
                        <div></div>
                        <div>
                            <div>
                                {qtdInfo[1]}
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/visualizarEspecialistas'} className="container-info">
                    <div className="container-todas-consultas-especialistas">
                        Especialistas Registrados
                    </div>
                    <div className="container-quantidade-consultas-especialistas">
                        <div></div>
                        <div>
                            <div>
                                {qtdInfo[0]}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="container-ultimas-consultas-atualizacoes">

                <div className="container-bloco-info">
                    <div>Ultimas Registros</div>
                </div>

                <div className="container-ultimas-info">
                    {
                        data.map((e) => {
                            return (
                                <div className="container-consultas-mes">
                                    <div className="container-info-ultimas">
                                        <span>Paciente</span>
                                        <div>{e.paciente}</div>
                                    </div>
                                    <div className="container-info-ultimas">
                                        <span>Data</span>
                                        <div>{e.data}</div>
                                    </div>
                                    <div className="container-info-ultimas">
                                        <span>Horário</span>
                                        <div>{e.hora}</div>
                                    </div>
                                    <div className="container-info-ultimas">
                                        <span>Especialidade</span>
                                        <div>{e.especialidade}</div>
                                    </div>
                                    <div className="container-info-ultimas">
                                        <span>Especialista</span>
                                        <div>{e.doutor}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
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
                <Link to={'/ouvidoria'} className="container-canal">
                    Canal de comunicação
                </Link>

            </div>




        </div>
    )
}

export default Home;