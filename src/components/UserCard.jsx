import React from 'react';

const UserCard = ({ user, handleDelete, activateForm, setUserId }) => {
  const formUpdate = () => {
    activateForm();
    setUserId(user.id);
  };
  return (
    <article>
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <li>
        <span>Mail: </span>
        {user.email}
      </li>
      <li>
        <span>Birthday: </span>
        {user.birthday}
      </li>
      <div className="flex justify-end w-80">
        <button>
          <i className="bx bxs-trash" onClick={() => handleDelete(user.id)}></i>
        </button>
        <button>
          <i className="bx bxs-edit-alt" onClick={() => formUpdate()}></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
