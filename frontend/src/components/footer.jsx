import React from 'react';

const styles = {
  Footer: {
    top: '1847px',
    left: '0px',
    width: '100%',
    height: '87px',
    backgroundColor: '#f43030',
  },
  TextTitle: {
    color: '#030303',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '22px',
    textAlign: 'left'
  },
  Text: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 300,
    lineHeight: '16px',
    textAlign: 'right',
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