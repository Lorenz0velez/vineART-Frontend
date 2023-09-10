import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      <div className="dropdown-content">
        {/* Aquí irían las opciones del dropdown */}
        <div className="dropdown-option">
                    <h1>OPCION 1</h1>
        <p>CASILLERO DEL Jesus</p>
        </div>
        <div className="dropdown-option">
                    <h1>OPCION 2</h1>
        <p>CASILLERO DEL MONJA</p>
        </div>
        <div className="dropdown-option">
                    <h1>OPCION 3</h1>
        <p>CASILLERO DEL dinosaurio</p>
        </div>
        <div className="dropdown-option">
        <h1>OPCION 4</h1>
        <p>CASILLERO DEL DIABLO</p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;


// OPCION 1 || OPCION 2 || OPCION 3 || OPCION 4
// opciones || opciones || opciones || opciones
// opciones || opciones || opciones || opciones
// opciones || opciones || opciones || opciones
// opciones || opciones || opciones || opciones


// Opcion 1
// CASILLERO DEL Jesus
// Opcion 2
// CASILLERO DEL MONJA
// opcion 3
// CASILLERO DEL dinosaurio
// opcion 4
// CASILLERO DEL DIABLO