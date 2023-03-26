import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, name, img, price, seller, ratings } = props.product;
  return (
    <div>
      <img src={img} alt={name} />
      <h4> {name}</h4>
      <h4> Price: ${price}</h4>
      <p> Manufacturer: {seller}</p>
      <p> Rating: {ratings}</p>
    </div>
  );
};

export default Product;
