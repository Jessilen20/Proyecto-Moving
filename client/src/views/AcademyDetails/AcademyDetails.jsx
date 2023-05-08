import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import './DetailsStyles.css'
import NavBar from '../../components/NavBar/NavBar';

const AcademyDetails = () => {
    const { id } = useParams();
    const [academia, setAcademia] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/academias/${id}`)
            .then(res => setAcademia(res.data.academia))
            .catch(err => console.log(err));
    }
        , [id]);

    const goToDelete = () => {
        axios.delete(`http://localhost:8000/api/academias/${id}`)
            .then(res => navigate('/academias'))
            .catch(err => console.log(err));

    }

    const goToEdit = () => {
        navigate(`/academias/${id}/edit`)

    }

    return (
        <div className="containerDetails">
            <NavBar></NavBar>
            <div className="header">
                <h1>Perfil de inscripción</h1>
                <div>
                    {/*<button className="btn1">
                    <Link to="/academias" style={{ textDecoration: 'none' }}>Ver inscripción</Link>
                </button>*/}
                </div>
            </div>
            <div className="cardDetails">
                <div className="card-body">
                    <h3 className="card-tit">Datos del estudiante:</h3>
                    <div className="card-text">
                        <h5>Nombre: {academia.alumno}</h5>
                        <h5>Curso: {academia.curso}</h5>
                        <h5>Apoderado: {academia.apoderado}</h5>
                        <h5>Teléfono: {academia.telefono}</h5>
                    </div>
                    <h3 className="card-tit">Academias inscritas:</h3>
                    <div className="card-text">
                        <h6> {academia.academias && academia.academias.map((rubro, index) => (
                            <p className="listAc" key={rubro}>{rubro}</p>
                        ))}
                        </h6>
                        {/*<p className="listAc"> {academia.academias && academia.academias.join(" - ")}</p>*/}
                    </div>
                </div>
                <div className="barra">
                    <button className="formB" onClick={goToEdit}>
                        Editar a {academia.alumno}
                    </button>
                    <button className="formB" onClick={goToDelete}>
                        Eliminar a {academia.alumno}
                    </button>
                </div>


            </div>

        </div>
    );

}

export default AcademyDetails;