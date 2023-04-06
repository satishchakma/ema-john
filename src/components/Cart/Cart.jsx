import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // let totalPrice = 0;
  // let totalShipping = 0;
  // let quantity = 0;
  // for (const product of cart) {
  //   // if(product.quantity === 0){
  //   //     product.quantity = 1;
  //   // }
  //   // product.quantity = product.quantity || 1;

  //   totalPrice = totalPrice + product.price * product.quantity;
  //   totalShipping = totalShipping + product.shipping;
  //   quantity = quantity + product.quantity;
  // }
  // const tax = (totalPrice * 7) / 100;

  // const grandTotal = totalPrice + totalShipping + tax;
  //console.log(cart);
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  console.log(cart);
  for (const product of cart) {
    // product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.price * product.quantity;
    quantity = quantity + product.quantity;
  }
  //   for (const product of cart) {
  //     total += product.price;
  //     totalShipping += product.shipping;
  //   }
  let tax = (total * 7) / 100;
  let grandTotal = total + totalShipping + tax;

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>
        Selected products:<strong> {quantity}</strong>{" "}
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
