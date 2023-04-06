import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, price, shipping, name } = product;
  //console.log(product);
  return (
    <div className="review-items">
      <div className="left-side">
        <div>
          <img className="review-image" src={img}></img>
        </div>
        <div>
          <h2>{name}</h2>
          <h2>Price: ${price}</h2>
          <h2> Shipping: ${shipping}</h2>
        </div>
      </div>
      <div className="icon-container" onClick={() => handleRemoveFromCart(id)}>
        <FontAwesomeIcon
          onClick={() => handleRemoveFromCart(id)}
          className="icons"
          icon={faTrashAlt}
        />
      </div>
    </div>
  );
};

export default ReviewItem;
