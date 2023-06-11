import React from 'react';
import UserCard from './UserCard';
const UserList = ({ users, handleDelete, handleUpdate }) => {
  return (
    <section>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </section>
  );
};

export default UserList;
