import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className='contacto_content'>
      <h2>ATENCIÓN AL CLIENTE:</h2>
      <div className='contacto_information'>
        <div className='contacto_info'>
          <h3>VISITANOS:</h3>
          <p>Direccion: Av. Cabildo 2059</p>
          <h3>TELEFONÓ: 4723-1456</h3>
          <h3>HORARIOS:</h3>
          <p>LUNES A VIERNES DE 9 HS A 18 HS</p>
          <p>SABADOS DE 10 HS A 16 HS</p>
        </div>
        <div className='contacto_subInfo'>
          <img src="/images/zona-gamer-logo.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contacto