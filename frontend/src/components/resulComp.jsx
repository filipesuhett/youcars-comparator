import React from 'react';
import Image from 'next/image';
import "../app/globals.css"

const styles = {
  
  Card: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "Column",
    width: '300px',
    height: '450px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #505050',
    boxSizing: 'border-box',
    paddin:'20px 0'
  },
  imge: {
    width: '186px',
    height: '240px',
    borderRadius: '24px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  text: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '23px',
    width: '100%',
    color: '#030303',
    fontSize: '18px',
    fontFamily: 'Source Sans 3',
    fontWeight: 700,
    lineHeight: '22px',
  },
  textInfo: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '23px',
    width: '100%',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Source Sans 3',
    lineHeight: '20px',
    fontWeight: 700,
  },
  especificacao: {
    display: 'Flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height:'220px',
  },
  informacoes: {
    display: 'Flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  textresult: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '23px',
    width: '100%',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Source Sans 3',
    lineHeight: '20px',
  },
  imge:{
    width:'200px',
    height:'150px'
  }
};

const defaultImage = "/img/carro.png"

const ResulComp = ({ carro }) => {
  return (
    <div style={styles.Card}>

        <p style={styles.text}>{carro.modelo ?? "Uno Prateado"}</p> 

        <Image
        priority={true}
        style={styles.imge}
        src={carro.img ?? defaultImage }
        width={250}
        height={250}
        alt="Picture of the author"/>
        

        <div style={styles.especificacao}>
            
            <div style={styles.informacoes}>
                <p style={styles.textInfo}>Marca</p>
                <p style={styles.textresult}>{carro.marca ?? "Honda"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.textInfo}>Modelo</p>
            <p style={styles.textresult}>{carro.modelo ?? "modelo"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.textInfo}>Ano</p>
            <p style={styles.textresult}>{carro.ano ?? "xx/xx/xxxx"}</p>
            </div>
            
            <div style={styles.informacoes}> 
            <p style={styles.textInfo}>Preço</p>
            <p style={styles.textresult}>{carro.preco ?? "preco"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.textInfo}>Consumo cidade</p>
            <p style={styles.textresult}>{carro.consucidade ?? "consumoCITY"}</p>
            </div>

            <div style={styles.informacoes}>
            <p style={styles.textInfo}>Consumo estrada</p>
            <p style={styles.textresult}>{carro.consuestrada ?? "consumo"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.textInfo}>Cavalos</p>
            <p style={styles.textresult}>{carro.cavalos ?? "cavalos"}</p>
            </div>

            <div style={styles.informacoes}>
            <p style={styles.textInfo}>Direção</p>
            <p style={styles.textresult}>{carro.direcao ?? "direcao"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.textInfo}>Freio</p>
            <p style={styles.textresult}>{carro.freio ?? "freio"}</p>  
            </div>

            
        </div>
    </div>
  );
};

export default ResulComp;