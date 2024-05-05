import React from 'react';

//provide easy access to different sections or categories of products
function Lazado() {
  return (
    <div className="header">
      <div className="logo">Lazado</div>
      <div className="buttons">
        <button className="button">Appliances</button>
        <button className="button">Gadgets</button>
        <button className="button">Accessories</button>
      </div>
    </div>
  );
}

export default Lazado;