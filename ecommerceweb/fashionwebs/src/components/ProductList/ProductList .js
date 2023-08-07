import React from 'react';
import './ProductList.css';
import axios from 'axios';
import it from './f1.jpg';
import i1 from './s1.jpeg';
import i2 from './s2.jpeg';
import i3 from './s3.jpeg';
import i4 from './s4.jpeg';
import i5 from './s5.jpeg';
import i6 from './s6.jpeg';
import i7 from './s7.jpeg';
import i8 from './s8.jpeg';
import i9 from './s9.jpeg';
import i10 from './s10.jpeg';
import i11 from './s11.jpeg';
import i12 from './s12.jpeg';

const ProductList = ({ userId }) => {
  const products = [
    {
      id: 1,
      name: 'Classic Elegance',
      price: 1000,
      image: i1,
    },
    {
      id: 2,
      name: 'Sophisticated Stripes',
      price: 950,
      image: i2,
    },
    {
      id: 3,
      name: 'Modern Minimalist',
      price: 850,
      image: i3,
    },
    {
      id: 4,
      name: 'Casual Chic',
      price: 750,
      image: i4,
    },
    {
      id: 5,
      name: 'Timeless Plaid',
      price: 1200,
      image: i5,
    },
    {
      id: 6,
      name: 'Contemporary Prints',
      price: 1250,
      image: i6,
    },
    {
      id: 7,
      name: 'Versatile Essentials',
      price: 1200,
      image: i7,
    },
    {
      id: 8,
      name: 'Stylish Simplicity',
      price: 1100,
      image: i8,
    },
    {
      id: 9,
      name: 'Polished Neutrals',
      price: 1000,
      image: i9,
    },
    {
      id: 10,
      name: 'Trendy Denim',
      price: 850,
      image: i10,
    },
    {
      id: 11,
      name: 'Effortless Dapper',
      price: 800,
      image: i11,
    },
    {
      id: 12,
      name: 'Refined Patterns',
      price: 900,
      image: i12,
    },
    // Add more products as needed
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
      <h2>SHIRTS</h2>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <div className="buttons">
              <button className="add-to-cart-button1"onClick={()=> handleAddToCart(product.id,product.name,product.price,product.image)}>Add to Cart</button>
              <button className="add-to-favorites-button1" onClick={() => handleAddToFavorites(product.id, product.name, product.price, product.image)}>
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
