import React from 'react';
import './SpecialSale.css';
import it from './ss1.jpg';
import i1 from './s1.jpeg';
import i2 from './s2.webp';
import i3 from './s3.jpg';
import i4 from './s4.jpg';
import i5 from './s5.jpeg';
import i6 from './s6.jpeg';
import i7 from './s7.jpeg';
import i8 from './s8.jpg';
import i9 from './s9.jpg';
import i10 from './s10.jpeg';
import i11 from './s11.jpeg';
import i12 from './s12.jpg';


//this is shirt section

const SpecialSale = ({userId}) => {
  const products = [
    {
      id: 1,
      name: 'Summer Bliss Set',
      price: 1500,
      image: i1,
    },
    {
      id: 2,
      name: 'Cozy Knit Ensemble',
      price: 2000,
      image: i2,
    },
    {
      id: 3,
      name: 'Boho Chic Collection',
      price: 2200,
      image: i3,
    },
    {
        id: 4,
        name: 'Weekend Getaway Outfit',
        price: 2300,
        image: i4,
      },
      {
        id: 5,
        name: 'Urban Street Style Combo',
        price: 1900,
        image: i5,
      },   {
        id: 6,
        name: 'Elegant Evening Attire',
        price: 2060,
        image: i6,
      },
      {
        id: 7,
        name: 'Athleisure Power Set',
        price: 2300,
        image: i7,
      },
      {
        id: 8,
        name: 'Retro Glamour Ensemble',
        price: 24000,
        image: i8,
      },
      {
        id: 9,
        name: 'Vintage Inspired Outfit',
        price: 3000,
        image: i9,
      },
      {
          id: 10,
          name: 'Casual Cool Combo',
          price: 3100,
          image: i10,
        },
        {
          id: 11,
          name: 'Work From Home Chic Set',
          price: 2900,
          image: i11,
        },   {
          id: 12,
          name: 'Festive Party Attire',
          price: 3500,
          image: i12,
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
      body: JSON.stringify({ id, name, price, image,userId }),
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
    <div className="product-list" >
  <h2>SPECIAL SALE</h2>
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <div className="buttons">
          <button className="add-to-cart-button1" onClick={()=> handleAddToCart(product.id,product.name,product.price,product.image)}>Add to Cart</button>
          <button className="add-to-favorites-button1" onClick={() => handleAddToFavorites(product.id, product.name, product.price, product.image)}>Add to Favorites</button>
        </div>
      </div>
    </div>
  ))}
</div>

    
  );
};

export default SpecialSale;
