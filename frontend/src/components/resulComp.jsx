import React from 'react';
import Image from 'next/image';

const styles = {
  
  Card: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "Column",
    width: '223px',
    height: '520px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #505050',
    boxSizing: 'border-box',
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
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '22px',
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
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '22px',
  }
};

const defaultImage = "/img/carro.png"

const ResulComp = (props) => {
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
        

        <div style={styles.especificacao}>
            
            <div style={styles.informacoes}>
                <p style={styles.text}>Marca</p>
                <p style={styles.textresult}>{props.marca ?? "Honda"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.text}>Modelo</p>
            <p style={styles.textresult}>{props.modelo ?? "modelo"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.text}>Ano</p>
            <p style={styles.textresult}>{props.ano ?? "xx/xx/xxxx"}</p>
            </div>
            
            <div style={styles.informacoes}> 
            <p style={styles.text}>Preço</p>
            <p style={styles.textresult}>{props.preco ?? "preco"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.text}>Consumo</p>
            <p style={styles.textresult}>{props.consumoCidade ?? "consumoCITY"}</p>
            </div>

            <div style={styles.informacoes}>
            <p style={styles.text}>Consumo</p>
            <p style={styles.textresult}>{props.consumoEstrada ?? "consumo"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.text}>Cavalos</p>
            <p style={styles.textresult}>{props.cavalos ?? "cavalos"}</p>
            </div>

            <div style={styles.informacoes}>
            <p style={styles.text}>Direção</p>
            <p style={styles.textresult}>{props.direcao ?? "direcao"}</p>
            </div>
            
            <div style={styles.informacoes}>
            <p style={styles.text}>Freio</p>
            <p style={styles.textresult}>{props.freio ?? "freio"}</p>  
            </div>

            
        </div>
    </div>
  );
};

export default ResulComp;