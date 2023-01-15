import React from "react";
import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";
import { Login, SignUp } from "../components/pages";

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </RouteList>
      )}
    </BrowserRouter>
  );
};

export default Routes;
