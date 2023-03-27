import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total += product.price;
    totalShipping += product.shipping;
  }
  let tax = (total * 7) / 100;
  let grandTotal = total + totalShipping + tax;

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
      <p>
        Tax: <strong> ${tax.toFixed(2)}</strong>
      </p>
      <p>
        Grand Total: <strong> ${grandTotal.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Cart;
