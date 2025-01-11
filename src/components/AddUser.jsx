import React, { useState } from 'react';
import { addUsers as userAction } from '../slices/userSlice';
import { useDispatch } from 'react-redux';


const AddUser = () => {
    
    const dispatch = useDispatch();

    const [name, setName]=useState('Ebin');
    const [email, setEmail]=useState('ebin@gmail.com');

    const addUser = () =>{
        dispatch(userAction(name,email))
    }
  return (
    <div>
        <label htmlFor='name'>Name</label>
        <input name='name'type='text' placeholder='name' value={name} onChange={ (e)=> setName(e.target.value) }/>
        
        <label htmlFor='email'>Email</label>
        <input name='email'type='text' placeholder='name'value={email} onChange={ (e)=> setEmail(e.target.value) }/>

        <button onClick={addUser}>Add</button>
    </div>

  )
}

export default AddUser;