'use client'
import React from 'react';
import Image from 'next/image';

const styles = {
  Card: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "Column",
    width: '221px',
    height: '316px',
    backgroundColor: '#ffffff',
    border: '1px solid #aa93f3',
    boxSizing: 'border-box',
  },
  imge: {
    width: '191px auto',
    height: '172px auto',
    borderRadius: '16px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Manrope',
    fontWeight: 700,
    lineHeight: '26px',
    textAlign: 'center',
  },
  Button: {
    cursor: 'pointer',
    width: '193px',
    height: '40px',
    padding: '0px 8px',
    border: '1px solid #aa93f3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#f43030',
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Manrope',
    fontWeight: '500',
    lineHeight: '26px',
    outline: 'none',
  },
};



const defaultImage = "/img/carro.png"
const CardCompare = ( { carro, removerCarro } ) => {

  function handleClickRemoveCarro(){
    removerCarro(carro)
  }

  return (
    <div style={styles.Card}>

      
      <Image
        priority={true}
        style={styles.imge}
        src={carro.img ?? defaultImage }
        width={191}
        height={236}
        alt="Picture of the author"/>

        <p style={styles.Text}>{`${carro.modelo}  ${carro.versao} ${carro.ano}` ?? "Nome do carro"}</p> 
        <p style={styles.Text}>{`Preço: ${carro.preco}` ?? "Preco do carro"}</p> 

        <button style={styles.Button} onClick={handleClickRemoveCarro}>Remover</button>


    </div>
  );
};

export default CardCompare;