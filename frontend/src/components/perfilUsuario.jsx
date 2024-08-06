import React from 'react';
import Image from 'next/image';
import "../app/globals.css"
import Opinion from "../components/opinion.jsx"
import { useState, useEffect } from 'react'
import { getDetalheCarro, getUser, getPassword } from '../helpers/util.jsx'
import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3001'
  })

const styles = {
    containerPerfil: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
      },
      coments: {
        display: 'flex',
        width: '1053px',
        height: '680px',
        backgroundColor: '#a9a9a9',
        borderRadius: '24px',
      },
      excluirPerfil: {
        display: 'flex',
        flexDirection: 'column',
        padding: '36px 0 0 0',
        margin: '0 0 35px'
      },
      ButtonExcluir: {
        cursor: 'pointer',
        width: '108px',
        height: '36px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#030303',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Source Sans 3',
        fontWeight: 700,
        lineHeight: '16px',
        outline: 'none',
      },
      containerInfos: {
        width: '70%',
        margin: '30px 0 0 30px'
      },
      TEXTconfig: {
        color: '#030303',
        fontSize: '20px',
        fontFamily: 'Source Sans 3',
        fontWeight: 600,
        lineHeight: '32px',
        margin: '0 0 40px 0'
      },
      containerNomeExibição: {
        display: 'flex',
        flexDirection: 'column',
      },
      Input: {
        width: '377px',
        height: '48px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#f8f8f8',
        color: '#8f8f8f',
        fontSize: '15px',
        fontFamily: 'Source Sans 3',
        fontWeight: 500,
        lineHeight: '24px',
        outline: 'none',
      },
      HorizontalDivider: {
        width: '785px',
        height: '2px',
        backgroundColor: '#8f8f8f',
        borderRadius: '2px',
        margin: '50px 0 50px 0'
      },
      TitleConfig: {
        color: '#030303',
        fontSize: '20px',
        fontFamily: 'Source Sans 3',
        fontWeight: 600,
        lineHeight: '32px',
      },
      containerSenhas: {
        display: 'flex',
        gap: '20px',
        margin: '20px 0 30px 0'
      },
      Salvar: {
        cursor: 'pointer',
        width: '144px',
        height: '36px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#030303',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Source Sans 3',
        fontWeight: 700,
        lineHeight: '16px',
        outline: 'none',
      },
      title: {
        color: '#030303',
        fontSize: '48px',
        fontFamily: 'Source Sans 3',
        fontWeight: 600,
        lineHeight: '48px',
      },
      containertitle: {
        width: '1053px',
        margin: '0 0 40px 0'
      }
  
  

};


const PerfilUsuario = ({display}) => {
    const [login, setLogin] = useState('')
    const [comentario, setComentario] = useState([]);

    useEffect(() => {
        setLogin(getUser())
    
        api({
          method: 'get',
          url:'/api/list_comment_user',
          auth:{
            username:getUser(),
            password:getPassword()
          }
          
          
        })
        .then(response => {
          console.log('Resposta do servidor:', response.data);
          setComentario(response.data.comentarios)
        }).catch(erro => {
            alert(erro)
        })
      }, []);


  if(display == true) {
    return (
      <div style={styles.containerPerfil}>
          <div style={styles.containertitle}>
              <h1 style={styles.title}>Seus Comentários</h1>
          </div>
          
            <div style={styles.coments}>
              <div style={styles.containerInfos}>
              {comentario.map((comentario) => (<Opinion key={comentario.id} comentario={comentario} login={login}/>))}
                  
              </div>
  
            </div>
      </div>
    );
  };

  }
  

export default PerfilUsuario;


