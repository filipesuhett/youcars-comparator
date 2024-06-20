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
    width:'241px',
    height:'236px',
    borderRadius: '24px',
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
    top: '767px',
    left: '505px',
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

const CardCompare = (props) => {
  return (
    <div style={styles.Card}>

        {/* 
        Eu só copiei a forma que marlin fez imagem em cardCars......
        */}
      
      <Image
        priority={true}
        style={styles.imge}
        src={defaultImage}
        width={241}
        height={236}
        alt="Picture of the author"/>

        <p style={styles.Text}>{props.nome ?? "Nome do carro"}</p> 

        <button style={styles.Button}>Remover</button>


    </div>
  );
};

export default CardCompare;