import axios from 'axios';

const BASE_URL = 'https://users-crud.academlo.tech/';

//Peticion Get de los usuarios
export const getUser = async () => {
  try {
    const res = await axios.get(BASE_URL + 'users/');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
//Peticion Post para crear el usuario, recibe por parametros un objeto con los datos
export const createUser = async (dataUser) => {
  try {
    await axios.post(BASE_URL + 'users/', dataUser);
    console.log('Se creo existosamente');
  } catch (error) {
    console.log(error);
  }
};
//Peticion delete para eliminar un usuario
export const deleteUser = async (userId) => {
  try {
    await axios.delete(BASE_URL + `users/${userId}/`);
    console.log(`El usuario con el id ${userId} fue eliminado`);
  } catch (error) {
    console.error(error);
  }
};
//Peticion Put para actualizar cuando se edite el usuario
export const updateUser = async (userId, userUpdated) => {
  try {
    await axios.put(BASE_URL + `users/${userId}/`, userUpdated);
    console.log(`El usuario ${userUpdated.name} fue actualizado correctamente`);
  } catch (error) {
    console.error(error);
  }
};
