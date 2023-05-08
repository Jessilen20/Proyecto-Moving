import navbar from "./navbar.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="containerNav">
            <div>
                <img src={navbar} className="imgNav"></img>
            </div>
            <div className="barra">
                <button className="formB"><Link to="/home" className="link">Home</Link></button>
                <button className="formB"><Link to="/academias/new" className="link">Formulario de Inscripción</Link></button>
                <button className="formB"><Link to="/academias" className="link">Lista de Inscritos</Link></button>
                <button className="formB"><Link to="/" className="link">Cerrar sesión</Link></button>
            </div>
        </div>
    );
}

export default NavBar;