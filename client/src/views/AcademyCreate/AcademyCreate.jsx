import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import NavBar from '../../components/NavBar/NavBar';
import "./CreateStyles.css";


const AcademyCreate = () => {
   const [academias, setAcademias] = useState();
   const [errors, setErrors] = useState({});
   const navigate = useNavigate();

   const academiaForm = useFormik({
      initialValues: {
         alumno: '',
         curso: '',
         apoderado: '',
         telefono: '',
         academias: [],
      },

      validationSchema: Yup.object({
         alumno: Yup.string()
            .required('El nombre del estudiante es requerido')
            .min(3, 'El nombre debe tener al menos 3 caracteres'),
         curso: Yup.string()
            .required('El curso del estudiante es requerido')
            .min(1, "Debe seleccionar un curso"),
         apoderado: Yup.string()
            .required('El nombre del apoderado es requerido')
            .min(3, 'El nombre debe tener al menos 3 caracteres'),
         telefono: Yup.string()
            .required('El teléfono de contacto es requerido')
            .min(8, "Debe tener al menos 8 digitos")
            .matches(/^(\+?\d{1,3}[- ]?)?\d{8}$/, 'El número de teléfono no es válido'),
         academias: Yup.array().required().min(1, 'Seleccione al menos una opción'),
      }),

      onSubmit: values => {
         axios.post('http://localhost:8000/api/academias', values)
            .then(res => {
               if (res.data.errors) {
                  setErrors(res.data.errors);
               }
               else {
                  setAcademias(academias, res.data);
                  console.log(res.data);
                  navigate(`/academias/${res.data._id}`);
               }
            })
            .catch(err => console.log(err));
      }
   });

   return (
      <div className='containerCreate'>
         <NavBar></NavBar>
         <div>
            <div className='titleCreate'>
               <p>Aquí puede realizar la inscripción del estudiante</p>
            </div>
            <form onSubmit={academiaForm.handleSubmit} className="formC">
               <div className='formc-item1'>
                  <label htmlFor="alumno">Nombre y Apellido del estudiante</label>
                  <input type="text" id="alumno" name="alumno" placeholder="Nombre Estudiante" value={academiaForm.values.alumno} onChange={academiaForm.handleChange} />
                  {errors.alumno ? <p className='estiloCreate-error'>{errors.alumno.message}</p> : academiaForm.errors.alumno ? <p className='estiloCreate-error'>{academiaForm.errors.alumno}</p> : ''}
               </div>

               <div className='formc-item2'>
                  <label htmlFor="apoderado">Nombre y Apellido del apoderado</label>
                  <input type="text" id="apoderado" name="apoderado" placeholder="Nombre Apoderado" value={academiaForm.values.apoderado} onChange={academiaForm.handleChange} />
                  {errors.apoderado ? <p className='estiloCreate-error'>{errors.apoderado.message}</p> : academiaForm.errors.apoderado ? <p className='estiloCreate-error'>{academiaForm.errors.apoderado}</p> : ''}
               </div>

               <div>
                  <label htmlFor="telefono">Teléfono de contacto</label>
                  <input
                     id="telefono"
                     name="telefono"
                     placeholder="+56 9"
                     type="text"
                     value={academiaForm.values.telefono}
                     onChange={academiaForm.handleChange}
                  />
                  {errors.telefono ? <p className='estiloCreate-error'>{errors.telefono.message}</p> : academiaForm.errors.telefono ? <p className='estiloCreate-error'>{academiaForm.errors.telefono}</p> : ''}
               </div>

               <div>
                  <label htmlFor="curso">Seleccione un curso</label>
                  <select id="curso" name="curso" class="form-select form-select-lg mb-3" value={academiaForm.values.curso} onChange={academiaForm.handleChange}>
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
                  {errors.telefono ? <p className='estiloCreate-error'>{errors.curso.message}</p> : academiaForm.errors.curso ? <p className='estiloCreate-error'>{academiaForm.errors.curso}</p> : ''}
               </div>

               <div className='formc-item5'>
                  <p className='titulo'>Academias</p>
                  <div>
                     <div className='item5check'>
                        <input type="checkbox" name="academias" value="Fútbol" checked={academiaForm.values.academias.includes('Fútbol')} onChange={academiaForm.handleChange} />
                        <label>Fútbol</label>
                     </div>
                     <div className='item5check'>
                        <input type="checkbox" name="academias" value="Tenis" checked={academiaForm.values.academias.includes('Tenis')} onChange={academiaForm.handleChange} />
                        <label>Tenis</label>
                     </div>
                     <div className='item5check'>
                        <input type="checkbox" name="academias" value="Basquetball" checked={academiaForm.values.academias.includes('Basquetball')} onChange={academiaForm.handleChange} />
                        <label>Basquetball</label>
                     </div>

                     <div className='item5check'>
                        <input type="checkbox" name="academias" value="Natación" checked={academiaForm.values.academias.includes('Natación')} onChange={academiaForm.handleChange} />
                        <label>Natacion</label>
                     </div>

                     <div className='item5check'>
                        <input type="checkbox" name="academias" value="Atletismo" checked={academiaForm.values.academias.includes('Atletismo')} onChange={academiaForm.handleChange} />
                        <label>Atletismo</label>
                     </div>
                     <div className='item5check'>
                        <input type="checkbox" name="academias" value="Teatro" checked={academiaForm.values.academias.includes('Teatro')} onChange={academiaForm.handleChange} />
                        <label>Teatro</label>
                     </div>
                     <div className='item5check'>
                        <input type="checkbox" name="academias" value="Música" checked={academiaForm.values.academias.includes('Música')} onChange={academiaForm.handleChange} />
                        <label>Música</label>
                     </div>
                     <div className='item5check'>
                        <input type="checkbox" name="academias" value="Astronomía" checked={academiaForm.values.academias.includes('Astronomía')} onChange={academiaForm.handleChange} />
                        <label>Astronomía</label>
                     </div>

                     {errors.academias ? <p className='estiloCreate-error'>{errors.academias.message}</p> : academiaForm.errors.academias ? <p className='estiloCreate-error'>{academiaForm.errors.academias}</p> : ''}
                  </div>
               </div>

               <div className='itemButton'>
                  <button type="submit" className='botonCrear'> Agregar estudiante</button>
               </div>
            </form>
         </div>
      </div >


   )
}

export default AcademyCreate;