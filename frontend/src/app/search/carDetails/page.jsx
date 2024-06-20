import Card from "../../../components/cardCar.jsx"
import CardCompare from "../../../components/cardCompare.jsx"
import Footer from "../../../components/footer.jsx"
import Header from "../../../components/header.jsx"
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default function Search() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />

      <button></button>
    </div>
    
  );
}
