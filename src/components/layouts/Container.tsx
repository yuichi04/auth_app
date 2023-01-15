import React from "react";

type Props = { children: React.ReactNode };

const Container: React.FC<Props> = ({ children }) => {
  return <div className="mx-auto w-full md:w-1/2">{children}</div>;
};

export default Container;
