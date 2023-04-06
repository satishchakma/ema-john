import React from "react";
import { useLoaderData } from "react-router-dom";

import Product from "../components/Products/Product";
import ReviewItem from "../components/ReviewItem/ReviewItem";
import "./Orders.css";
import Cart from "../components/Cart/Cart";
import { useState } from "react";
import { removeFromDb } from "../assets/utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    // const findProduct = cart.find((pd) => pd.id === id);
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
    console.log(id);

    // if (findProduct) {
    //   console.log("found this");
    // }
  };
  return (
    <div className="shop-container">
      <div>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>

      <div className="savedCart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
