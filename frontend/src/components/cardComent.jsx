import React from 'react';
import Image from 'next/image';
import "../app/globals.css"
const styles = {
  
  Card: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "Column",
    width: '306px',
    height: '324px',
    backgroundColor: '#e5e7eb',
    borderRadius: '24px',
    border: '1px solid #030303',
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

const CardComent = (props) => {
  return (
    <div style={styles.Card}>

        <p style={styles.text}>{props.nome ?? "Uno Prateado"}</p> 

        <Image
        priority={true}
        style={styles.imge}
        src={props.urlIMG ?? defaultImage }
        width={241}
        height={236}
        alt="Picture of the author"/>

          <div style={styles.infoEadicionar}>
            <div style={styles.preco}>
              <p style={styles.pPreco}>Preço</p>
              <p>{props.preco ?? "20.50"}</p>
            </div>
            <div style={styles.like}>
              <p>{props.quantidadeLike ?? "2.5k"}</p>
            </div>
          </div>
        
    </div>
  );
};

export default CardComent;