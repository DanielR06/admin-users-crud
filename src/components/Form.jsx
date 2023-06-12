import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Form.css';
const Form = ({ submit, typeForm }) => {
  //UseForm Hook
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(submit)} id="form" className="padding">
      <h3>{typeForm}</h3>
      <div className="inputs">
        <label htmlFor="nameId">Nombres: </label> <br />
        <input type="text" id="nameId" {...register('first_name')} required />
      </div>
      <div className="inputs">
        <label htmlFor="lastNameId">Apellidos:</label> <br />
        <input type="text" id="lastNameId" {...register('last_name')} required />
      </div>
      <div className="inputs">
        <label htmlFor="mailId">Correo: </label> <br />
        <input type="email" id="mailId" {...register('email')} />
      </div>
      <div className="inputs">
        <label htmlFor="passwordId">Contraseña: </label> <br />
        <input type="password" id="passwordId" {...register('password')} required />
      </div>
      <div className="inputs">
        <label htmlFor="">Cumpleaños: </label> <br />
        <input type="date" id="" {...register('birthday')} required />
      </div>
      <div className="button_submit">
        <input type="submit" value="Guardar cambios" />
      </div>
    </form>
  );
};

export default Form;
