import React from 'react';

function ShoppingCart({ cartItems, onDeleteItem }) {
  return (
    <div className="shopping-cart">
      <h2>Shopping cart (Total: {cartItems.length})</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name}</span>
          <span>Qty: {item.quantity}</span>
          <button className="remove-button" onClick={() => onDeleteItem(index)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;