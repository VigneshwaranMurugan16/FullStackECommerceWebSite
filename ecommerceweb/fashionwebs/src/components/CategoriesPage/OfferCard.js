import React from 'react';
import './OfferCard.css'; // Import the CSS file for styling

const OfferCard = ({ title, imageUrl, description, onScrollToSpecialSale }) => {
  const handleClick = () => {
    if (onScrollToSpecialSale) {
      onScrollToSpecialSale();
    }
  };

  return (
    <div className="offer-card" onClick={handleClick}>
      <img src={imageUrl} alt={title} />
      <div className="offer-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default OfferCard;
