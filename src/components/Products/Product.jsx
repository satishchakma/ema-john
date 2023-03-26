import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, name, img, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt={name} />
        <h4> {name}</h4>
        <h4> Price: ${price}</h4>
      </div>
      <div>
        <p> Manufacturer: {seller}</p>
        <p> Rating: {ratings}</p>
      </div>

      <button onClick={() => props.addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
