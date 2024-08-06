import React from 'react';
import Image from 'next/image';
import "../app/globals.css"

const styles = {
    containerPerfil: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
      },
      coments: {
        display: 'flex',
        justifyContent: 'end',
        width: '1053px',
        height: '680px',
        backgroundColor: '#a9a9a9',
        borderRadius: '24px',
      },
      excluirPerfil: {
        display: 'flex',
        flexDirection: 'column',
        padding: '36px 0 0 0',
        margin: '0 0 35px'
      },
      ButtonExcluir: {
        cursor: 'pointer',
        width: '108px',
        height: '36px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#030303',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Source Sans 3',
        fontWeight: 700,
        lineHeight: '16px',
        outline: 'none',
      },
      containerInfos: {
        width: '800px',
      },
      TEXTconfig: {
        color: '#030303',
        fontSize: '20px',
        fontFamily: 'Source Sans 3',
        fontWeight: 600,
        lineHeight: '32px',
        margin: '0 0 40px 0'
      },
      containerNomeExibição: {
        display: 'flex',
        flexDirection: 'column',
      },
      Input: {
        width: '377px',
        height: '48px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#f8f8f8',
        color: '#8f8f8f',
        fontSize: '15px',
        fontFamily: 'Source Sans 3',
        fontWeight: 500,
        lineHeight: '24px',
        outline: 'none',
      },
      HorizontalDivider: {
        width: '785px',
        height: '2px',
        backgroundColor: '#8f8f8f',
        borderRadius: '2px',
        margin: '50px 0 50px 0'
      },
      TitleConfig: {
        color: '#030303',
        fontSize: '20px',
        fontFamily: 'Source Sans 3',
        fontWeight: 600,
        lineHeight: '32px',
      },
      containerSenhas: {
        display: 'flex',
        gap: '20px',
        margin: '20px 0 30px 0'
      },
      Salvar: {
        cursor: 'pointer',
        width: '144px',
        height: '36px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#030303',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Source Sans 3',
        fontWeight: 700,
        lineHeight: '16px',
        outline: 'none',
      },
  
  

};


const Settings = ({display}) => {

  if(display == true){
    return (
      <div style={styles.containerPerfil}>
            <div style={styles.coments}>
              <div style={styles.containerInfos}>
                  <div style={styles.excluirPerfil}>
                      <p style={styles.TEXTconfig}>Configuração de Perfil</p>
                      <button style={styles.ButtonExcluir}>Excluir Conta</button>
                  </div>
  
                  <div style={styles.HorizontalDivider}></div>
  
                  <h2 style={styles.TitleConfig}>Configuração da Conta</h2>
  
                  <div style={styles.containerNomeExibição}>
                      <p>Senha</p>
                      <input type="text" style={styles.Input} />
                  </div>
  
  
                  <div style={styles.containerSenhas}>
                      <div style={styles.containerNomeExibição}>
                          <p>Nova Senha</p>
                          <input type="text" style={styles.Input} />
                      </div>
  
                      <div style={styles.containerNomeExibição}>
                          <p>Repitir Senha</p>
                          <input type="text" style={styles.Input} />
                      </div>
                      
                  </div>
                  <button style={styles.Salvar}>Salvar Mudanças</button>
                  
              </div>
  
            </div>
      </div>
    );
  };
  }
  

export default Settings;


