import React from "react";

type Props = { children: React.ReactNode };

const PageTitle: React.FC<Props> = React.memo(({ children }) => {
  return <h1 className="text-3xl md:text-4xl text-center font-mono uppercase">{children}</h1>;
});

export default PageTitle;
