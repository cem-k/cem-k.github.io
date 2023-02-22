import React from 'react';
import './PriceCard.css';

const PriceCard = ({ id, title, price, features, action }) => (
  <div className="price-card">
    <h3 className="price-card__title">{title}</h3>
    <p className="price-card__price">{price}</p>
    <ul className="price-card__features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <a href="#" className="price-card__cta">{action}</a>
  </div>
);

export default PriceCard;
