import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { RegistrationContext } from "../Context/RegistrationContextProvider";
export const RegisterPageTwo = () => {
  const [state, dispatch, handleSubmit] = useContext(RegistrationContext);

  const handleChange = (e) => {
    if (e.target.name === "address") {
      dispatch({
        type: "REGISTERED",
        payload: e.target.value,
      });
    }
    if (e.target.name === "phone") {
      dispatch({
        type: "REGISTERED",
        payload: e.target.value,
      });
    }
  };
  // console.log(state?.data);
  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="address"
        name="address"
        value={state?.data?.address}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="phone"
        name="phone"
        value={state?.data?.phone}
        onChange={handleChange}
      />
      <Link to="/">
        <button>Prev</button>
      </Link>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
