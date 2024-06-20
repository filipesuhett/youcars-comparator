import React from 'react';
import Image from 'next/image';
const imagemCarro = "https://cdn.discordapp.com/attachments/1026594236017160312/1253116567630250034/image.png?ex=6674af3f&is=66735dbf&hm=7f411f909408547bdeae8c15690aaae29adc76b05a5c5245ba28b652d8b990de&"

const styles = {
  
  Card: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "Column",
    width: '273px',
    height: '454px',
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
    fontFamily: 'Source Sans Pro',
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
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '18px',
    outline: 'none',
  },
  pPreco: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 300,
    lineHeight: '21px',
  }
};

const defaultImage = "/img/carro.png"

const Card = (props) => {
  return (
    <div style={styles.Card}>

        <p style={styles.text}>{props.nome ?? "Uno Prateado"}</p> 

        <Image
        priority={true}
        style={styles.imge}
        src={defaultImage}
        width={241}
        height={236}
        alt="Picture of the author"/>

          <div style={styles.infoEadicionar}>
            <div style={styles.preco}>
              <p style={styles.pPreco}>Preço</p>
              <p>{props.preco ?? "20.50"}</p>
            </div>
            <div style={styles.like}>
              <button style={styles.buttonLike}></button>
              <p>{props.quantidadeLike ?? "2.5k"}</p>
            </div>
          <button style={styles.buttonAdicionar}>Adicionar</button>
          </div>
        
    </div>
  );
};

export default Card;