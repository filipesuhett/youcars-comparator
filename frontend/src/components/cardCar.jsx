'use client';
import React from 'react';
import Image from 'next/image';
import "../app/globals.css"
import { guardarDetalheCarro } from '../helpers/util.jsx'

const styles = {
  
  Card: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "Column",
    width: '273px',
    height: '410px',
    backgroundColor: '#e5e7eb',
    borderRadius: '24px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    cursor: 'pointer',
    padding:'0 0 10px 0'
  },
  imge: {
    width:'241px',
    height:'236px',
    borderRadius: '24px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  text: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '100%',
    color: '#030303',
    fontSize: '18px',
    fontFamily: 'Source Sans 3',
    fontWeight: 700,
    lineHeight: '22px',
  },
  infoEadicionar: {
    display: 'Flex',
    justifyContent: 'space-around',
    alignItems: 'end',
    width: '100%',
    height:'80px'
  },
  preco: {
    display: 'Flex',
    flexDirection: "Column",
  },
  like: {
    display: 'Flex',
    flexDirection: "Column",
  },
  buttonLike: {
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    color: '#ffffff',
    backgroundColor: '#f43030',
    outline: 'none',
  },
  buttonAdicionar: {
    cursor: 'pointer',
    width: '78px',
    height: '42px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#f43030',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans 3',
    fontWeight: 500,
    lineHeight: '18px',
    outline: 'none',
  },
  pPreco: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans 3',
    fontWeight: 300,
    lineHeight: '21px',
  }
};



const defaultImage = "/img/carro.png"

const Card = ({ carro, adicionarComparador }) => {

  async function handleClickAddCarro(){
    adicionarComparador( carro )
  }

  async function handleClickInfoCarro(){
    window.location.href = `/search/${carro.id}`;
    //navigate(`/product/${item.id}`); 
  }

  return (
    <div style={styles.Card}>
        <p style={styles.text}>{`${carro.modelo}  ${carro.versao } ${carro.ano}` ?? "Nome do carro"}</p> 

        <Image
        priority={true}
        style={styles.imge}
        src={carro.img ?? defaultImage }
        width={300}
        height={300}
        alt="Picture of the author"
        onClick={handleClickInfoCarro}
        />

          <div style={styles.infoEadicionar}>
            <div style={styles.preco}>
              <p style={styles.pPreco}>Preço</p>
              <p>{carro.preco ?? "20.50"}</p>
            </div>
          <button style={styles.buttonAdicionar} onClick={handleClickAddCarro}>Adicionar</button>
          </div>
        
    </div>
  );
};

export default Card;