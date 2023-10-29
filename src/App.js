import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import Login from "./component/Login";
import HomePage from "./pages/HomePage";
import NavBar from "./component/Navbar";
import BookDetails from "./pages/BookDetails";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <div className="">
      <RecoilRoot>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:bookKey" element={<BookDetails />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}
