import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import NavBar from "../../components/NavBar/NavBar";
import './EditStyles.css';

const AcademyEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [academia, setAcademia] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/academias/${id}`)
            .then(res => {
                setAcademia(res.data.academia);
                console.log(res.data.academia);
            })

            .catch(err => console.log(err));
    }, [id]);


    return (
        <div className='containerEdit'>
            <NavBar></NavBar>
            <div className="containerFormE">
                <div>
                    <p>Editando la información del estudiante {academia ? academia.alumno : ""}</p>
                </div>
                {academia ?
                    <Formik
                        initialValues={academia}
                        validationSchema={Yup.object({
                            alumno: Yup.string()
                                .required('El nombre del estudiante es requerido')
                                .min(3, 'El nombre debe tener al menos 3 caracteres'),
                            curso: Yup.string()
                                .required('El curso del estudiante es requerido')
                                .min(1, "El curso debe tener al menos 1 caracter"),
                            apoderado: Yup.string()
                                .required('El nombre del apoderado es requerido')
                                .min(3, 'El nombre debe tener al menos 3 caracteres'),
                            telefono: Yup.string()
                                .required('El teléfono de contacto es requerido')
                                .min(8, "Debe tener al menos 8 digitos"),
                            academias: Yup.array().required().min(1, 'Seleccione al menos una opción')
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.put(`http://localhost:8000/api/academias/${id}`, values)
                                .then(res => {
                                    if (res.data.errors) {
                                        setErrors(res.data.errors);
                                    } else {
                                        console.log(res.data.academia)
                                        navigate(`/academias/${academia._id}`);
                                    }
                                })
                                .catch(err => console.log(err));
                        }}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit} className="formE">

                                <div className='formE-item1'>
                                    <label htmlFor="alumno">Nombre y Apellido del estudiante</label>
                                    <input type="text" id="alumno" name="alumno" placeholder="Nombre Estudiante" value={formik.values.alumno} onChange={formik.handleChange} />
                                    {errors.alumno ? <p className='estiloEdit-error'>{errors.alumno.message}</p> : formik.errors.alumno ? <p className='estiloEdit-error'>{formik.errors.alumno}</p> : ''}
                                </div>

                                <div className='formE-item2'>
                                    <label htmlFor="apoderado">Nombre y Apellido del apoderado</label>
                                    <input type="text" id="apoderado" name="apoderado" placeholder="Nombre Apoderado" value={formik.values.apoderado} onChange={formik.handleChange} />
                                    {errors.apoderado ? <p className='estiloEdit-error'>{errors.apoderado.message}</p> : formik.errors.apoderado ? <p className='estiloEdit-error'>{formik.errors.apoderado}</p> : ''}
                                </div>

                                <div className='formE-item3'>
                                    <label htmlFor="telefono">Teléfono de contacto</label>
                                    <input
                                        id="telefono"
                                        name="telefono"
                                        placeholder="+56 9"
                                        type="text"
                                        value={formik.values.telefono}
                                        onChange={formik.handleChange}
                                    />
                                    {errors.telefono ? <p className='estiloEdit-error'>{errors.telefono.message}</p> : formik.errors.telefono ? <p className='estiloEdit-error'>{formik.errors.telefono}</p> : ''}
                                </div>

                                <div>
                                    <label htmlFor="curso">Seleccione un curso</label>
                                    <select id="curso" name="curso" class="form-select form-select-lg mb-3" value={formik.values.curso} onChange={formik.handleChange}>
                                        <option selected>Seleccione un curso</option>
                                        <option value="1º básico">1º básico</option>
                                        <option value="2º básico">2º básico</option>
                                        <option value="3º básico">3º básico</option>
                                        <option value="4º básico">4º básico</option>
                                        <option value="5º básico">5º básico</option>
                                        <option value="6º básico">6º básico</option>
                                        <option value="7º básico">7º básico</option>
                                        <option value="8º básico">8º básico</option>
                                    </select>
                                    {errors.telefono ? <p className='estiloEdit-error'>{errors.curso.message}</p> : formik.errors.curso ? <p className='estiloEdit-error'>{formik.errors.curso}</p> : ''}
                                </div>

                                <div className='formE-item5'>
                                    <p className='tituloE'>Academias</p>
                                    <div>
                                        <div className='item5checkE'>
                                            <input type="checkbox" name="academias" value="Fútbol" checked={formik.values.academias.includes('Fútbol')} onChange={formik.handleChange} />
                                            <label>Fútbol</label>
                                        </div>
                                        <div className='item5checkE'>
                                            <input type="checkbox" name="academias" value="Tenis" checked={formik.values.academias.includes('Tenis')} onChange={formik.handleChange} />
                                            <label>Tenis</label>
                                        </div>
                                        <div className='item5checkE'>
                                            <input type="checkbox" name="academias" value="Basquetball" checked={formik.values.academias.includes('Basquetball')} onChange={formik.handleChange} />
                                            <label>Basquetball</label>
                                        </div>

                                        <div className='item5checkE'>
                                            <input type="checkbox" name="academias" value="Natación" checked={formik.values.academias.includes('Natación')} onChange={formik.handleChange} />
                                            <label>Natacion</label>
                                        </div>

                                        <div className='item5checkE'>
                                            <input type="checkbox" name="academias" value="Atletismo" checked={formik.values.academias.includes('Atletismo')} onChange={formik.handleChange} />
                                            <label>Atletismo</label>
                                        </div>
                                        <div className='item5checkE'>
                                            <input type="checkbox" name="academias" value="Teatro" checked={formik.values.academias.includes('Teatro')} onChange={formik.handleChange} />
                                            <label>Teatro</label>
                                        </div>
                                        <div className='item5checkE'>
                                            <input type="checkbox" name="academias" value="Música" checked={formik.values.academias.includes('Música')} onChange={formik.handleChange} />
                                            <label>Música</label>
                                        </div>
                                        <div className='item5checkE'>
                                            <input type="checkbox" name="academias" value="Astronomía" checked={formik.values.academias.includes('Astronomía')} onChange={formik.handleChange} />
                                            <label>Astronomía</label>
                                        </div>

                                        {errors.academias ? <p className='estiloEdit-error'>{errors.academias.message}</p> : formik.errors.academias ? <p className='estiloEdit-error'>{formik.errors.academias}</p> : ''}
                                    </div>
                                </div>

                                <div className='itemButtonE'>
                                    <button type="submit" className='botonEditar'> Editar Informacion</button>
                                </div>
                            </form>
                        )}
                    </Formik> : null
                }
            </div>
        </div >
    )
}
export default AcademyEdit;

