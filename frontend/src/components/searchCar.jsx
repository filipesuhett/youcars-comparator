'use client';
import React from 'react';
import axios from 'axios';
import { useState } from 'react'
import "../app/globals.css"

const api = axios.create({
    baseURL: 'http://localhost:3001'
  })


  const styles = {
    Button: {
      cursor: 'pointer',
      top: '656px',
      left: '560px',
      width: '306px',
      height: '40px',
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
    },
    containerOptions: {
      width: '418px',
      height: '518px',
      backgroundColor: '#fff',
    },
    Text: {
      color: '#000000',
      fontSize: '24px',
      fontFamily: 'Open Sans',
      fontWeight: '500',
      lineHeight: '31px',
    },
    Dropdown: {
      cursor: 'pointer',
      top: '279px',
      left: '73px',
      width: '309px',
      height: '52px',
      padding: '0px 8px',
      border: '0',
      boxSizing: 'border-box',
      borderRadius: '24px',
      boxShadow: '2px 2px 4px rgba(3,3,3,0.1)',
      backgroundColor: '#f5f5f5',
      color: '#919191',
      fontSize: '16px',
      fontFamily: 'Source Sans 3',
      fontWeight: 500,
      lineHeight: '20px',
      outline: 'none',
    },
  };


const Buttonteste = (props) => {
    const [marca, setMarca ] = useState([])
    const [modelo, setModelo ] = useState([])
    const [ano, setAno ] = useState([])

    function handleClickGetMarca(){
        
      api.get('/car/marca').then((dado)=>{
      setMarca(dado.data)
      })
    }

    function handleClickGetModelo(){
        
      api.get('/car/modelo').then((dado)=>{
      setModelo(dado.data)
      })
    }

    function handleClickGetAno(){
        
      api.get('/car/ano').then((dado)=>{
      setAno(dado.data)
      })
    }

  return (
    <div >
      
            <select style={styles.Dropdown} defaultValue="" onClick={handleClickGetMarca}>
              <option value="" > {props.label ?? `Selecione uma Marca` }</option>
              {marca.map((value) => (<option value={value.marca} key={value.marca}>{value.marca}</option>))}
            </select>

            <select style={styles.Dropdown} defaultValue="" onClick={handleClickGetModelo}>
              <option value="" > {props.label ?? `Selecione um Modelo` }</option>
              {modelo.map((value) => (<option value={value.modelo} key={value.modelo}>{value.modelo}</option>))}
            </select>

            <select style={styles.Dropdown} defaultValue="" onClick={handleClickGetAno}>
              <option value="" > {props.label ?? `Selecione uma Ano` }</option>
              {ano.map((value) => (<option value={value.ano} key={value.ano}>{value.ano}</option>))}
            </select>

            <button style={styles.Button} >Pesquisar</button>
    </div>
  );
};

export default Buttonteste;