import React from 'react';
import Listing from './components/Listing';
import itemsData from './data/etsy.json'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Магазин товаров</h1>
      </header>
      <main>
        <Listing items={itemsData} />
      </main>
    </div>
  );
}

export default App;
