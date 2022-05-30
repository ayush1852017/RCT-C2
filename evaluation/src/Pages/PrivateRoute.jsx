import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router";
import { RegistrationContext } from "../Context/RegistrationContextProvider";

export const PrivateRoute = ({ children, to }) => {
  const [state, dispatch] = useContext(RegistrationContext);
  if (state.isAuth) {
    return children;
  }
  return <Navigate to={to || "/dashboard"} />;
};
