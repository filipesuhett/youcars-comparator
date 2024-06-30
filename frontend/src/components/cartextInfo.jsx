'use client'
import React from 'react';
import "../app/globals.css"

const styles = {
  Card: {
    display: 'Flex',
    flexDirection: "Column",
    alignItems: 'start',
    minHeight: '400px'
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
    fontWeight: 600,
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


const CartextInfo = ( { carro } ) => {

  return (
    <div style={styles.Card}>

        <p style={styles.Text}>{`Marca: ${carro.marca}` ??'Marca do carro'}</p>
        <p style={styles.Text}>{`Modelo: ${carro.modelo}` ?? "Modelo do carro"}</p> 
        <p style={styles.Text}>{`Ano: ${carro.ano}` ?? "Ano do carro"}</p> 
        <p style={styles.Text}>{`Cavalos: ${carro.cavalos}` ?? "Cavalos"}</p> 
        <p style={styles.Text}>{`Consumo na cidade: ${carro.consucidade}` ?? "Consumo na cidade"}</p> 
        <p style={styles.Text}>{`Consumo na estrada: ${carro.consuestrada}` ?? "Consumo na estrada"}</p> 
        <p style={styles.Text}>{`Tipo de direção: ${carro.direcao}` ?? "Direção"}</p> 
        <p style={styles.Text}>{`Tipo de freio: ${carro.freio}` ?? "Freio"}</p> 
        <p style={styles.Text}>{`Velocidade máxima: ${carro.maxvelo}` ?? "Velocidade máxima"}</p> 
        <p style={styles.Text}>{`Versão do carro: ${carro.versao}` ?? "Versão"}</p>
        <p style={styles.Text}>{`Preço: ${carro.preco}` ?? "Preco do carro"}</p> 
        
    </div>
  )
}
export default CartextInfo;