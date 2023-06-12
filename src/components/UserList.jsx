import React from 'react';
import UserCard from './UserCard';
const UserList = ({ users, handleDelete, activateForm, setUserId }) => {
  return (
    <section>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          handleDelete={handleDelete}
          activateForm={activateForm}
          setUserId={setUserId}
        />
      ))}
    </section>
  );
};

export default UserList;
