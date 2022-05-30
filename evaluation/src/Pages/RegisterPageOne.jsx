import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import "../App.css";
import { RegistrationContext } from "../Context/RegistrationContextProvider";
export const RegisterPageOne = () => {
  const [state, dispatch, handleSubmit] = useContext(RegistrationContext);
  const navigate = useNavigate();
  const nextHandle = () => {
    state != {} ? navigate("/pagetwo") : alert("Please fill the page");
  };
  const username = state?.data.username;
  const email = state?.data.email;
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            dispatch({
              type: "REGISTERED",
              payload: e.target.value,
            });
          }}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            dispatch({
              type: "REGISTERED",
              payload: e.target.value,
            });
          }}
        />
      </form>
      <button disabled>Prev</button>
      <button onClick={nextHandle}>Next</button>
    </div>
  );
};
