import Card from "../../components/cardCar.jsx"
import CardCompare from "../../components/cardCompare.jsx"
import Footer from "../../components/footer.jsx"
import Header from "../../components/header.jsx"
import ResulComp from "../../components/resulComp.jsx"
import Opinion from "../../components/opinion.jsx"

import axios from 'axios';
import React from 'react';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default function Search() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Opinion />
        

      <button></button>
    </div>
    
  );
}
