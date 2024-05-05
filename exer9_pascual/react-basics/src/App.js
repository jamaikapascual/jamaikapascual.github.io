import React, { useState } from 'react';
import Navbar from './Components/Navbar'; 
import Card from './Components/Card';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  // Array of menu items for the navigation bar
  const menus = [
    { name: "Appliances", url: "/appliances", id: 1 },
    { name: "Groceries", url: "/groceries", id: 2 },
    { name: "Gadgets", url: "/gadgets", id: 3 }
  ];
  
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productName) => {
    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.name === productName);
    if (existingItemIndex !== -1) {
      // If the item already exists, increase its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it
      setCartItems(prevItems => [...prevItems, { name: productName, quantity: 1 }]);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Navbar menus={menus} />
      <div className="row">
        <div className="card-container">
          <Card title="Washing Machine" imageUrl="https://www.smappliance.com/cdn/shop/products/WW75T554DTT-TC_800x.jpg?v=1626016095" onAddToCart={() => handleAddToCart("Washing Machine")} />
          <Card title="Power Juicer" imageUrl="https://fenstt.com/wp-content/uploads/2021/12/Power-XL-Self-Cleaning-Juicer-Plus-1.jpg" onAddToCart={() => handleAddToCart("Power Juicer")} />
          <Card title="Electric Fan" imageUrl="https://www.acehardware.ph/cdn/shop/products/3DTurboPower_1200x1200.jpg?v=1633483477" onAddToCart={() => handleAddToCart("Electric Fan")} />
          <Card title="Air Fryer" imageUrl="https://www.khind.com.my/image/cache/data/theme/products/image/product/Small%20Appliances/Kitchen%20Helpers/Fryers/ARF45/arf45_300621213125-600x600_0.jpg" onAddToCart={() => handleAddToCart("Air Fryer")} />
        </div>
        <div className="shopping-cart">
          <ShoppingCart cartItems={cartItems} onDeleteItem={handleDeleteItem} />
        </div>
      </div>
    </div>
  );
}

export default App;