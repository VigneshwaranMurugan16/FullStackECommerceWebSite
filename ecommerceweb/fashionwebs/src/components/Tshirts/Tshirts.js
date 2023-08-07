import React from 'react';
import './Tshirts.css';
import itt from './t1.jpeg';
import i2 from './t2.jpeg';
import i3 from './t3.jpeg';
import i4 from './t4.jpeg';
import i5 from './t5.jpeg';
import i6 from './t6.jpeg';
import i7 from './t7.jpeg';
import i8 from './t8.jpeg';
import i9 from './t9.jpeg';
import i10 from './t10.jpeg';
import i11 from './t11.jpeg';
import i12 from './t12.jpeg';
//this is shirt section

const Tshirts = ({userId}) => {
  const products = [
    {
      id: 1,
      name: 'Urban Classic',
      price: 800,
      image: itt,
    },
    {
      id: 2,
      name: 'Retro Vibes',
      price: 700,
      image: i2,
    },
    {
      id: 3,
      name: 'Graphic Fusion',
      price: 800,
      image: i3,
    },
    {
        id: 4,
        name: 'Street Style',
        price: 600,
        image: i4,
      },
      {
        id: 5,
        name: 'Vintage Edge',
        price: 1000,
        image: i5,
      },   {
        id: 6,
        name: 'Modern Essentials',
        price: 900,
        image: i6,
      },
      {
        id: 7,
        name: 'Artistic Expression',
        price: 650,
        image: i7,
      },
      {
        id: 8,
        name: 'Bold Statements',
        price: 1100,
        image: i8,
      },   {
        id: 9,
        name: 'Casual Comfort',
        price: 950,
        image: i9,
      },
      {
        id: 10,
        name: 'Sporty Chic',
        price: 750,
        image: i10,
      },
      {
        id: 11,
        name: 'Effortless Cool',
        price: 1150,
        image: i11,
      },   {
        id: 12,
        name: 'Timeless Appeal',
        price: 1500,
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
    <div className="product-list">
  <h2>TSHIRTS</h2>
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <div className="buttons">
          <button className="add-to-cart-button1" onClick={()=> handleAddToCart(product.id,product.name,product.price,product.image)}>Add to Cart</button>
          <button className="add-to-favorites-button1"   onClick={() => handleAddToFavorites(product.id, product.name, product.price, product.image)}>Add to Favorites</button>
        </div>
      </div>
    </div>
  ))}
</div>
    
  );
};

export default Tshirts;
