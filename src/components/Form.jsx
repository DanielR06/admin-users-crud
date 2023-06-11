import React from 'react';
import { useForm } from 'react-hook-form';
const Form = ({ submit, typeForm }) => {
  //UseForm Hook
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(submit)}>
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
        <input type="submit" value={typeForm} />
      </div>
    </form>
  );
};

export default Form;
