import React from 'react';
import "../app/globals.css"

const styles = {
  Footer: {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'static',
    width: '100vw',
    height: '40px',
    backgroundColor: '#f43030',
  },
  TextTitle: {
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '22px',
    textAlign: 'left',
    padding: '10px',
    margin: '0 0 0 120px'
  },
  Text: {
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 300,
    lineHeight: '16px',
    textAlign: 'right',
    padding: '10px',
    margin: '0 120px 0 0'
  },
};

const Footer = () => {
  return (
    <div style={styles.Footer}>
        <p style={styles.TextTitle}>YouCars</p>

        <p style={styles.Text}>© IFES Serra 2024</p>
    </div>
  );
};

export default Footer;