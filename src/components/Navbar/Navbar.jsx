import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-around items-center p-10">
      <h1>Users Admin</h1>
      <button>
        <i class="bx bxs-message-square-add"></i>
        <span>Add new User</span>
      </button>
    </nav>
  );
};

export default Navbar;
