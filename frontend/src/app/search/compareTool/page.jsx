'use client'
import Footer from "../../../components/footer.jsx"
import Header from "../../../components/header.jsx"
import ResulComp from "../../../components/resulComp.jsx"
import Opinion from "../../../components/opinion.jsx"
import "../../globals.css"
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
          <h1 style={styles.Text}>Resultado da Comparação</h1>
          <Footer position="fixed bottom-0" />
    </div>
    
  );
}
