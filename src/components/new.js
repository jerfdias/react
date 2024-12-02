import React from 'react'
import Logo from '../assets/volks.png';
import '../components/new.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function New() {
  return (

    <div>
      
     <main className='principalContent'>
    
     <form action='POST' className='formulario'>
      <img src={Logo} className='Logo'id='Logo'/>
      <FaUser className='iconeUser'id="iconeUser" /><label for="nomeCliente">Email:</label>

    
     <input type="email"id="nomeCliente" placeholder='digite seu email'></input>
     <FaLock  id='iconeLock'/>
     <label for="senhaCliente">Senha:</label>
     <input type="password" id='senhaCliente' className='senhaCliente' required  placeholder='digite sua senha aqui'></input>
     <button type>Login</button>
     </form>
    
       

      </main>
    </div>
  )
}

export default New
