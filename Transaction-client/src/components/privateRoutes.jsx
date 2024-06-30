import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//This is a wrapper component, it's not for rendering, it's for building logic for the children
export const PrivateRoutes = (props) => {
  const { children } = props;

  const { isAuthenticated } = useSelector((state) => state.user);
  return isAuthenticated ? children : <Navigate to="/login" />;
};
