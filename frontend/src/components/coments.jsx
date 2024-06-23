/import React from 'react';
import Image from 'next/image';

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
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '22px',
  },

};

const defaultImage = "/img/carro.png"

const Opinion = (props) => {
  return (
    <div style={styles.Card}>
      <Image
        priority={true}
        style={styles.imge}
        src={props.urlIMG ?? defaultImage }
        width={100}
        height={100}
        alt="Picture of the author"/>
        
      <div>
        <p>{props.comentario}</p>
      </div>
      
        
    </div>
  );
};

export default Opinion;