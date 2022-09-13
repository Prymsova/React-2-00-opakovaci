import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import './style.css';

import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";


const App = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://apps.kodim.cz/react-2/xxxmuck/products")
    .then(res => res.json())
    .then(res1 => {
      console.log(res1);
      setProducts(res1);
    })
    
  }, [] );

  return (
    <BrowserRouter>
      <header>
        <h1>XXXMuck</h1>
      </header>

      <Routes>
        
        <Route path="/" element={ <HomePage products={ products }/> } />
       
        <Route path="/product/:id" element={ <ProductPage /> } />
        
      </Routes>
    
    </BrowserRouter>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
