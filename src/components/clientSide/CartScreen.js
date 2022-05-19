import React from "react";
import CartItem from "./cart/CartItem";
import "./CartScreen.css";

export default function CartScreen() {
  return (
    <div className="container">
      <div className="cartscreen row">
        <div className="cartscreen_left">
          <h2>Shopping Cart</h2>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cartscreen_right">
          <div className="cartscreen_info">
            <p>Subtotal (0) items</p>
            <p>Price</p>
          </div>
          <div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
