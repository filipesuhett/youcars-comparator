'use client'
import React, { useState } from 'react';
import axios from 'axios';
import '../app/globals.css';
import { guardarCarro, getcarros, guardarCarros  } from '../helpers/util.jsx'
import CardCompare from './CardCompare';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

const styles = {
    button:{
        position: 'fixed',
        width:'80px',
        height:'80px',
        bottom:'8vh',
        right: '2vw',
        backgroundColor: '#f43030',
        borderRadius:'50%',
        color: '#ffffff',
        fontSize: '40px',
        fontWeight: 'bold',
        fontFamily: 'Source Sans 3',
        boxShadow: ' 0px 0px 4px black',
        zIndex:'2'
    },
    Button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '396px',
        height: '52px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#f43030',
        color: '#ffffff',
        fontSize: '22px',
        fontFamily: 'Source Sans 3',
        fontWeight: '500',
        lineHeight: '29px',
        outline: 'none',
        margin: '40px 0 0 0'
      },
    popupComparator:{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.199)',
        zIndex: '2',
        top:'0',
        left:'0'
    },
    popupComparatorOptions: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        width: '700px',
        height: '700px',
        backgroundColor: '#ffffff',
        borderRadius: '26px',
        
      },
      popupComparatorOptionsCar: {
        display: 'flex',
        margin: '80px 0 0 0',
        gap: '10px'
      },
      sairPopup: {
        position: 'absolute',
        top: '20px',
        right: '40px',
        fontSize:'40px',
        fontWeight: '700',
        cursor: 'pointer'
      },
      TextComparador:{
        fontSize: '32px',
        fontFamily: 'Roboto',
        lineHeight: '42px',
      }
}
const Globalcomparator = (props) => {
    const [carrosComparador,setCarrosComparador] = useState([])
    const [isActive,setIsActive] = useState(false)

function handleClickPopup(){
    if(!isActive){
        setCarrosComparador(getcarros)
        setIsActive(true)
    }else{
        setIsActive(false)
    }
}

async function handleClickCarrosParaComparar(){
    window.location.href = "/search/compareTool";
  }

  function removerComparador(carro) {
    // Lógica para remover o carro do comparador
    const novoComparador = getcarros().filter(c => c.id !== carro.id);
    guardarCarros(novoComparador)
    setCarrosComparador(getcarros())
    
  }

if(!isActive){
    return (
        <button style={styles.button} onClick={handleClickPopup} title="Comparador">C 
        </button>
      );

}else{
    return (
        <div style={styles.popupComparator}>
          <div style={styles.popupComparatorOptions}>
          <div style={styles.sairPopup} onClick={handleClickPopup}>X</div>
            <p style={styles.TextComparador}>Carros Adicionados</p>
            <div style={styles.popupComparatorOptionsCar}>
            {carrosComparador.map((carro) => (<CardCompare key={carro.id} carro={carro} removerCarro={removerComparador} />))}
            </div>
            <button style={styles.Button} onClick={handleClickCarrosParaComparar} >Comparar</button>
          </div>
        </div>
      );
}
  
};

export default Globalcomparator;
