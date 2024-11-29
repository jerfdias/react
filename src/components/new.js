import React from 'react'
import Image from '../assets/img.jpeg';
import Logo from '../assets/volks.png';

function New() {
  return (

    <div>
      
     <main className='principalContent'>
     <img src={Image}/>
     <form action='POST' className='formulario'>
      <img src={Logo}/>
     <label for="nomeCliente">Nome:</label>
     <input type="email"id="nomeCliente" placeholder='digite seu email'></input>
     <label for="senhaCliente">Senha:</label>
     <input type="password" id='senhaCliente' className='senhaCliente' required  placeholder='digite sua senha aqui'></input>
     <button type>Login</button>
     </form>
       

      </main>
    </div>
  )
}

export default New
