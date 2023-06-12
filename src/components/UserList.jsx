import React from 'react';
import '../styles/UserList.css';
import UserCard from './UserCard';
const UserList = ({ users, handleDelete, activateForm, setUserId }) => {
  return (
    <section id="users_container" className="padding">
      {!!users.length ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            handleDelete={handleDelete}
            activateForm={activateForm}
            setUserId={setUserId}
          />
        ))
      ) : (
        <p>Agrega tus usuarios</p>
      )}
    </section>
  );
};

export default UserList;
