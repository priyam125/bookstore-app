// Cart.js (Shopping Cart Component)
import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartState } from "../store/recoil";

const Cart = ({ isOpen, closeCart }) => {
  const cart = useRecoilValue(cartState);
  const [cartItems, setCartItems] = useRecoilState(cartState);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const removeItem = (id) => {
    // Remove the item from the cart
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart">
      <button onClick={closeCart}>Close Cart</button>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
              </div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
