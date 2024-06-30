'use client'
import Card from "../../../components/cardCar.jsx"
import CardCompare from "../../../components/cardCompare.jsx"
import Footer from "../../../components/footer.jsx"
import Header from "../../../components/header.jsx"
import Image from 'next/image';
import axios from 'axios';
import CartextInfo from "../../../components/cartextInfo.jsx"
import "../../globals.css"
import { useState, useEffect } from 'react'
import { getDetalheCarro } from '../../../helpers/util.jsx'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

const styles = {
  imge: {
    width: '672px',
    height: '400px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '16px 31px 0 24px'
  },
  TitleText: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Source Sans 3',
    lineHeight: '32px',
    margin: '0 0 20px 0'
  },
  containerInfo: {
    display: 'flex',
    width: '100vw',
    justifyContent: 'space-between',
    margin: '16px 0 0 0'
  },
  Button: {
    cursor: 'pointer',
    width: '350px',
    height: '38px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#f43030',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans 3',
    fontWeight: 700,
    lineHeight: '23px',
    outline: 'none',
  },
  ButtonFavorite: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: '249px',
    height: '36px',
    padding: '0px 8px',
    margin: '0 0 45px 0 ',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#f43030',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Source Sans 3',
    fontWeight: 500,
    lineHeight: '15px',
    outline: 'none',
  },
  ButtonEnviar: {
    cursor: 'pointer',
    width: '91px',
    height: '36px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#f43030',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans 3',
    lineHeight: '20px',
    outline: 'none',
  },
  informations: {
    display: 'flex',
    flexDirection: 'column'

  },
  containerButton:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'end',
    margin: "93px 34px 0 0"
  },
  containerTextCarro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  },
  containerRightInfos: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50vw',
    height: '390px'
  },
  addComents: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    padding: '0 0 0 24px',
  },
  TextComentTitle: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Source Sans 3',
    lineHeight: '28px',
  },
  Input: {
    width: '1375px',
    height: '50px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#f5f5f5',
    color: '#94a3b8',
    fontSize: '20px',
    fontFamily: 'Source Sans 3',
    lineHeight: '150px',
    outline: 'none',
    margin: '10px 0 10px 0'
  },
  coments: {
    width: '800px',
    height: '250px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
  },
  Icon: {
    color: '#ffcc00',
    fill: '#ffcc00',
    fontSize: '29px',
    top: '161px',
    left: '1267px',
    width: '29px',
    height: '29px',
  },

}

const defaultImage = "/img/carro2.png"

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z">
    </path>
  </svg>
);


export default function CarDetais() {

  const [carro, setCarro] = useState([]);
  
  useEffect(() => {
    setCarro(getDetalheCarro())
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col bg-white">
      <Header/>

      <div style={styles.containerInfo}>
        
          <Image
          priority={true}
          style={styles.imge}
          src={ carro.img ?? defaultImage }
          width={672}
          height={400}
          alt="Picture of a car"/>


          <div style={styles.informations}>
            <div style={styles.containerRightInfos}>
              <div style={styles.containerTextCarro}>
                <p style={styles.TitleText}>Especificações do carro</p>
                <CartextInfo carro={carro} />

              </div>
              <div style={styles.containerButton}>
                <button style={styles.ButtonFavorite}><IconComponent /></button>
                <button style={styles.Button}>Adicionar Comparador</button>
              </div>
           
            </div>


            <div>
              <p>Comentários dos Usuários</p>
              <div style={styles.coments}>

              </div>
            </div>

          </div>
      
      </div>

        <div style={styles.addComents}>
          <p style={styles.TextComentTitle}>Comente aqui</p>
          <input style={styles.Input} placeholder="Deixe seu comentário sobre o carro aqui" />
          <button style={styles.ButtonEnviar}>Enviar</button>
        </div>

      <Footer position={'fixed'}/>
    </div>
    
  );
}
