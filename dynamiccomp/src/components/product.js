import React from 'react';
import '../App.css';

function ProductCard({ imagePath, title, description }) {
  return (
    <div className="product-card">
      <img src={imagePath} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;
