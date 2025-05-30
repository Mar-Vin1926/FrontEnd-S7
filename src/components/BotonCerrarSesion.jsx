import React from 'react';
import './BotonCerrarSesion.css';

const BotonCerrarSesion = ({ onCerrarSesion }) => {
  return (
    <button 
      onClick={onCerrarSesion} 
      type="button"
      className="boton-cerrar-sesion"
    >
      Cerrar sesión
    </button>
  );
};

export default BotonCerrarSesion;
