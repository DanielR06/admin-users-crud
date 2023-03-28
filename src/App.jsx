import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
const BASE_URL = 'https://users-crud.academlo.tech/';
const getUser = async () => {
  try {
    const res = await axios.get(BASE_URL + 'users/');
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const App = () => {
  //useState de Usuarios
  const [users, setUsers] = useState([]);
  //Peticion Get de los usuarios
  //Cargar los usuarios
  const loadUsers = async () => {
    try {
      const users = await getUser();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);
  //
  return (
    <div className="">
      
      <UserList users={users} />
    </div>
  );
};

export default App;
