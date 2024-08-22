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
    display:'flex',
    right: '70px',
    top: '10px',
  },
  Icon:{
    width:'25px',
    height:'25px'
  },
  irCarro:{
    position: 'absolute',
    right: '20px',
    top: '10px'
  },
  buttonCircle: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '32px',
    color: '#ffffff',
    backgroundColor: '#f43030',
    outline: 'none',
    position: 'absolute',
    right: '20px',
    top: '10px'
  }

};

const IconTrash = () => (
  <svg style={styles.Icon} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 6l3 18h12l3-18H3zm14 4v12H7V10h10zm-7-6V3h4v1h5v2H5V4h5z"></path>
  </svg>
);


const Opinion = ({comentario, login, excluir, pagUsuario}) => {
  const [excluirComentario, setExcluirComentario] = useState(false)
  useEffect(() => {
    if(getUser() == comentario.login || login){
      setExcluirComentario(true)
    }else{
      setExcluirComentario(false)
    }
  }, [comentario.login]);
  
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

  function handleClickIrCarro() {
    window.location.href = `/search/${comentario.carro_id}`;
  }

  return (
    <div style={styles.Card}>
      {excluirComentario ? <button style={styles.excluir} onClick={handleClickExcluirComentario} title="Excluir comentário"><IconTrash/></button> : <p></p>}
      {pagUsuario ? <button style={styles.buttonCircle} onClick={handleClickIrCarro} title="Ir para o carro">{'=>'}</button> : <p></p>}
        
      <div style={styles.userComment}>

        <p style={styles.name}>{login ?? comentario.login}</p>
        <br></br>
        <p style={styles.text}>{comentario.texto ?? "Caralho achei esse Carro Sensacional, em 2023 eu comprei 7 deles para doar para um ong e eles me agradeceram imensamente" } </p>
      </div>
      
      <div style={styles.cantinho}>
        
        <p style={styles.date}>{comentario.created_at ?? "20/04/2023 20:20"}</p>
      </div>  
    </div>
  );
};

export default Opinion;