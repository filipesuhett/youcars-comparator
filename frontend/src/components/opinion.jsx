import React from 'react';
import Image from 'next/image';
import "../app/globals.css"

const styles = {
  
  Card: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: "Column",
    width: '672px',
    minHeight: '80px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1.5px solid #e5e7eb',
    boxSizing: 'border-box',
    padding: '14px'
  },
  date:{
    color: '#919191',
    fontSize: '12px',
    fontFamily: 'Source Sans 3',
    lineHeight: '16px',
  },
  text: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans 3',
    lineHeight: '24px',
  },
  name:{
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans 3',
    lineHeight: '24px',
    fontWeight: 'bold'
  },
  userComment: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cantinho:{
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '100%',
  },

};


const Opinion = (props) => {

  const pegarComentarios = async (event) =>{
    
  }

  return (
    <div style={styles.Card}>
        
      <div style={styles.userComment}>

        <p style={styles.name}>{props.usuario ?? "Marli"}</p>
        <p style={styles.text}>{props.comentario ?? "Caralho achei esse Carro Sensacional, em 2023 eu comprei 7 deles para doar para um ong e eles me agradeceram imensamente" } </p>
        
      </div>
      
      <div style={styles.cantinho}>
        <p style={styles.date}>{props.date ?? "20/04/2023 20:20"}</p>
      </div>  
    </div>
  );
};

export default Opinion;