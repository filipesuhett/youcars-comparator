import axios from 'axios';
import React from "react"
import "../app/globals.css"

import { getUser } from '../../helpers/util.jsx'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

const styles = {

  Text: {
    color: '#030303',
    fontSize: '15px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '24px',
  },
  opicoes: {
    width: '300px',
    height: '900px',
    backgroundColor: '#a9a9a9',
  },
  coments: {
    width: '1053px',
    height: '639px',
    backgroundColor: '#a9a9a9',
    borderRadius: '24px',
  },
  Button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: '320px',
    height: '44px',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '24px',
    color: '#000000',
    fontSize: '14px',
    fontFamily: 'Source Sans 3',
    lineHeight: '20px',
    outline: 'none',
  },

  };

export default function Home() {
  if(getUser){
    return (
      <div className="flex h-100% flex-col items-center justify-between bg-white">

        <div>

        </div>

        <div style={styles.opicoes}>
            <a style={styles.Button} href="/search">Voltar a pesquisa</a>
            <a style={styles.Button} href="/favoritePage">Favoritos</a>
            <a style={styles.Button} href="/settings">Settings</a>
        </div>

        <div style={styles.coments}>
            <p>Seus comentários</p>
            

        </div>

          
      </div>
      
    );
  }
  else{
    <div>
        <p>Faça login para visializar essa página</p>
    </div>
  }
  
}
