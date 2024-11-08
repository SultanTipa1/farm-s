// src/components/Checkout.js
import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Integrate payment gateway here (e.g., M-Pesa)
    alert('Proceeding to payment...');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name} x {item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
