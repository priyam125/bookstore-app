import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  if (location.pathname === "/login") {
    // Don't display the navbar on the login page.
    return null;
  }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
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
    </nav>
  );
};

export default NavBar;
