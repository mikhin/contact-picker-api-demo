import React from "react";

import logoImage from "../../assets/images/logo.svg";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="grid min-h-full grid-rows-layout px-6 pb-0">
      <main className="py-28">{children}</main>

      <footer
        style={{ backgroundImage: `url(${logoImage})` }}
        className={`bg-center bg-no-repeat`}
      >
        <p className="pointer-events-none select-none text-center font-display text-7xl uppercase text-pink-200">
          Evil Martians
        </p>
      </footer>
    </div>
  );
};

export default Layout;
