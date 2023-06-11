import React, { useEffect, useState } from 'react';
import Modal from './components/Modal';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { getUser, createUser, deleteUser, updateUser } from './services';
import Form from './components/Form';

const App = () => {
  //useState de Usuarios
  const [users, setUsers] = useState([]);
  //Form visible
  const [isFormVisible, setisFormVisible] = useState(false);
  //UseForm Hook
  //Cargar los usuarios
  const loadUsers = async () => {
    try {
      const users = await getUser();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    setisFormVisible(true);
  };
  const onSubmit = async (data) => {
    await createUser(data);
    setisFormVisible(false);
    setUsers((prevUsers) => [...prevUsers, data]);
  };

  const handleDelete = async (userId) => {
    await deleteUser(userId);
    await loadUsers();
  };
  const handleUpdate = async (userId, userUpdated) => {
    await updateUser(userId, userUpdated);
    await loadUsers();
  };
  useEffect(() => {
    loadUsers();
  }, []);
  //
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Navbar addUserAction={handleClick} />
      <UserList users={users} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      <Modal isVisible={isFormVisible}>
        <Form submit={onSubmit} typeForm="Agregar nuevo usuario" />
      </Modal>
      <Footer />
    </div>
  );
};

export default App;
