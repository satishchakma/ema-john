import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total += product.price;
    totalShipping += product.shipping;
  }

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>
        Selected products:<strong> {cart.length}</strong>{" "}
      </p>
      <p>
        Total Price: <strong>${total} </strong>
      </p>
      <p>
        Total Shipping: <strong>${totalShipping} </strong>
      </p>
      <p>Tax: {cart.length}</p>
      <p>Grand Total: {cart.length}</p>
    </div>
  );
};

export default Cart;
