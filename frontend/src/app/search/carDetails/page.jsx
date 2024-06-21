import Card from "../../../components/cardCar.jsx"
import CardCompare from "../../../components/cardCompare.jsx"
import Footer from "../../../components/footer.jsx"
import Header from "../../../components/header.jsx"
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default function CarDetais() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>

      <div>
        <div style={styles.img}>

        </div>

        <div style={styles.informations}>
          <div>
            <p>Especificações do carro</p>
            

          </div>



        </div>

        <div style={styles.addComents}>
          <p>Comente aqui</p>
          <input style={styles.Input} placeholder="Deixe seu comentário sobre o carro aqui" />
          <button style={styles.Button}>Enviar</button>
        </div>
      
      </div>

      <Footer/>
    </div>
    
  );
}
