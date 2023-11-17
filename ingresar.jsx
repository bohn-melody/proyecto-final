import React from 'react'
import { useForm } from '../useForm'
import {useNavigate} from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import "./ingresar.css"
  export const Login = () => {

  const navigate = useNavigate();
    
  const { name, email, password, onInputChange, onResetForm} =
  useForm ({
    name: '',
    email: '',
    password: '',
  })
  const onLogin = (e) => {
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
    <h1 className='titulo'>Iniciar Sesion</h1>
    <div className='wrapper'>
      <form onSubmit={onLogin}>
        
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
           
           <button className='button'>Entrar</button>
        </div>
      </form>
    </div>

    </>
  )
};