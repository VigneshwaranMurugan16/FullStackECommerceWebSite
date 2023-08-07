import React from 'react';
import './Glasses.css';
import it from './g1.jpg';
import i2 from './g2.jpg';
import i3 from './g3.jpg';
import i4 from './i2.jpg';
import i5 from './g5.jpg';
import i6 from './g6.jpg';
import i7 from './g7.avif';
import i8 from './g8.webp';
import i9 from './i9.webp';
import i10 from './g10.webp';
import i11 from './g11.jpeg';
import i12 from './g12.webp';
import i13 from './g13.jpg';
import i14 from './g14.jpg';
import i15 from './g15.jpeg';
//this is shirt section

const Glasses = ({userId}) => {
  const products = [
    {
      id: 1,
      name: 'Radiant Sunshades',
      price: 600,
      image: it,
    },
    {
      id: 2,
      name: 'Classic Aviator Shades',
      price: 700,
      image: i2,
    },
    {
      id: 3,
      name: 'Stellar Shades',
      price: 800,
      image: i3,
    },
    {
        id: 4,
        name: 'Sunbeam Spectacles',
        price: 500,
        image: i4,
      },
      {
        id: 5,
        name: 'Elite Eyewear',
        price: 550,
        image: i5,
      },   {
        id: 6,
        name: 'Mirage Sunglasses',
        price: 750,
        image: i6,
      },
      {
        id: 7,
        name: 'Vogue Vision',
        price: 500,
        image: i7,
      },
      {
        id: 8,
        name: 'Luminous Goggles',
        price: 800,
        image: i8,
      },   {
        id: 9,
        name: 'Retro Ray-Bans',
        price: 750,
        image: i9,
      },
      {
        id: 10,
        name: 'Crystal Clear Shades',
        price: 1500,
        image: i10,
      },
      {
        id: 11,
        name: 'Urban Chic Sunglasses',
        price: 800,
        image: i11,
      },   {
        id: 12,
        name: 'Dapper Sunnies',
        price: 1100,
        image: i12,
      },
      {
        id: 13,
        name: 'Radiant Reflections',
        price: 3500,
        image: i13,
      },
      {
        id: 14,
        name: 'Serene Sunnies',
        price: 900,
        image: i14,
      },   {
        id: 15,
        name: 'Luminary Shades',
        price: 1200,
        image: i15,
      }
  
  ];

  
  const handleAddToFavorites = (id, name, price, image) => {
    fetch('http://localhost:3000/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, price, image, userId }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error adding item to favorites:', error);
      });
  };
  

  const handleAddToCart = (id, name, price, image) => {
    fetch('http://localhost:3000/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, price, image ,userId}),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <div className="product-list">
  <h2>GLASSES</h2>
  <div className="dress-cards">
  {products.map((product) => (
    <div key={product.id} className="dress-card">
      <img src={product.image} alt={product.name} className="dress-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <div className="buttons">
          <button className="add-to-cart-button1" onClick={()=> handleAddToCart(product.id,product.name,product.price,product.image)}>Add to Cart</button>
          <button className="add-to-favorites-button1"  onClick={() => handleAddToFavorites(product.id, product.name, product.price, product.image)}>Add to Favorites</button>
        </div>
      </div>
    </div>
  ))}
  </div>
</div>

    
  );
};

export default Glasses;
