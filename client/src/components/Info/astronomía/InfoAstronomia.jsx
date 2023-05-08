import React from "react";
import "../futbol/style.css";
import fondo_astronomía from "./fondo_astronomía.png";
import NavBar from '../../NavBar/NavBar';


const InfoAstronomia = () => {

    return (
        <div className="containerGeneral">
            <NavBar></NavBar>
            <div className="containerAcademia">
                <div className="cardAcademia">
                    <img className="card-img-top" src={fondo_astronomía} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Horario:</h5>
                        <p className="card-text">Lunes, miércoles y viernes de 3:30 p.m. a 5:30 p.m.</p>
                        <h5 className="card-title">Lugar:</h5>
                        <p className="card-text">Instalaciones del colegio</p>
                        <h5 className="card-title">Total de vacantes: 20</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoAstronomia;