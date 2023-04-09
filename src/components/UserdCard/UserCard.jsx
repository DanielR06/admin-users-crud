import React from 'react';

const UserCard = ({ user, handleDelete }) => {
  const clickDelete = () => {
    handleDelete(user.id);
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
          <i className="bx bxs-trash" onClick={clickDelete}></i>
        </button>
        <button>
          <i className="bx bxs-edit-alt"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
