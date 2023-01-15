import React from "react";
import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";
import { SignUp } from "../components/pages";

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
          <Route path="/" element={<SignUp />} />
        </RouteList>
      )}
    </BrowserRouter>
  );
};

export default Routes;
