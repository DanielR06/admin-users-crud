import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './components/Modal/Modal';
import UserList from './components/UserList/UserList';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import { getUser } from './services';

const App = () => {
  //useState de Usuarios
  const [users, setUsers] = useState([]);
  //Form visible
  const [isFormVisible, setisFormVisible] = useState(false);
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
  useEffect(() => {
    loadUsers();
  }, []);
  //
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Navbar addUserAction={handleClick} />
      <UserList users={users} />
      <Modal isVisible={isFormVisible}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div>
            <label htmlFor="nameId">First Name: </label>
            <input type="text" id="nameId" {...register('first_name')} />
          </div>
          <div>
            <label htmlFor="lastNameId">Last Name:</label>
            <input type="text" id="lastNameId" {...register('last_name')} />
          </div>
          <div>
            <label htmlFor="mailId">Email: </label>
            <input type="email" id="mailId" {...register('email')} />
          </div>
          <div>
            <label htmlFor="passwordId">Password: </label>
            <input type="password" id="passwordId" {...register('password')} />
          </div>
          <div>
            <label htmlFor="">Birthday: </label>
            <input type="date" id="" {...register('birthday')} />
          </div>
          <div>
            <button>Agregar nuevo usuario</button>
          </div>
        </form>
      </Modal>
      <Footer />
    </div>
  );
};

export default App;
