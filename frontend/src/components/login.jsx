'use client'
import React, { useState } from 'react';
import axios from 'axios';
import '../app/globals.css';
import {guardarLogin} from '../helpers/util.jsx'

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

const styles = {
  formLogin: {
    width: '400px',
    height: '488px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 10px 15px rgba(0,0,0,0.1)',
  },
  inputLogin: {
    width: '320px',
    height: '44px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#f8f8f8',
    color: '#94a3b8',
    fontSize: '14px',
    fontFamily: 'Source Sans 3',
    lineHeight: '44px',
    outline: 'none',
    margin: '0px 0 25px 0px'
  },
  Button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: '320px',
    height: '44px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#df0907',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans 3',
    lineHeight: '20px',
    outline: 'none',
    margin: '20px 0 0 0'
  },
  logoYouCars: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Source Sans 3',
    letterSpacing: '-0.6px',
    lineHeight: '32px',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80px',
    color: '#030303',
    fontSize: '24px',
    fontFamily: "Source Sans 3",
    lineHeight: '32px',
    textAlign: 'center',
  },
  labelLogin: {
    width: '100%',
    padding: '0 0 0 45px',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Source Sans 3',
    lineHeight: '20px',
  }
};

const Login = (props) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(login === '' || senha ===''){
      alert('Preencha todos os campos');
      return;
    }


    await api({
      method: 'post',
      url:'/api/login',
      auth:{
        username:login,
        password:senha
      }
      
    })
    .then(response => {
      console.log('Resposta do servidor:', response.data);
      if(response.data.sucesso == 1){
        guardarLogin(login, senha);
        window.location.href = '/';
      }
    }).catch(erro => {
        alert("Erro ao fazer o login")
    })
  };

  return (
    <form className='flex justify-center flex-col items-center' onSubmit={handleSubmit} style={styles.formLogin}>
      <div style={styles.logoYouCars}>
        <p>You Cars</p>
      </div>
      <p style={styles.text}>Bem vindo de Volta</p>
      <label htmlFor="login" style={styles.labelLogin}>Usuário:</label>
      <input type="text" id='login' name='login' style={styles.inputLogin} onChange={(e) => setLogin(e.target.value)} />
      <label htmlFor="senha" style={styles.labelLogin}>Senha:</label>
      <input type="password" id='senha' name='senha' style={styles.inputLogin} onChange={(e) => setSenha(e.target.value)} />

      <button type='submit' style={styles.Button} >Conectar</button>
      <a style={styles.Button} href="/register">Criar Conta</a>
    </form>
  );
};

export default Login;
