import Card from "../components/cardCar.jsx"
import CardCompare from "../components/cardCompare.jsx"
import Footer from "../components/footer.jsx"
import Header from "../components/header.jsx"
import ResulComp from "../components/resulComp.jsx"
import Opinion from "../components/opinion.jsx"
import ButtonTeste from "../components/searchCar.jsx"
import CardComent from "../components/cardComent.jsx"
import Image from 'next/image';
import './globals.css';
import axios from 'axios';
import React from "react"

import {getUser} from '../helpers/util.jsx'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

const styles = {
  Header: {
    display: 'Flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "Row",
    width: '100%',
    height: '13vh',
    backgroundColor:'#ffffff',
    padding: '0 94px 0 120px'
  },
  Text: {
    color: '#000000',
    fontSize: '18px',
    fontFamily: 'Source Sans 3',
    fontWeight: 400,
    lineHeight: '24px',
  },
    mainHome: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr',
      height: '90vh',
      width: '100vw'
    },
    Button: {
      display: 'Flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      width: '178px',
      height: '52px',
      padding: '0px 8px',
      border: '0',
      boxSizing: 'border-box',
      borderRadius: '24px',
      backgroundColor: '#f43030',
      color: '#ffffff',
      fontSize: '16px',
      fontFamily: 'Source Sans 3',
      fontWeight: 500,
      lineHeight: '20px',
      outline: 'none',
      margin: '0 0 0 200px',
    },
    Title: {
      width: "40vw",
      color: '#030303',
      fontSize: '56px',
      fontFamily: 'Source Sans 3',
      fontWeight: 700,
      lineHeight: '68px',
      margin: '150px 0 0 10vw',
      padding: "0 0 80px"
    },
    mainHomeInfo:{
      display: 'Flex',
      flexDirection: 'column',
      gridColumn: '1 / 2',
      height: "77vh"
    },
    mainHomeContainerImage:{
      display: 'Flex',
      height: "87vh"
    },
    mainHomeImage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '368px',
      height: '389px',
      gridColumn: '2 / 2',
      backgroundColor: '#a9a9a9',
      borderRadius: '24px',
      margin: '130px 0 0 300px',
    },
    imge: {
      width: '337px',
      height: '315px',
      borderRadius: '24px',
      backgroundImage: 'url(./image.jpeg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    TextPerfil: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '111.99999999999989px',
      height: '48px',
      padding: '0px 8px',
      border: '0',
      boxSizing: 'border-box',
      borderRadius: '24px',
      backgroundColor: '#030303',
      color: '#ffffff',
      fontSize: '16px',
      fontFamily: 'Source Sans 3',
      fontWeight: 700,
      lineHeight: '22px',
      outline: 'none',
    },
    CarHome: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    TitleCarHome: {
      color: '#030303',
      fontSize: '24px',
      fontFamily: 'Source Sans 3',
      fontWeight: 500,
      lineHeight: '30px',
      margin: '0 0 50px 200px'
    },
    MaisComentadoCarHome: {
      display: 'flex',
      width: '100vw',
      justifyContent: 'center',
      gap: '40px',

    },
    InfoCarHome: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '89px 0 0 0'

    },
    TextInfoCarHome: {
      width: '40vw',
      color: '#030303',
    fontSize: '32px',
    fontFamily: 'Source Sans 3',
    fontWeight: 700,
    lineHeight: '38px',
    margin: '0 0 0 100px'
    },
    ImageInfoCarHome: {
      width: '352px',
      height: '352px',
      borderRadius: '24px',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
    }
  };

export default function Home() {
  if(getUser){
    return (
      <div className="flex h-100% flex-col items-center justify-between bg-white">
          <nav style={styles.Header}>
            <p style={styles.Text}>You Cars</p>
            <a style={styles.TextPerfil} href="/perfil">Perfil</a>
          </nav>

          <section style={styles.mainHome}>
            <div style={styles.mainHomeInfo}>
              <h1 style={styles.Title}> Compare os detalhes dos mais diversos carros</h1>
              <a style={styles.Button} href="/search">Pesquisar carros</a>
            </div>
            <div style={styles.mainHomeContainerImage}>
              <div style={styles.mainHomeImage}>
              <Image
              priority={true}
              style={styles.imge}
              src={'/img/medidor.png'}
              width={241}
              height={236}
              alt="Medidor"/>
              </div>
            </div>
            
            
          </section >

          <section style={styles.CarHome}>
          <h2 style={styles.TitleCarHome}>Carros mais comentados</h2>
            <div style={styles.MaisComentadoCarHome}>
            <CardComent/>
            <CardComent/>
            <CardComent/>
            <CardComent/>
            </div>
            
            <div style={styles.InfoCarHome}>
            
            <Image
              priority={true}
              style={styles.ImageInfoCarHome}
              src={'/img/yellow.png'}
              width={352}
              height={352}
              alt="Carro Amarelo"/>


              <h3 style={styles.TextInfoCarHome}>Explore nossa coleção de carros e encontre o par perfeito hoje mesmo.</h3>
            </div>
            
          </section>
          
          <Footer />
      </div>
      
    );
  }
  else{
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <nav style={styles.Header}>
          <p style={styles.Text}>You Cars</p>
            <a style={styles.Button} href="/login">Fazer login</a>
          </nav>

          <section style={styles.mainHome}>
            <div>
              <h1 style={styles.Title}> Compare os detalhes dos mais diversos carros</h1>
              <a style={styles.Button} href="/login">Pesquisar carros</a>
            </div>
            <div>
              <img src="" alt="" />
            </div>
            
          </section>

          <section>
            <h2>Carros mais comentados</h2>
            <CardComent/>
          </section>
          <Footer/>
      </div>
  }
  
}
