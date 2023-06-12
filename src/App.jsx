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
  const [formCreate, setFormCreate] = useState(false);
  const [formUpdate, setFormUpdate] = useState(false);
  //SetUSerId
  const [userId, setuserId] = useState(null);
  const formAddUser = () => {
    setFormCreate(true);
  };
  const formUpdateUser = () => {
    setFormUpdate(true);
  };
  const createUserSubmit = async (data) => {
    await createUser(data);
    setFormCreate(false);
    setUsers((prevUsers) => [...prevUsers, data]);
  };

  const loadUsers = async () => {
    try {
      const users = await getUser();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (userId) => {
    await deleteUser(userId);
    await loadUsers();
  };
  const updateUserSubmit = async (data) => {
    await updateUser(userId, data);
    setFormUpdate(false);
    await loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);
  //
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Navbar activateForm={formAddUser} />
      <UserList
        users={users}
        handleDelete={handleDelete}
        activateForm={formUpdateUser}
        setUserId={setuserId}
      />
      <Modal isVisible={formCreate}>
        <Form submit={createUserSubmit} typeForm="Agregar nuevo usuario" />
      </Modal>
      <Modal isVisible={formUpdate}>
        <Form submit={updateUserSubmit} typeForm="Actualizar usuario" />
      </Modal>
      <Footer />
    </div>
  );
};

export default App;
