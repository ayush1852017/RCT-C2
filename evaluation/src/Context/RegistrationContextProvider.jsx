// Write code for Registration context
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router";
import { initState, authReducer } from "./registerReducer";
export const RegistrationContext = createContext();

export const RegistrationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    state.isAuth = true;

    console.log(state?.data);
    state?.data != {} ? navigate("/dashboard") : alert("Please fill the page");
  };

  return (
    <RegistrationContext.Provider value={[state, dispatch, handleSubmit]}>
      {children}
    </RegistrationContext.Provider>
  );
};
