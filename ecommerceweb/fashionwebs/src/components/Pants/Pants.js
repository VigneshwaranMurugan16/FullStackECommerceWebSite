import React from 'react';
import './Pants.css';
import it from './p1.jpg';
import i2 from './p22.jpeg';
import i3 from './p3.jpg';
import i4 from './p4.jpg';
import i5 from './p5.jpg';
import i6 from './p6.jpg';
import i7 from './p7.jpg';
import i8 from './p8.jpg';
import i9 from './p9.jpg';
import i10 from './p10.jpeg';
import i11 from './p11.jpeg';
import i12 from './p12.jpeg';
//this is shirt section

const Pants = ({userId}) => {
  const products = [
    {
      id: 1,
      name: 'Blue Sky Jeans',
      price: 900,
      image: it,
    },
    {
      id: 2,
      name: 'Denim Dream Jeans',
      price: 800,
      image: i2,
    },
    {
      id: 3,
      name: 'Urban Chic Denims',
      price: 600,
      image: i3,
    },
    {
        id: 4,
        name: 'Classic Indigo Jeans',
        price: 1000,
        image: i4,
      },
      {
        id: 5,
        name: 'Midnight Blues Denim ',
        price: 900,
        image: i5,
      },   {
        id: 6,
        name: 'Vintage Wash Jeans',
        price: 900,
        image: i6,
      },
      {
        id: 7,
        name: 'Distressed Denim Delight',
        price: 1100,
        image: i7,
      },
      {
        id: 8,
        name: 'Stylish Slim Fit Jeans',
        price: 700,
        image: i8,
      },   {
        id: 9,
        name: 'Rugged Denim Adventures',
        price: 600,
        image: i9,
      },
      {
        id: 10,
        name: 'Trendy Tapered Jeans',
        price: 1100,
        image: i10,
      },
      {
        id: 11,
        name: 'Bold Black Denims',
        price: 1500,
        image: i11,
      },   {
        id: 12,
        name: 'Effortless Boyfriend Jeans',
        price: 1600,
        image: i12,
      }
    // Add more product objects as needed
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
  <h2>JEANS</h2>
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
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

    
  );
};

export default Pants;
