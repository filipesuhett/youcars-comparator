import Card from "../../components/cardCar.jsx"
import CardCompare from "../../components/cardCompare.jsx"
import Footer from "../../components/footer.jsx"
import Header from "../../components/header.jsx"
import ResulComp from "../../components/resulComp.jsx"
import Opinion from "../../components/opinion.jsx"
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
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
    borderRadius: '8px',
    border: '5px solid #505050',
    boxSizing: 'border-box',
  },
  Text: {
    color: '#000000',
    fontSize: '24px',
    fontFamily: 'Open Sans',
    fontWeight: '500',
    lineHeight: '31px',
  },
};

export default function Search() {

  return (
    <div className=" bg-white flex min-h-screen flex-col items-center justify-between p-24">
        <Header/>

        <div style={styles.containerOptions}>
          
          <p style={styles.Text}>Pesquise alguma característica do carro</p>
          
          <div>

          </div>
          
          <button style={styles.Button}>Pesquisar</button>

        </div>
        <Footer/>
      <button></button>
    </div>
    
  );
}
