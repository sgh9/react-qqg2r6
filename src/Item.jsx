import React, { useState } from 'react';

const Item = ({ src, title, price }) => {
  return (
    <div className="col">
      <div className="card mx-auto mx-md-2 " style={{ maxWidth: '20rem' }}>
        <img className="card-img-top" src={src} alt="Card image cap" />
        <div className="card-block px-4">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">Price: ${price}</p>
          <a
            href="#"
            data-name={title}
            data-price={price}
            className="add-to-cart btn btn-primary mb-4"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
