import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './components/Modal/Modal';
import UserList from './components/UserList/UserList';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import { getUser, createUser, deleteUser } from './services';

const App = () => {
  //useState de Usuarios
  const [users, setUsers] = useState([]);
  //Form visible
  const [isFormVisible, setisFormVisible] = useState(false);
  //UseForm Hook
  const { register, handleSubmit, reset } = useForm();
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
    reset();
    setisFormVisible(false);
    setUsers((prevUsers) => [...prevUsers, data]);
  };
  const handleDelete = async (userId) => {
    await deleteUser(userId);
    await loadUsers();
  };
  useEffect(() => {
    loadUsers();
  }, []);
  //
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Navbar addUserAction={handleClick} />
      <UserList users={users} handleDelete={handleDelete} />
      <Modal isVisible={isFormVisible}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nameId">First Name: </label>
            <input type="text" id="nameId" {...register('first_name')} required />
          </div>
          <div>
            <label htmlFor="lastNameId">Last Name:</label>
            <input type="text" id="lastNameId" {...register('last_name')} required />
          </div>
          <div>
            <label htmlFor="mailId">Email: </label>
            <input type="email" id="mailId" {...register('email')} required />
          </div>
          <div>
            <label htmlFor="passwordId">Password: </label>
            <input type="password" id="passwordId" {...register('password')} required />
          </div>
          <div>
            <label htmlFor="">Birthday: </label>
            <input type="date" id="" {...register('birthday')} required />
          </div>
          <div>
            <input type="submit" value="Agregar nuevo usuario" />
          </div>
        </form>
      </Modal>
      <Footer />
    </div>
  );
};

export default App;
