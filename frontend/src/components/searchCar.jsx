'use client';
import React from 'react';
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import "../app/globals.css";
import {getUser, getPassword} from '../helpers/util.jsx';
import { useSearchParams, useRouter } from "next/navigation.js"

const api = axios.create({
    baseURL: 'http://localhost:3001'
  })


  const styles = {
    Card1: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '418px',
      minHeight: '200px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxSizing: 'border-box',
      gap: '20px',
      border: '5px solid #505050',
      padding: '50px 0 50px 0 ',
    },
    Card2: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '418px',
      minHeight: '200px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxSizing: 'border-box',
      gap: '20px',
      border: 'none',
      padding: '50px 0 50px 0 ',
    },
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
    Text: {
      color: '#000000',
      fontSize: '24px',
      fontFamily: 'Open Sans',
      fontWeight: '500',
      lineHeight: '31px',
    },
    Dropdown1: {
      cursor: 'pointer',
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
    Dropdown2: {
      display:'none'
    }
  };


const SearchCar = (props) => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const [marcas, setMarcas ] = useState([])
    const [marca, setMarca ] = useState(searchParams.get('marca') || '')

    const [modelos, setModelos ] = useState([])
    const [modelo, setModelo ] = useState(searchParams.get('modelo') || '')

    const [anos, setAnos ] = useState([])
    const [ano, setAno ] = useState(searchParams.get('ano') || '')

    const [ dropdownMarca, setdropdownMarca ] = useState(styles.Dropdown1)
    const [ dropdownModelo, setdropdownModelo ] = useState(styles.Dropdown2)
    const [ dropdownAno, setdropdownAno ] = useState(styles.Dropdown2)
    const [ login, setLogin ] = useState('')
    const [ senha, setSenha] = useState('')

    const [marca1, setMarca1 ] = useState('')
    const [modelo1, setModelo1 ] = useState('')
    const [ano1, setAno1 ] = useState('')


    

    useEffect(() => {
        if(marca != ''){
          api({
            method: 'get',
            url:'/api/filtercar',
            auth:{
              username:getUser(),
              password:getPassword()
            },
            params: {
              marca: marca,
              modelo: modelo,
              ano: ano
            }
            
          })
          .then(response => {
            console.log('Resposta do servidor:', response.data);
            props.criarCarros(response.data)
            setdropdownModelo( styles.Dropdown2 )
            setdropdownAno( styles.Dropdown2 )
          }).catch(erro => {
              alert("Erro ao buscar os Modelos")
          })
        } 

    }, [marca, modelo, ano]);

    useEffect(() => {
      setLogin(getUser())
      setSenha(getPassword())

    }, []);

    
    

    async function handleClickGetMarcas(){
        
      await api({
        method: 'get',
        url:'/api/brand',
        auth:{
          username:login,
          password:senha
        }
        
      })
      .then(response => {
        console.log('Resposta do servidor:', response.data);
          setMarcas(response.data)
          setdropdownModelo( styles.Dropdown1 )
      }).catch(erro => {
          alert("Erro ao buscar as Marcas")
      })
      
    }

    async function handleClickGetModelo(){
      await api({
        method: 'get',
        url:'/api/model',
        auth:{
          username:login,
          password:senha
        },
        params: {
          marca: marca1
        }
        
      })
      .then(response => {
        console.log('Resposta do servidor:', response.data);
          setModelos(response.data)
          setdropdownAno( styles.Dropdown1 )
      }).catch(erro => {
          alert("Erro ao buscar os Modelos")
      })
    }

    async function handleClickGetAno(){
        
      await api({
        method: 'get',
        url:'/api/year',
        auth:{
          username:login,
          password:senha
        },
        params: {
          marca: marca1,
          modelo: modelo1
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
      const params = new URLSearchParams(window.location.search);

      params.set('marca', marca1);
      params.set('modelo', modelo1);
      params.set('ano', ano1);

      
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.location.href = newUrl;
      
    }

  return (
    <div style={styles.Card2}>
      
            <select style={dropdownMarca} defaultValue="" onClick={handleClickGetMarcas} onChange={(e) => setMarca1(e.target.value)}>
              <option value=""> {props.label ?? `Selecione uma Marca` }</option>
              {marcas.map((value) => (<option value={value.marca} key={value.marca}>{value.marca}</option>))}
            </select>

            <select style={dropdownModelo} defaultValue="" onClick={handleClickGetModelo}  onChange={(e) => setModelo1(e.target.value)}>
              <option value="" > {props.label ?? `Selecione um Modelo` }</option>
              {modelos.map((value) => (<option value={value.modelo} key={value.modelo}>{value.modelo}</option>))}
            </select>

            <select style={dropdownAno} defaultValue="" onClick={handleClickGetAno} onChange={(e) => setAno1(e.target.value)}>
              <option value="" > {props.label ?? `Selecione um Ano` }</option>
              {anos.map((value) => (<option value={value.ano} key={value.ano} >{value.ano}</option>))}
            </select>

            <button style={styles.Button} onClick={handleClickPesquisarCarro}>Pesquisar</button>
    </div>
  );
};

export default SearchCar;