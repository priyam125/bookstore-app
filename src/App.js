import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Login from "./component/Login";
import axios from "axios"; // Import Axios
import HomePage from "./pages/HomePage";
import NavBar from "./component/Navbar";
import BookDetails from "./pages/BookDetails";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookKey" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
