import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { DynamicStar } from "react-dynamic-star";

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
        <div className="rating">
          Rating: {ratings}
          <DynamicStar
            width={parseFloat(30)}
            height={parseFloat(30)}
            rating={ratings}
          />
        </div>
      </div>

      <button onClick={() => props.handleAddToCart(props.product)}>
        Add to Cart
        <FontAwesomeIcon className="icons" icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
