import React from 'react';
import Image from 'next/image';
import "../app/globals.css"


const styles = {

  Card: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "Column",
    width: '100%',
    height: '50px',
    backgroundColor: '#e5e7eb',
    borderRadius: '24px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
  },
  imge: {
    width:'100px',
    height:'100px',
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

};

const defaultImage = "/img/carro.png"

const Opinion = (comentario) => {
  console.log(comentario)

  return (
    <div style={styles.Card}>
      <div>
        <p>{comentario.texto}</p>
        <p>{comentario.created_at}</p>
      </div>
      
        
    </div>
  );
};

export default Opinion;