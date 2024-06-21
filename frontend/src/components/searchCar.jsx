'use client';
import React from 'react';
import axios from 'axios';
import { useState } from 'react'

const api = axios.create({
    baseURL: 'http://localhost:3001'
  })


  const styles = {
    Button: {
      cursor: 'pointer',
      top: '656px',
      left: '560px',
      width: '306px',
      height: '40px',
      padding: '0px 8px',
      border: '0',
      boxSizing: 'border-box',
      borderRadius: '24px',
      backgroundColor: '#f43030',
      color: '#ffffff',
      fontSize: '22px',
      fontFamily: 'Source Sans Pro',
      fontWeight: '500',
      lineHeight: '29px',
      outline: 'none',
    },
    containerOptions: {
      width: '418px',
      height: '518px',
      backgroundColor: '#fff',
    },
    Text: {
      color: '#000000',
      fontSize: '24px',
      fontFamily: 'Open Sans',
      fontWeight: '500',
      lineHeight: '31px',
    },
    Dropdown: {
      cursor: 'pointer',
      top: '279px',
      left: '73px',
      width: '309px',
      height: '52px',
      padding: '0px 8px',
      border: '0',
      boxSizing: 'border-box',
      borderRadius: '24px',
      boxShadow: '2px 2px 4px rgba(3,3,3,0.1)',
      backgroundColor: '#f5f5f5',
      color: '#919191',
      fontSize: '16px',
      fontFamily: 'Source Sans Pro',
      fontWeight: 500,
      lineHeight: '20px',
      outline: 'none',
    },
  };


const Buttonteste = (props) => {
    const [users, setUsers ] = useState([])

    function handleClickTeste(){
        
        api.get('/').then((marca)=>{
        setUsers(marca.data)
        })
    }

  return (
    <div >
            <select style={styles.Dropdown} defaultValue="" onClick={handleClickTeste}>
              <option value="" > {props.label ?? "Selecione uma marca" }</option>
              {users.map((value) => (<option value={value.marca} key={value.marca}>{value.marca}</option>))}
            </select>

    </div>
  );
};

export default Buttonteste;