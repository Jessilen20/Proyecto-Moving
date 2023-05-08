import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../services/academias_services';
import './Login.modules.css';
import imagenI from './img_inicio.png';
import ModalLogin from './Modal';


const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const resp = await loginUser(values.email, values.password);
      // si el login fué exitoso, guardamos la credencial en localStorage
      let valido = resp.data.token
      document.cookie = "key =" + valido;
      navigate("/home");

    } catch (error) {
      setError('Email o contraseña incorrectos');
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Debe ingresar un email válido')
      .required('El email es obligatorio'),

    password: Yup.string()
      .required('La contraseña es obligatoria'),
  });

  //llamando a la cookie y devuelve el valor 
  useEffect(() => {
    const token = getCookie('usertoken');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };


  //Funciones para la abrir y cerrar la ventana modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="contenedorL">
      <div className="inicio1">
        <img src={imagenI} alt='portada' id='imgPortada'></img>
      </div>
      <div className="inicio2">
        <div >
          <h1 className="inicio2T">Bienvenido a Moving!</h1>
        </div>
        <div >
          <p className="inicio2P">Bienvenidos a Moving, aquí encontrarás diversidad de talleres deportivos y culturales para estudiantes de todos los cursos. <br /><br /> Inicia sesión para realizar tu inscripción!</p>
        </div>

        <div>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="formL" >
                <h2 id="formT">Iniciar sesión</h2><br />
                <div>
                  <label htmlFor="email" id='formP1'>Email:</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error estilo-error" />
                </div>
                <div>
                  <label htmlFor="password" id='formP2'>Contraseña:</label>
                  <Field type="password" id="password" name="password" />
                  <ErrorMessage name="password" component="div" className="error estilo-error" />
                </div>
                {error && <div className="error estilo-error">{error}</div>}
                <div className='formDivB'>
                  <button type="submit" disabled={isSubmitting} className='formB'>
                    Ingresar
                  </button>
                </div>
                <div className="formReg">
                  <p className="formReg-p"> Si no tienes una cuenta:
                    <button className='botonModal' onClick={handleShow}> Registrate Aquí</button>
                  </p>
                </div>

              </Form>
            )}
          </Formik>
        </div>
        <ModalLogin show={show} handleClose={handleClose}></ModalLogin>

      </div>
    </div>
  );
};

export default Login;

