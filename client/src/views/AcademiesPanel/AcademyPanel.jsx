import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './PanelStyles.css'
import NavBar from '../../components/NavBar/NavBar';


const AcademyPanel = () => {
    const [academias, setAcademias] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/academias',
        )
            .then(res => setAcademias(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="containerPanel">
            <NavBar></NavBar>
            <div className="titlePanel"> Estudiantes inscritos en academias</div>
            <div class="table-responsive">
                <table className="table estilo-t-panel">
                    <thead>
                        <tr className="head-panel">
                            <th scope="col" >Estudiante</th>
                            <th scope="col">Curso</th>
                            <th scope="col">Apoderado</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Academias</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className="body-panel">
                        {academias.map(academia => (
                            <tr key={academia._id}>

                                <td className="body-panel-t">{academia.alumno}</td>
                                <td className="body-panel-t">{academia.curso}</td>
                                <td className="body-panel-t">{academia.apoderado}</td>
                                <td className="body-panel-t">{academia.telefono}</td>
                                <td className="body-panel-t">{academia.academias && academia.academias.map((rubro, index) => (
                                    <p key={rubro}>{rubro}</p>))}</td>
                                <td className="body-panel-b">
                                    <button><Link to={`/academias/${academia._id}`} className="panel-link">Ver Detalles</Link></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );

}

export default AcademyPanel;