import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import etsyData from './data/etsy.json';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(etsyData);
  }, []);

  return (
    <div className="app">
      <h1>Список предложений</h1>
      <Listing items={items} />
    </div>
  );
}

export default App;
