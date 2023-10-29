import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import Login from "./component/Login";
import HomePage from "./pages/HomePage";
import NavBar from "./component/Navbar";
import BookDetails from "./pages/BookDetails";
import { RecoilRoot } from "recoil";
import ProtectedRoute from "./component/ProtectedRoute";

export default function App() {
  return (
    <div className="">
      <RecoilRoot>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<ProtectedRoute />}>
              <Route index element={<HomePage />} />
            </Route>
            {/* <Route path="/books" element={<BookList />} /> */}
            <Route path="/books" element={<ProtectedRoute />}>
              <Route index element={<BookList />} />
            </Route>
            <Route path="/books/:bookKey" element={<BookDetails />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}
