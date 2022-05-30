import React from "react";
import { Dashboard } from "./Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { RegisterPageOne } from "./RegisterPageOne";
import { RegisterPageTwo } from "./RegisterPageTwo";
import { Routes, Route } from "react-router-dom";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPageOne />} />
      <Route path="/pagetwo" element={<RegisterPageTwo />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/private" element={<PrivateRoute />} />
    </Routes>
  );
};
