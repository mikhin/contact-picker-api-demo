import React from "react";

import logoImage from "../../assets/images/logo.svg";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="grid min-h-full grid-rows-layout">
      <header />
      <main>{children}</main>
      <footer
        style={{ backgroundImage: `url(${logoImage})` }}
        className={`h-9 bg-no-repeat bg-center`}
      />
    </div>
  );
};

export default Layout;
