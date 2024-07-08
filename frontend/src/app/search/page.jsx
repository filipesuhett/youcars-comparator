'use client'
import Card from "../../components/cardCar.jsx"
import CardCompare from "../../components/cardCompare.jsx"
import Footer from "../../components/footer.jsx"
import Header from "../../components/header.jsx"
import ResulComp from "../../components/resulComp.jsx"
import Opinion from "../../components/opinion.jsx"
import SearchCar from "../../components/searchCar.jsx"
import { useState, useEffect } from 'react'
import { guardarCarros } from '../../helpers/util.jsx'
import "../globals.css"
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})



export default function Search() {
  const [ listaCarro, setListaCarro ] = useState([])
  const [ containerCard, setcontainerCard ] = useState([])
  const [ containerCardOptions, setcontainerCardOptions ] = useState([])

  const [popupVisivel, setPopupVisivel] = useState(false);

  const [ carrosComparador, setcarrosComparador ] = useState([])


  const styles = {
    Button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '396px',
      height: '52px',
      padding: '0px 8px',
      border: '0',
      boxSizing: 'border-box',
      borderRadius: '24px',
      backgroundColor: '#f43030',
      color: '#ffffff',
      fontSize: '22px',
      fontFamily: 'Source Sans 3',
      fontWeight: '500',
      lineHeight: '29px',
      outline: 'none',
      margin: '40px 0 0 0'
    },
    containerButton: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
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
    TextComparador:{
      fontSize: '32px',
      fontFamily: 'Roboto',
      lineHeight: '42px',
    },
    Dropdown: {
      cursor: 'pointer',
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
    containerCardOptions1: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100%',
    },
    containerCardOptions2: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100vw',
      height: '100%',
    },
    containerCard1: {
      display: 'none',
    },
    containerCard2: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '1300px',
      maxHeight: '700px',
    },
    popupComparator:{
      position: 'absolute',
      display: popupVisivel ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems:'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.199)',
      zIndex: '1',
    },
    popupComparatorOptions: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column',
      width: '836px',
      height: '829px',
      backgroundColor: '#ffffff',
      borderRadius: '26px',
      
    },
    popupComparatorOptionsCar: {
      display: 'flex',
      margin: '80px 0 0 0',
      gap: '10px'
    },
    sairPopup: {
      position: 'absolute',
      top: '20px',
      right: '40px',
      fontSize:'40px',
      fontWeight: '700',
      cursor: 'pointer'
    }
  };
  

  useEffect(() => {
    setcontainerCard(styles.containerCard1)
    setcontainerCardOptions(styles.containerCardOptions1)
  }, []);
  

  function criarCarros( carros ){
    setListaCarro( carros )
    setcontainerCard(styles.containerCard2)
    setcontainerCardOptions(styles.containerCardOptions2)

  }
  
  function adicionarComparador( carro ){
      if (carrosComparador.some(c => c.id === carro.id)) {
        alert('Carro já adicionado');
        return;
      }
      if (carrosComparador.length == 3){
        alert('Você Pode Adicionar Apenas 3 Carros')
        return;
      }
      setcarrosComparador([...carrosComparador, carro])
  }

  function removerComparador(carro) {
    // Lógica para remover o carro do comparador
    const novoComparador = carrosComparador.filter(c => c.id !== carro.id);
    setcarrosComparador(novoComparador);
  }

  function handleClickChangeDisplay(){
    if(popupVisivel){
      setPopupVisivel(false)
    }else{
      setPopupVisivel(true)
    }
    
  }

  async function handleClickCarrosParaComparar(){
    await guardarCarros( carrosComparador )
    window.location.href = "/search/compareTool";
  }

  return (
    <div className=" bg-white flex relative h-screen w-screen flex-col items-center">
        <Header/>
        <div style={styles.popupComparator}>
          <div style={styles.popupComparatorOptions}>
          <div style={styles.sairPopup} onClick={handleClickChangeDisplay}>X</div>
            <p style={styles.TextComparador}>Carros Adicionados</p>
            <div style={styles.popupComparatorOptionsCar}>
            {carrosComparador.map((carro) => (<CardCompare key={carro.id} carro={carro} removerCarro={removerComparador} />))}
            </div>
            <button style={styles.Button} onClick={handleClickCarrosParaComparar} >Comparar</button>
          </div>
        </div>
        <div style={containerCardOptions}>
          <div className="flex mt-28">
            <SearchCar criarCarros={criarCarros} />
          </div>
          
          <div style={containerCard}>
            <div className="flex justify-between w-full h-10 my-20 pr-20">
              <h2 className="text-2xl">Detalhes dos Carros Pesquisados</h2>
              <p className="text-xl">{`${listaCarro.length} resultados`}</p>
            </div>
            <div className="flex flex-wrap w-full h-2/3 gap-20 overflow-hidden overflow-y-auto">
            {listaCarro.map((carro) => (<Card key={carro.id} adicionarComparador={adicionarComparador} carro={ carro } />))}
            </div>
            <div style={styles.containerButton}>
              <button style={styles.Button} onClick={handleClickChangeDisplay}>Comparar Carros</button>
            </div>
            
          </div>
        </div>
        
        

        
        
        <Footer position='fixed'/>

    </div>
    
  );
}
