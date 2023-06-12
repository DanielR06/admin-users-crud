import React from 'react';
import '../styles/Navbar.css';
const Navbar = ({ activateForm }) => {
  return (
    <nav id="navbar" className="w-full flex flex-row justify-around items-center p-10">
      <h2>
        <i className="bx bxs-user-circle"></i> USUARIOS
      </h2>
      <button onClick={activateForm} className="flex items-center gap-2 bg-gray-900 text-white p-2">
        <i className="bx bxs-plus-circle"></i>
        <p>Crear nuevo usuario</p>
      </button>
    </nav>
  );
};

export default Navbar;
