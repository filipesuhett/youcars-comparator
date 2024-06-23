'use client'
import React, { useState } from 'react';
import axios from 'axios';
import '../app/globals.css';

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

const Cadastrar = (props) => {
  const [novo_login, setLogin] = useState('');
  const [nova_senha, setSenha] = useState('');
  const [repita_senha, setRepitaSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(novo_login === '' || nova_senha ==='' || repita_senha ===''){
      alert('Preencha todos os campos');
      return;
    }

    if(nova_senha != repita_senha){ 
      alert('As Senhas não Estão Iguais');
      return;
    }

    await api.post('/api/registrar', {
      novo_login,
      nova_senha
    })
    .then(response => {
      console.log('Resposta do servidor:', response.data);
      if(response.data.sucesso == 0){alert("Error: " + response.data.erro)}
      // Lógica adicional após o registro, como redirecionar para outra página
    })
  };

  return (
    <form className='flex justify-center flex-col items-center' onSubmit={handleSubmit} style={styles.formLogin}>
      <div style={styles.logoYouCars}>
        <p>You Cars</p>
      </div>
      <p style={styles.text}>Faça seu Cadastro</p>
      <label htmlFor="novo_login" style={styles.labelLogin}>Usuário:</label>
      <input type="text" id='novo_login' name='novo_login' style={styles.inputLogin} onChange={(e) => setLogin(e.target.value)} />
      <label htmlFor="nova_senha" style={styles.labelLogin}>Senha:</label>
      <input type="password" id='nova_senha' name='nova_senha' style={styles.inputLogin} onChange={(e) => setSenha(e.target.value)} />
      <label htmlFor="repita_senha" style={styles.labelLogin}>Repita Senha:</label>
      <input type="password" id='repita_senha' name='repita_senha' style={styles.inputLogin} onChange={(e) => setRepitaSenha(e.target.value)} />

      <button type='submit' style={styles.Button} >Cadastrar</button>
    </form>
  );
};

export default Cadastrar;
