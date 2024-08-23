'use client'
import Footer from "../../components/footer.jsx"
import Header from "../../components/header.jsx"
import ResulComp from "../../components/resulComp.jsx"
import CardFavorite from "../../components/cardFavorite.jsx"
import "../globals.css"
import { useState, useEffect } from 'react'
import {getUser, getPassword} from '../../helpers/util.jsx'
import React from "react"
import axios from 'axios'; 
import Globalcomparator from "../../components/globalcomparator.jsx"

const api = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

const styles = {
  ContainerResult: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '80px',
    margin: '0 0 50px 0',
    flex: '1',
    width:'100%'

  },
  Text: {
    color: '#030303',
    fontSize: '32px',
    fontFamily: 'Source Sans 3',
    fontWeight: '500',
    lineHeight: '42px',
    margin: '81px 0 59px 0 '
  }
}
export default function Search() {
  const [carros, setCarros] = useState([]);
  
  useEffect(() => {
    if(getUser() == 'null') return;
    const login = getUser();
    const senha = getPassword();
    api({
      method: 'get',
      url:'/list_favorite',
      auth:{
        username:login,
        password:senha
      }
      
    })
    .then(response => {
      console.log('Resposta do servidor:', response.data);
      if(response.data.sucesso == 1){
        setCarros(response.data.favoritos)
      }
      else{
        alert("ERRO")
      }
    })
  }, []);

  if(getUser() != 'null'){
    return (
      <div className="flex min-h-screen w-full flex-col items-center bg-white">
            <Header />
            <Globalcomparator/>
            <h1 style={styles.Text}>Seus Carros Favoritos</h1>
            <div style={styles.ContainerResult}>
              {carros.map((carro) => (<CardFavorite key={carro.carro[0].id} carro={carro.carro[0]} />))}
            </div>
            <Footer />
      </div>
      
    );

  }
  else{
    return window.location.href = '/login'
  }

}
