import Card from "../components/cardCar.jsx"
import CardCompare from "../components/cardCompare.jsx"
import Footer from "../components/footer.jsx"
import Header from "../components/header.jsx"
import ResulComp from "../components/resulComp.jsx"
import Opinion from "../components/opinion.jsx"
import ButtonTeste from "../components/searchCar.jsx"
import axios from 'axios';
import React from "react"

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
    }
  };

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <ButtonTeste/>
    </div>
    
  );
}
