import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Login from './components/login.jsx'; 
import Inicio from './components/inicio.jsx'; 
import Mascotas from './components/mascotas.jsx';
import Servicios from './components/servicios.jsx';
import './index.css';
import Clientes from './components/clientes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />  
        <Route path="/inicio" element={<Inicio />} /> 
        <Route path="/mascotas" element={<Mascotas />} /> 
        <Route path='/clientes' element={<Clientes/>} />
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path="/app" element={<App />} />  
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

