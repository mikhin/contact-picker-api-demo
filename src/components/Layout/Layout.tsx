import React from "react";

import evilMartiansTextImage from "../../assets/images/evil-martians.svg";
import logoImage from "../../assets/images/logo.svg";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="mx-auto grid min-h-full max-w-4xl grid-rows-layout px-3 pb-0">
      <main className="py-16">{children}</main>

      <footer className={"flex flex-col items-center"}>
        <div dangerouslySetInnerHTML={{ __html: evilMartiansTextImage }} />
        <div dangerouslySetInnerHTML={{ __html: logoImage }} />
      </footer>
    </div>
  );
};

export default Layout;
