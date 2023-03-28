import React from 'react';

const UserCard = ({ user }) => {
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
          <i class="bx bxs-trash"></i>
        </button>
        <button>
          <i class="bx bxs-edit-alt"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
