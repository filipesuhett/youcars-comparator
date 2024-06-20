import React from 'react';

const styles = {
  Header: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    //esse row aqui procede ou eu errei? Aliais, teria q colocar um paddind nas coisas ou só fixar elas nos devidos lugares da navBar?
    flexDirection: "Row",
    top: '0px',
    left: '0px',
    width: '100%',
    height: '64px',
    backgroundColor: '#f43030',
  },
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '16px',
    top: '24px',
    left: '24px',
    width: '16px',
    height: '16px',
  },
  Button: {
    cursor: 'pointer',
    width: '120px',
    height: '32px',
    padding: '0px 5px',
    border: '0',
    boxSizing: 'border-box',
    backgroundColor: 'None',
    
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
    lineHeight: '24px',
    outline: 'none',
  },
};

const IconComponent = () => (
    <svg style={styles.Icon}  viewBox="0 0 512 512">
      <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z">
      </path>
    </svg>
  );
  
  const defaultProps = {
    IconComponent,
  };

const Header = () => {
  return (
    <div style={styles.Header}>
        <div>
            <defaultProps.IconComponent />
            <p style={styles.text}>You Cars</p> 
        </div>

        {/* 
        Como manda esses botoes para os lugares deles? não sei.
        */}
        <button style={styles.Button}>Home</button>
        <button style={styles.Button}>Perfil</button>
        
    </div>
  );
};

export default Header;