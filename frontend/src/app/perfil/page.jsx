'use client'
import axios from 'axios';
import React from "react"
import "../globals.css"
import Settings from '../../components/settings.jsx';
import PerfilUsuario from '../../components/perfilUsuario.jsx';
import { getDetalheCarro, getUser, getPassword } from '../../helpers/util.jsx'
import Opinion from "../../components/opinion.jsx"
import { useState, useEffect } from 'react'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

const styles = {
  screen:{
    display:'flex',
    position: 'relative',
    width: '100vw',
    height:'100vh'
  },
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '20px',
  },
  opicoes: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '100vh',
    backgroundColor: '#a9a9a9',
    padding: '42px 0 0 35px'
  },
  Button: {
    display: 'flex',
    cursor: 'pointer',
    width: '320px',
    height: '44px',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '24px',
    color: '#000000',
    fontSize: '18px',
    fontWeight: '500',
    fontFamily: 'Source Sans 3',
    lineHeight: '20px',
    outline: 'none',
    margin: '0 0 0 35px'
  },
  Icon: {
    color: '#030303',
    fill: '#030303',
    fontSize: '26px',
    margin: '0 6px 0 0',    
    top: '176px',
    left: '40px',
    width: '25px',
    height: '25px',
  },
  
  ButtonSearch: {
    position: 'absolute',
    cursor: 'pointer',
    top: '31px',
    right: '138px',
    width: '106px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#df0907',
    color: '#ffffff',
    fontSize: '15px',
    fontFamily: 'Source Sans 3',
    fontWeight: 700,
    lineHeight: '20px',
    outline: 'none',
  },
  voltar: {
    display: 'flex',
    margin: '0 0 120px 0',
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Source Sans 3',
    fontWeight: 600,
    lineHeight: '26px'
  }

};

const IconSettings = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z">
    </path>
    <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm13.1-8.16c.01-.11.02-.22.02-.34 0-.12-.01-.23-.03-.34l.74-.58c.07-.05.08-.15.04-.22l-.7-1.21c-.04-.08-.14-.1-.21-.08l-.86.35c-.18-.14-.38-.25-.59-.34l-.13-.93A.182.182 0 0 0 20.2 3h-1.4c-.09 0-.16.06-.17.15l-.13.93c-.21.09-.41.21-.59.34l-.87-.35c-.08-.03-.17 0-.21.08l-.7 1.21c-.04.08-.03.17.04.22l.74.58a1.953 1.953 0 0 0 0 .68l-.74.58c-.07.05-.08.15-.04.22l.7 1.21c.04.08.14.1.21.08l.87-.35c.18.14.38.25.59.34l.13.93c.01.09.08.15.17.15h1.4c.09 0 .16-.06.17-.15l.13-.93c.21-.09.41-.21.59-.34l.87.35c.08.03.17 0 .21-.08l.7-1.21c.04-.08.03-.17-.04-.22l-.73-.58zm-2.6.91a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm.42 3.93-.5-.87c-.03-.06-.1-.08-.15-.06l-.62.25c-.13-.1-.27-.18-.42-.24l-.09-.66A.15.15 0 0 0 18 10h-1c-.06 0-.11.04-.12.11l-.09.66c-.15.06-.29.15-.42.24l-.62-.25c-.06-.02-.12 0-.15.06l-.5.87c-.03.06-.02.12.03.16l.53.41c-.01.08-.02.16-.02.24 0 .08.01.17.02.24l-.53.41c-.05.04-.06.11-.03.16l.5.87c.03.06.1.08.15.06l.62-.25c.13.1.27.18.42.24l.09.66c.01.07.06.11.12.11h1c.06 0 .12-.04.12-.11l.09-.66c.15-.06.29-.15.42-.24l.62.25c.06.02.12 0 .15-.06l.5-.87c.03-.06.02-.12-.03-.16l-.52-.41c.01-.08.02-.16.02-.24 0-.08-.01-.17-.02-.24l.53-.41c.05-.04.06-.11.04-.17zm-2.42 1.65c-.46 0-.83-.38-.83-.83 0-.46.38-.83.83-.83s.83.38.83.83c0 .46-.37.83-.83.83zM4.74 9h8.53c.27 0 .49-.22.49-.49v-.02a.49.49 0 0 0-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26a.49.49 0 0 0-.49.49v.03c0 .26.22.48.49.48zM9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3z">
    </path>
  </svg>
);

const IconPerson = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M12 5.9a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z">
    </path>
  </svg>
);

const IconBack = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z">
    </path>
    <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z">
    </path>
  </svg>
);


export default function Perfil() {
  const [login, setLogin] = useState('')

  useEffect(() => {
    setLogin(getUser())
  }, []);
  
  if(login != null){
    return (
      <div style={styles.screen} className="flex h-screen w-screen bg-white">

        <button style={styles.ButtonSearch}>Buscar Carro</button>


        <div style={styles.opicoes}>
            <a style={styles.voltar} href="/search"><IconBack/> Voltar a pesquisa</a>
            <a style={styles.Button} href="/settings"><IconPerson/> Perfil</a>
            <a style={styles.Button} href="/settings"><IconSettings/> Settings</a>
        </div>

        < PerfilUsuario />
  
      </div>
      
    );
  }
  else{
    <div>
        <p>Faça login para visializar essa página</p>
    </div>
  }
  
}
