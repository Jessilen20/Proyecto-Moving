import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AcademyCreate from './views/AcademyCreate/AcademyCreate';
import AcademyDetails from './views/AcademyDetails/AcademyDetails';
import AcademyEdit from './views/AcademyEdit/AcademyEdit';
import AcademyPanel from './views/AcademiesPanel/AcademyPanel';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import InfoFutbol from './components/Info/futbol/InfoFutbol';
import InfoTenis from './components/Info/tenis/InfoTenis';
import InfoNatacion from './components/Info/natacion/InfoNatacion';
import InfoBasquetball from './components/Info/basquetball/InfoBasquetball';
import InfoAtletismo from './components/Info/atletismo/InfoAtletismo';
import InfoTeatro from './components/Info/teatro/InfoTeatro';
import InfoMusica from './components/Info/música/InfoMusica';
import InfoAstronomia from './components/Info/astronomía/InfoAstronomia';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/academias' element={<AcademyPanel />} />
          <Route path='/academias/new' element={<AcademyCreate />} />
          <Route path='/academias/:id/edit' element={<AcademyEdit />} />
          <Route path='/academias/:id' element={<AcademyDetails />} />
          <Route path='/futbol' element={<InfoFutbol />} />
          <Route path='/tenis' element={<InfoTenis />} />
          <Route path='/natacion' element={<InfoNatacion />} />
          <Route path='/basquetball' element={<InfoBasquetball />} />
          <Route path='/atletismo' element={<InfoAtletismo />} />
          <Route path='/teatro' element={<InfoTeatro />} />
          <Route path='/musica' element={<InfoMusica />} />
          <Route path='/astronomia' element={<InfoAstronomia />} />
        </Routes>
      </BrowserRouter>

      {/* Inicio de Footer */}
      <div className='footer'>
        <div className='footer1'>
          <div className="footer-name">
            <div className="footer-name-tittle">
              Academias Moving
            </div>

            <div className="footer-name-descrip">
              Todas las academias disponibles en un solo lugar.
              Dudas o Sugerencias, puedes contactarnos al siguiente correo.
            </div>
          </div>

          <div className="footer-contact">
            <a href='#'><i className="bx bx-mail-send"></i> admin@moving.com
            </a>
          </div>
        </div>
        <div className="footer-bar">
          <p className='footer-bar-text'>Moving Proyecto Coding Dojo | Copyright © 2023. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
