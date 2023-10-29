import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../store/recoil";

const CartModal = ({ isOpen, closeCart, cartIconRef }) => {
  const [cart, setCart] = useRecoilState(cartState);

  if (!isOpen) {
    return null;
  }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end z-50">
      <div
        className="bg-black bg-opacity-50 fixed inset-0"
        onClick={closeCart}
      />
      <div
        className="bg-white p-4 w-80 rounded-lg shadow-lg absolute left-0 top-12 transform translate-x-1/2"
        ref={cartIconRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={closeCart}
          >
            Close
          </button>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mt-2">
                <div>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-gray-600 text-xs">Price: ${item.price}</p>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 text-xs"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xl font-semibold mt-4">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default CartModal;
