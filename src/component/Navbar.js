import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState } from "../store/recoil";
import Cart from "./Cart";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  const location = useLocation();

  const [cart, setCart] = useRecoilState(cartState);
  const [isCartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  if (location.pathname === "/login") {
    // Don't display the navbar on the login page.
    return null;
  }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="cart-icon flex" onClick={openCart}>
          <AiOutlineShoppingCart size={30}/>
          <span>{cart.length}</span>
        </div>
        <Link to="/" className="text-white font-semibold text-xl">
          Bookstore
        </Link>
        <div className="space-x-4">
          <Link to="/books" className="text-white hover:underline">
            Books
          </Link>
          <Link to="/authors" className="text-white hover:underline">
            Authors
          </Link>
        </div>
      </div>
      <Cart isOpen={isCartOpen} closeCart={closeCart} cart={cart} />
    </nav>
  );
};

export default NavBar;
