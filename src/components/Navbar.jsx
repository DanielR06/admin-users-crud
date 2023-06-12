import React from 'react';

const Navbar = ({ activateForm }) => {
  return (
    <nav className="w-full flex flex-row justify-around items-center p-10">
      <h1>Users Admin</h1>
      <button onClick={activateForm}>
        <i className="bx bxs-message-square-add"></i>
        <span>Add new User</span>
      </button>
    </nav>
  );
};

export default Navbar;
