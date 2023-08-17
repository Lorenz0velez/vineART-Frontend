import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a className='textoNavbar'>Vinos</a>
        <a className='textoNavbar'>Marcas</a>
        <a className='textoNavbar'>Novedades</a>
      </div>
      <div className="search">
        <input type="text" placeholder="Buscar" />
        <button>Buscar</button>
      </div>
      <div>

      </div>
    </nav>
  );
};

export default Navbar;



// Tintos               Blancos        Rosados         Formato
// Malbec               Chardonnay     AASSSD          Caja por 6
// Cabernet Sauvignon                                  Caja por 3
// Cabernet Frnac


