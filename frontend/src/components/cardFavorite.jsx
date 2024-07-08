'use client'
import React from 'react';
import Image from 'next/image';
const imagemCarro = "https://cdn.discordapp.com/attachments/1026594236017160312/1253116567630250034/image.png?ex=6674af3f&is=66735dbf&hm=7f411f909408547bdeae8c15690aaae29adc76b05a5c5245ba28b652d8b990de&"
import "../app/globals.css"
import { useState, useEffect } from 'react'
import {getUser, getPassword} from '../helpers/util.jsx'

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

const styles = {
  
  Card: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "Column",
    width: '438px',
    height: '313px',
    backgroundColor: '#e5e7eb',
    borderRadius: '24px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
  },
  imge: {
    width: '200px',
    height: '150px',
    borderRadius: '24px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '0 0 0 17px'
  },
  text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Source Sans 3',
    fontWeight: 700,
    lineHeight: '28px',
    margin: '0 0 0 17px'
  },
  textinfo: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans 3',
    fontWeight: 500,
    lineHeight: '24px',
    margin: '0 0 0 17px'
  },
  infoEadicionar: {
    display: 'Flex',
    flexDirection: 'column',
    width: '100%',
    height:'80px'
  },
  preco: {
    display: 'Flex',
    flexDirection: "Column",
  },
  buttonAdicionar: {
    cursor: 'pointer',
    width: '404px',
    height: '20px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#f43030',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '20px',
    outline: 'none',
  },
  pPreco: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans 3',
    fontWeight: 300,
    lineHeight: '21px',
  },
  buttonCircle: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '32px',
    color: '#ffffff',
    backgroundColor: '#f43030',
    outline: 'none',
    margin: ' 0 33px 0 0'
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  }
};

const defaultImage = "/img/carro.png"

const CardFavorite = (carro ) => {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  useEffect(() => {
    setLogin(getUser())
    setSenha(getPassword())
  }, []);


  function handleClickRemoveFavorite(){
    api({
      method: 'post',
      url:'/remove_favorite',
      auth:{
        username:login,
        password:senha
      },
      data:{
        carro_id: carro.carro.id
      }
      
    })
    .then(response => {
      console.log('Resposta do servidor:', response.data);
      if(response.data.sucesso == 1){
        window.location.href = "/favorite";
      }
      else{
        alert("ERRO")
      }
    })
  }
  return (
    <div style={styles.Card}>

        <div style={styles.containerImage}>
            <Image
            priority={true}
            style={styles.imge}
            src={carro.carro.img ?? defaultImage }
            width={241}
            height={236}
            alt="Picture of the author"/>

            <a href="" style={styles.buttonCircle}></a>

        </div>
        
        <div style={styles.infoEadicionar}>
            <p style={styles.text}>{carro.carro.marca ?? "Uno Prateado"}</p> 
            <p style={styles.textinfo}>{carro.carro.modelo ?? "Eletrico"}</p>
            <p style={styles.textinfo}>{carro.carro.ano ?? 2024}</p>
        </div>

        <button style={styles.buttonAdicionar} onClick={handleClickRemoveFavorite}>Remover</button>
        
    </div>
  );
};

export default CardFavorite;