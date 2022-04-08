import React, { FC } from "react";
import { Login } from "../features/auth/Login"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProtectedComponent } from "../features/auth/ProtectedComponent";

type Props = {};

const Navigator: FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Navigator };
