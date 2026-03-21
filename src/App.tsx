import React, { useState, useEffect } from 'react';
import Listing from './components/Listing';
import { EtsyItem } from './types';

import etsyData from './data/etsy.json';

const isValidEtsyItem = (item: any): item is EtsyItem => {
  return (
    typeof item.listing_id === 'number' &&
    typeof item.url === 'string' &&
    item.MainImage?.url_570xN &&
    typeof item.title === 'string' &&
    typeof item.currency_code === 'string' &&
    typeof item.price === 'string' &&
    typeof item.quantity === 'number'
  );
};

const App: React.FC = () => {
  const [items, setItems] = useState<EtsyItem[]>([]);

  useEffect(() => {
    const validItems = etsyData.filter(isValidEtsyItem);
    setItems(validItems);
  }, []);

  return (
    <div className="app">
      <h1>Список предложений</h1>
      <Listing items={items} />
    </div>
  );
};

export default App;
