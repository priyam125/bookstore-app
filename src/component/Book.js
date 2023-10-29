import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState } from "../store/recoil";
import { useEffect, useState } from "react";

export default function Book({ title, author, coverId, id, price }) {
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(cartState);

  // Check if the book with the same ID is already in the cart
  const isBookInCart = cart.some((item) => item.id === id);

  const addToCart = () => {
    const book = { title, author, coverId, id, price };

    // Check if the book with the same ID already exists in the cart
    const isBookInCart = cart.some((item) => item.id === id);

    if (!isBookInCart) {
      setCart([...cart, book]);
    }
  };

  useEffect(() => {
    console.log(cart);
  });

  return (
    <div className="w-48 min-h-[275px] border border-gray-300 p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
      <div
        onClick={() =>
          navigate(`/books/${id}`, {
            state: {
              title: title,
              author: author,
              coverId: coverId,
            },
          })
        }
        className="w-full h-48"
      >
        <img
          src={
            coverId
              ? "https://covers.openlibrary.org/b/id/" + coverId + "-L.jpg"
              : "https://dummyimage.com/180x190/dedede/3b3b3b&text=Image+Not+Available"
          }
          alt="card-banner"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold mt-3 mb-2">{title}</h3>

      {/* Button text based on whether the book is in the cart */}
      {isBookInCart ? (
        <button disabled className="m-2 px-3 py-2 bg-green-500 text-white border-none cursor-pointer rounded-md">Added to Cart</button>
      ) : (
        <button className="m-2 px-3 py-2 bg-blue-500 text-white border-none cursor-pointer rounded-md" onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
}
