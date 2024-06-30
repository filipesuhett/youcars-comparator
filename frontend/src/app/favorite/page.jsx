import Footer from "../../components/footer.jsx"
import Header from "../../components/header.jsx"
import ResulComp from "../../components/resulComp.jsx"
import CardFavorite from "../../components/cardFavorite.jsx"
import "../globals.css"
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

const styles = {
  ContainerResult: {
    display: 'flex',
    alignItems: 'center',
    gap: '80px'
  },
  Text: {
    color: '#030303',
    fontSize: '32px',
    fontFamily: 'Source Sans 3',
    fontWeight: '500',
    lineHeight: '42px',
    margin: '81px 0 59px 0 '
  }
}
export default function Search() {

  return (
    <div className="flex h-screen w-screen flex-col items-center bg-white">
          <Header />
          <h1 style={styles.Text}>Seus Carros Favoritos</h1>
            <div style={styles.ContainerResult}>
              <CardFavorite/>
              <CardFavorite/>
              <CardFavorite/>
            </div>
          <Footer position="fixed bottom-0" />
    </div>
    
  );
}
