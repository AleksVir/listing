import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

/**
 * Формирует список карточек товаров с обработкой крайних случаев
 */
export default function Listing({ items = [] }) {
  // Проверка на пустой массив
  if (!items.length) {
    return (
      <div className="item-list empty">
        <p>Товары не найдены</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ListItem
          key={item.listing_id} // стабильный ключ
          item={item}
        />
      ))}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      listing_id: PropTypes.number.isRequired,
    })
  ),
};

Listing.defaultProps = {
  items: [],
};
