import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/loginScreen.css'


const LoginScreen = () => {

  const {handleSubmit, register, reset} = useForm()
  const [isLogged, setIsLogged] = useState(false)

  const submit = data => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.data.token)
        setIsLogged(true)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }
  
  if(isLogged) {
    return (
    <div className='logout'>
      <h2>¡HELLO!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
    )
  }

  return (
    <div className='login-screen'>
      <div className='login-screen__container'>
        <h3 className='title'>Welcome! Enter your email and password to continue</h3>
         <div className='login-screen__data'>
          <h3>Test data</h3>
          <p><i class="fa-regular fa-envelope"></i><span>jaime@gmail.com</span></p>
          <p><i class="fa-solid fa-lock"></i><span>andres1234</span></p>
        </div> 
        <form className='login-screen__form' onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' {...register('email')} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' {...register('password')} />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen