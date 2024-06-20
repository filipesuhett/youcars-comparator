import Card from "../../components/cardCar.jsx"
import axios from 'axios';

const api = axios.create({
  baseURL: 'htpp://localhost:3000'
})

export default function Search() {

  api.get('/search').then( (response) => {
    response.data
  })

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card/>
      <button></button>
    </div>
    
  );
}
