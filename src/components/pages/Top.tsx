import React from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../atoms";

const Top: React.FC = () => {
  return (
    <div>
      <div className="mb-4">
        <PageTitle>Top</PageTitle>
      </div>
      <div className="text-center">
        <Link to="signup" className="inline-block mr-2 bg-blue-600 text-white p-1">
          会員登録はこちら
        </Link>
        <Link to="login" className="inline-block ml-2 bg-gray-600 text-white p-1">
          ログインはこちら
        </Link>
      </div>
    </div>
  );
};

export default Top;
