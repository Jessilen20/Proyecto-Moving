import Modal from 'react-bootstrap/Modal';
import Registro from '../Registro/Registro';

const ModalLogin = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Registro></Registro>
            </Modal.Body>
        </Modal>
    );
}

export default ModalLogin;