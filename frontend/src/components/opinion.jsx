'use client'
import React from 'react';
import Image from 'next/image';
import "../app/globals.css"
import { useState, useEffect } from 'react'
import { getUser, getPassword } from '../helpers/util.jsx'
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
})


const styles = {
  
  Card: {
    position: 'relative',
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: "Column",
    width: '100%',
    minHeight: '120px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1.5px solid #e5e7eb',
    boxSizing: 'border-box',
    padding: '14px',
    overflow: 'hidden'
  },
  date:{
    color: '#919191',
    fontSize: '12px',
    fontFamily: 'Source Sans 3',
    lineHeight: '16px',
  },
  text: {
    display: 'flex',
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans 3',
    lineHeight: '24px',
    minHeight: '20px',
  },
  name:{
    display: 'flex',
    width: '100%',
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans 3',
    lineHeight: '24px',
    fontWeight: 'bold'
  },
  userComment: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80px',
    width: '100%'
  },
  cantinho:{
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '100%',
  },
  excluir:{
    position: 'absolute',
    right: '10px',
    top: '10px'
  }

};


const Opinion = ({comentario, login, excluir}) => {
  const [excluirComentario, setExcluirComentario] = useState(false)
  useEffect(() => {
    if(getUser() == comentario.login || getUser() == login){
      setExcluirComentario(true)
    }
  }, []);
  async function handleClickExcluirComentario(){
    await api({
      method: 'post',
      url:'/api/remove_comment',
      auth:{
        username:getUser(),
        password:getPassword(),
      },
      data: {
        id_carro: comentario.carro_id

      }
      
    })
    .then(response => {
      console.log('Resposta do servidor:', response.data);
      excluir()
    }).catch(erro => {
        alert(erro)
    })
  }
  return (
    <div style={styles.Card}>
      {excluirComentario ? <button style={styles.excluir} onClick={handleClickExcluirComentario}>excluir</button> : <p></p>}
        
      <div style={styles.userComment}>

        <p style={styles.name}>{login ?? comentario.login}</p>
        <p style={styles.text}>{comentario.texto ?? "Caralho achei esse Carro Sensacional, em 2023 eu comprei 7 deles para doar para um ong e eles me agradeceram imensamente" } </p>
      </div>
      
      <div style={styles.cantinho}>
        
        <p style={styles.date}>{comentario.created_at ?? "20/04/2023 20:20"}</p>
      </div>  
    </div>
  );
};

export default Opinion;