import React from "react";
import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";
import { Login, SignUp, Top } from "../components/pages";

const user = { isSignedIn: false };

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      {user.isSignedIn ? (
        <RouteList>
          <Route path="/" />
        </RouteList>
      ) : (
        <RouteList>
          <Route path="/" element={<Top />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </RouteList>
      )}
    </BrowserRouter>
  );
};

export default Routes;
