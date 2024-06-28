'use client';
import React from 'react';
import axios from 'axios';
import { useState } from 'react'
import "../app/globals.css"
import {getUser, getPassword} from '../helpers/util.jsx'

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
      margin: '10px',
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
    const [marcas, setMarcas ] = useState([])
    const [marca, setMarca ] = useState('')

    const [modelos, setModelos ] = useState([])
    const [modelo, setModelo ] = useState('')

    const [anos, setAnos ] = useState([])
    const [ano, setAno ] = useState('')

    const [carros, setCarros ] = useState([])

    const login = getUser()
    const senha = getPassword()

    async function handleClickGetMarcas(){
        
      await api({
        method: 'post',
        url:'/api/brand',
        auth:{
          username:login,
          password:senha
        }
        
      })
      .then(response => {
        console.log('Resposta do servidor:', response.data);
          setMarcas(response.data)
      }).catch(erro => {
          alert("Erro ao buscar as Marcas")
      })
    }

    async function handleClickGetModelo(){
      await api({
        method: 'post',
        url:'/api/model',
        auth:{
          username:login,
          password:senha
        },
        data: {
          marca: marca
        }
        
      })
      .then(response => {
        console.log('Resposta do servidor:', response.data);
          setModelos(response.data)
      }).catch(erro => {
          alert("Erro ao buscar os Modelos")
      })
    }

    async function handleClickGetAno(){
        
      await api({
        method: 'post',
        url:'/api/year',
        auth:{
          username:login,
          password:senha
        },
        data: {
          marca: marca,
          modelo: modelo
        }
        
      })
      .then(response => {
        console.log('Resposta do servidor:', response.data);
          setAnos(response.data)
      }).catch(erro => {
          alert("Erro ao buscar os Modelos")
      })
    }

    async function handleClickPesquisarCarro(){
        
      await api({
        method: 'post',
        url:'/api/filtercar',
        auth:{
          username:login,
          password:senha
        },
        data: {
          marca: marca,
          modelo: modelo,
          ano: ano
        }
        
      })
      .then(response => {
        console.log('Resposta do servidor:', response.data);
        props.criarCarros(response.data)
      }).catch(erro => {
          alert("Erro ao buscar os Modelos")
      })
    }

  return (
    <div className='flex flex-col'>
      
            <select style={styles.Dropdown} defaultValue="" onClick={handleClickGetMarcas} onChange={(e) => setMarca(e.target.value)}>
              <option value=""> {props.label ?? `Selecione uma Marca` }</option>
              {marcas.map((value) => (<option value={value.marca} key={value.marca}>{value.marca}</option>))}
            </select>

            <select style={styles.Dropdown} defaultValue="" onClick={handleClickGetModelo}  onChange={(e) => setModelo(e.target.value)}>
              <option value="" > {props.label ?? `Selecione um Modelo` }</option>
              {modelos.map((value) => (<option value={value.modelo} key={value.modelo}>{value.modelo}</option>))}
            </select>

            <select style={styles.Dropdown} defaultValue="" onClick={handleClickGetAno} onChange={(e) => setAno(e.target.value)}>
              <option value="" > {props.label ?? `Selecione um Ano` }</option>
              {anos.map((value) => (<option value={value.ano} key={value.ano} >{value.ano}</option>))}
            </select>

            <button style={styles.Button} onClick={handleClickPesquisarCarro}>Pesquisar</button>
    </div>
  );
};

export default Buttonteste;