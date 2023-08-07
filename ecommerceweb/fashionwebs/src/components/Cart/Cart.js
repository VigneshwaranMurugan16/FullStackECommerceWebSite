import React, { useState, useEffect } from 'react';
import './Cart.css';
import axios from 'axios';

const Cart = ({userId}) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cart',{
        params : {
          userId : userId,
        }
      });
      const cartItemsData = response.data.cartItems;
      setCartItems(cartItemsData);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

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
  

  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/cart/${itemId}`);

      if (response.status === 200) {
        fetchCartItems(); // Refresh cart items after removing an item
      } else {
        console.error('Error removing item from cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle the response as needed
        fetchCartItems(); // Refresh cart items after placing the order
      } else {
        console.error('Error placing order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  
  
  

  return (
    <div className="cart-section">
      <h2 className="cart-header">Cart</h2>
      <div className="dress-cards">
        {cartItems.map((item) => (
          <div className="dress-card" key={item.id}>
            <img src={item.image} alt={item.name} className="dress-image" />
            <h3 className="dress-name">{item.name}</h3>
            <p className="dress-price">₹{item.price}</p>
            <button
              className="add-to-cart-button1"
              onClick={() =>
                handleAddToFavorites(item.id, item.name, item.price, item.image)
              }
            >
              Add to Favorites
            </button>
            <button
              className="remove1"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
           
          </div>
        ))}
      </div>
      <div className="order-button-container">
        <button className="order-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
