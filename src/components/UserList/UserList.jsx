import React from 'react';
import UserCard from '../UserdCard/UserCard';
const UserList = ({ users }) => {
  return (
    <section>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
