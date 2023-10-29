import React, { useEffect } from "react";
import { Route, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return <div>{isAuthenticated ? <Outlet /> : null}</div>;
};

export default ProtectedRoute;
