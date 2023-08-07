import React, { useState, useEffect } from 'react';
import './Favourite.css';
import axios from 'axios';

const Favourite = ({userId}) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/favorites', {
        params: {
          userId: userId,
        },
      });
      const favoritesData = response.data.favorites;
      setFavorites(favoritesData);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
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

  const handleRemoveFromFavorites = (id) => {
    fetch(`http://localhost:3000/api/favorites/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          fetchFavorites(); // Refresh favorites after removing an item
        } else {
          console.error('Error removing item from favorites');
        }
      })
      .catch(error => {
        console.error('Error removing item from favorites:', error);
      });
  };

  return (
    <div className="favorites-section">
      <h2 className="favorites-header">Favorites</h2>
      <div className="dress-cards">
        {favorites.map((dress, index) => (
          <div className="dress-card" key={index}>
            <img src={dress.image} alt={dress.name} className="dress-image" />
            <h3 className="dress-name">{dress.name}</h3>
            <p className="dress-price">₹{dress.price}</p>
            <button className="add-to-favorites-button1" onClick={() => handleAddToCart(dress.id, dress.name, dress.price, dress.image)}>Add to Cart</button>
            <button className="remove1" onClick={() => handleRemoveFromFavorites(dress.id)}>Remove from Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
