import React from 'react';
import '../styles/UserCard.css';
const UserCard = ({ user, handleDelete, activateForm, setUserId }) => {
  const formUpdate = async () => {
    await setUserId(user.id);
    await activateForm();
  };
  return (
    <article id="user_card" className="padding">
      <h3 className="text-center">
        {user.first_name} {user.last_name}
      </h3>
      <hr />
      <li>
        <span className="subtitle">Correo: </span>
        <br />
        {user.email}
      </li>
      <li>
        <span className="subtitle">Cumpleaños: </span>
        <br />
        <i className="bx bx-gift"></i> {user.birthday}
      </li>
      <hr />
      <div className="container_buttons">
        <button className="button delete">
          <i className="bx bxs-trash" onClick={() => handleDelete(user.id)}></i>
        </button>
        <button className="button update">
          <i className="bx bxs-edit-alt" onClick={() => formUpdate()}></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
