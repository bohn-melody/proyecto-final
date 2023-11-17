import React from 'react'
import { useForm } from '../useForm'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import "./registrarse.css"

const Registrarse = () => {
  
  const navigate = useNavigate();

  const { name, lastname, email, password, onInputChange, onResetForm} =
  useForm ({
    name: '',
    lastname:'',
    email: '',
    password: '',
  })

  const onRegister = (e) =>{
e.preventDefault()
navigate('/dashboard', {
  replace: true,
  state: {
      logged: true,
      name
  }
})
onResetForm();
  }
  return (
    <>
    <Navbar/>
    <h1 className='titulo'>Crear nueva cuenta</h1>
    <div className='wrapper'>
      <form onSubmit={onRegister}>
        
        <div className='input-group'>
        <label htmlFor='name'> Nombre:</label>
          <input 
          type='text'
           name='name' 
           id='name' 
           value={name} 
           onChange={onInputChange}
           required 
           autoComplete='off'
           />
          
        </div>

        <div className='input-group'>
        <label htmlFor='lastname'> Apellido:</label>
          <input 
          type='text'
           name='lastname' 
           id='lastname' 
           value={lastname} 
           onChange={onInputChange}
           required 
           autoComplete='off'
           />
          
        </div>

        <div className='input-group'>
        <label htmlFor='email'> Email:</label>
          <input 
          type='email'
           name='email' 
           id='email' 
           value={email} 
           onChange={onInputChange}
           required 
           autoComplete='off'
           />
          
        </div>

        <div className='input-group'>
        <label htmlFor='password'> Contraseña:</label>
          <input 
          type='password'
           name='password' 
           id='password' 
           value={password} 
           onChange={onInputChange}
           required 
           autoComplete='off'
           />

           <button className='button'>Registrarse</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Registrarse

 