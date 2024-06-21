import Card from "../../components/cardCar.jsx"
import CardCompare from "../../components/cardCompare.jsx"
import Footer from "../../components/footer.jsx"
import Header from "../../components/header.jsx"
import ResulComp from "../../components/resulComp.jsx"
import Opinion from "../../components/opinion.jsx"

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const api = axios.create({
  baseURL: 'http://localhost:3000'
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
    fontFamily: 'Source Sans Pro',
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
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '20px',
    outline: 'none',
  },
};




export default function Search() {
  let dados = {}
  let marca = ""
  let ano = ""
  let modelo = ""
  
  const pegarDadosBD = (nome) =>{
    api.get(`/${nome}`, (values)=>{
      dados = values
    })
  }

  

  return (
    <div className=" bg-white flex min-h-screen flex-col items-center justify-between p-24">
        <Header/>

        <div style={styles.containerOptions}>
            <p style={styles.Text}>Pesquise alguma característica do carro</p>

            <select style={styles.Dropdown} defaultValue="" onClick={pegarDadosBD("marca")}>
              <option value="" disabled hidden> {props.label ?? "Selecione uma marca" }</option>
              {dados.map((value) => (<option value={value} key={value} onClick={marca = value}>{value}</option>))}
            </select>

            <select style={styles.Dropdown} defaultValue="" onClick={pegarDadosBD("ano")}>
              <option value="" disabled hidden> {props.label ?? "Selecione uma opção" }</option>
              {dados.map((value) => (<option value={value} key={value}>{value}</option>))}
            </select>

            <select style={styles.Dropdown} defaultValue="" onClick={pegarDadosBD("modelo")}>
              <option value="" disabled hidden> {props.label ?? "Selecione uma opção" }</option>
              {dados.map((value) => (<option value={value} key={value}>{value}</option>))}
            </select>
          
          <button style={styles.Button} onClick={(marca,ano,modelo)}>Pesquisar</button>

        </div>

        <div style = {styles.results}>

        </div>

        <div  style = {styles.comparar}>
          <button>Comparar</button>
        </div>

        <Footer/>

    </div>
    
  );
}
