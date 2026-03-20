import React from 'react';

const Listing = ({ items }) => {
  console.log('Полученные items:', items); // Отладка

  return (
    <div className="listing-container">
      {items.map(item => (
        <div key={item.id} className="listing-item">
          {/* Используем optional chaining (?.) для безопасного доступа к свойству */}
          <img
            src={item?.url_570xN || '/default-image.jpg'} // Задаём изображение по умолчанию
            alt={item?.title || 'Товар'}
            className="listing-image"
          />
          <h3>{item?.title || 'Без названия'}</h3>
          <p>Цена: {item?.price || 'Не указано'}</p>
        </div>
      ))}
    </div>
  );
};

export default Listing;
