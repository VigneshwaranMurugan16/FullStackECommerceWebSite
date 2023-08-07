import React, { useState, useEffect } from 'react';
import './OrderHistory.css';
import axios from 'axios';

const OrderHistory = ({ userId }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/order-history', {
        params: {
          userId: userId,
        },
      });
      const orderHistoryData = response.data.orderHistory;
      console.log('orderHistoryData:', orderHistoryData); // Check the data received
      setOrderHistory(orderHistoryData);
    } catch (error) {
      console.error('Error fetching order history:', error);
    }
  };

  console.log('orderHistory:', orderHistory); // Check the value of orderHistory

  return (
    <div className="order-history-section">
      <h2 className="order-history-header">Order History</h2>
      {orderHistory.map((order) => (
        <div className="order-card" key={order.id}>
          <h3 className="order-card-header">Order #{order.id}</h3>
          <p className="order-card-timestamp">Ordered on: {order.time}</p>
          <p className="order-card-total-price">Total Price: ₹{order.totalprice}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
