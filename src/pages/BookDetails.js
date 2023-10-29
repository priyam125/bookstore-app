// src/pages/BookDetails.js
import React from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const { title, author, coverId } = location.state || {};

  console.log(title);
  console.log(author);
  console.log(coverId);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex gap-4">
        <div className="w-1/4">
          <img
            src={
              coverId
                ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
                : "https://dummyimage.com/180x190/dedede/3b3b3b&text=Image+Not+Available"
            }
            alt="Book Cover"
            className="w-full h-auto"
          />
        </div>
        <div className="w-3/4">
          <p>Author: {author}</p>
          {/* <p>Genre: {genre}</p> */}
          {/* <p>Description: {description}</p> */}
          {/* You can add more details here */}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
