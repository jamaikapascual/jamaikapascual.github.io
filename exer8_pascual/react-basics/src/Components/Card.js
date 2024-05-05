import React from 'react';

function Card({ title, imageUrl, onAddToCart }) {
    return (
      <div className="card">
        <div className="item-box">
          <div style={{ width: '100%', paddingBottom: '140%', position: 'relative' }}>
            <img
              src={imageUrl}
              alt={title}
              className="item-image"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        <div className="item-box">
          <h3 className="item-title">{title}</h3>
        </div>
        <div className="item-box">
          <button className="button" onClick={onAddToCart}>Add to Cart</button>
        </div>
      </div>
    );
  }
  
  

export default Card;