import React from 'react';
import OfferCard from './OfferCard';
import i1 from './f1.jpg';
import './CategoriesPage.css';

const CategoriesPage = ({ onScrollToSpecialSale,userId }) => {
  const offers = [
    {
      title: 'Special Sale',
      imageUrl: i1,
      description: 'Up to 50% off on selected items',
    },
    {
      title: 'Free Shipping',
      imageUrl: i1,
      description: 'Enjoy free shipping on this items',
    },
    // Add more offer objects as needed
  ];

  return (
    <div className="categories-container">
      {offers.map((offer, index) => (
        <OfferCard
          key={index}
          title={offer.title}
          imageUrl={offer.imageUrl}
          description={offer.description}
          onScrollToSpecialSale={onScrollToSpecialSale}
        />
      ))}
    </div>
  );
}

export default CategoriesPage;
