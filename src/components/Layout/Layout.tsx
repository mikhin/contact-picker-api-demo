import React from "react";

import logoImage from "../../assets/images/logo.svg";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="mx-auto grid min-h-full max-w-4xl grid-rows-layout px-6 pb-0">
      <main className="py-16">{children}</main>

      <footer className={"flex flex-col items-center"}>
        <p className="pointer-events-none select-none font-display text-7xl uppercase text-pink-200">
          Evil Martians
        </p>
        <img
          width="88px"
          height="38px"
          className="mt-[-32px]"
          src={logoImage}
          alt="Evil Martians logotype"
        />
      </footer>
    </div>
  );
};

export default Layout;
