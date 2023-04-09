import React from 'react';
import UserCard from '../UserdCard/UserCard';
const UserList = ({ users, handleDelete }) => {
  return (
    <section>
      {users.map((user) => (
        <UserCard key={user.id} user={user} handleDelete={handleDelete} />
      ))}
    </section>
  );
};

export default UserList;
