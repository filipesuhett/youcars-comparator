import React from 'react';
import Image from 'next/image';
import "../app/globals.css"


const styles = {
    Button
  

};

const defaultImage = "/img/carro.png"

const Opinion = (comentario) => {
  console.log(comentario)

  return (
    <div style={styles.Button}>
    </div>
  );
};

export default Opinion;