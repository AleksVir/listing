import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem({ item }) {
  const {
    listing_id,
    url,
    MainImage,
    title,
    currency_code,
    price,
    quantity
  } = item;

  // Безопасное получение URL изображения
  const imageUrl = MainImage?.url_570xN || '/placeholder.jpg';
  
  // Обработка названия (обрезка + заглушка)
  const displayTitle = title
    ? (title.length > 50 ? title.slice(0, 50) + '...' : title)
    : 'Товар без названия';

  // Форматирование цены
  let displayPrice = price;
  switch (currency_code) {
    case 'USD':
      displayPrice = `$${price}`;
      break;
    case 'EUR':
      displayPrice = `€${price}`;
      break;
    case 'GBP':
      displayPrice = `£${price}`;
      break;
    case 'CAD':
      displayPrice = `C$${price}`;
      break;
    default:
      displayPrice = `${price} ${currency_code || 'N/A'}`;
      break;
  }

  // Класс для индикатора количества
  let quantityClass = 'item-quantity ';
  if (quantity < 10) {
    quantityClass += 'level-low';
  } else if (quantity < 20) {
    quantityClass += 'level-medium';
  } else {
    quantityClass += 'level-high';
  }

  return (
    <div className="item" data-id={listing_id}>
      <div className="item-image">
        <a href={url || '#'} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt={title || 'Товар без названия'}
            onError={(e) => {
              e.target.src = '/placeholder.jpg'; // запасной вариант при ошибке загрузки
            }}
          />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{displayTitle}</p>
        <div className="price-quantity-container">
          <span className="item-price">{displayPrice}</span>
          <span className={quantityClass}>{quantity !== undefined ? quantity : 'N/A'} left</span>
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    listing_id: PropTypes.number.isRequired,
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    quantity: PropTypes.number,
  }).isRequired,
};
