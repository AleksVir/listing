import React from 'react';
import { ListingProps } from '../types';

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const formatTitle = (title: string | undefined): string => {
    if (!title) return 'No title';
    if (title.length > 50) {
      return title.substring(0, 50) + '…';
    }
    return title;
  };

  const formatPrice = (price: string | undefined, currencyCode: string | undefined): string => {
    if (!price || !currencyCode) return 'Price not available';

    switch (currencyCode) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      case 'GBP':
        return `£${price}`;
      default:
        return `${currencyCode} ${price}`;
    }
  };

  const getStockClass = (quantity: number | undefined): string => {
    if (quantity === undefined) return 'stock-unknown';
    if (quantity <= 10) return 'stock-low';
    if (quantity <= 20) return 'stock-medium';
    return 'stock-high';
  };

  return (
    <div className="listing-container">
      {items.map((item) => (
        <div key={item.listing_id} className="product-card">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img
              src={item.MainImage?.url_570xN || '/placeholder-image.jpg'}
              alt={item.title || 'Product image'}
              className="product-image"
            />
          </a>
          <div className="product-info">
            <h3 className="product-title">{formatTitle(item.title)}</h3>
            <div className="price-container">
              <div className="product-price">{formatPrice(item.price, item.currency_code)}</div>
              <span className={`stock-badge ${getStockClass(item.quantity)}`}>
                {item.quantity !== undefined ? `${item.quantity} left` : 'Quantity not available'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
