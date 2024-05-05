import React from 'react';
import Navbar from './Components/Navbar'; 
import Card from './Components/Card';

function App() {
  // Array of menu items for the navigation bar
  const menus = [
    { name: "Appliances", url: "/appliances", id: 1 },
    { name: "Groceries", url: "/groceries", id: 2 },
    { name: "Gadgets", url: "/gadgets", id: 3 }
  ];

   // Function to handle adding a product to the cart
  const handleAddToCart = (productName) => {
    console.log(`Added ${productName} to the cart!`);
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
      </div>
    </div>
  );
}



export default App;