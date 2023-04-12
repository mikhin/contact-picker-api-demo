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

      <footer className="flex justify-center">
        <a
          href="https://evilmartians.com"
          target="_blank"
          rel="noopener noreferrer"
          className={
            "relative inline-flex justify-center pb-4 outline-2 outline-offset-[6px] outline-black hover:opacity-50"
          }
        >
          <span dangerouslySetInnerHTML={{ __html: evilMartiansTextImage }} />
          <span
            className="left absolute bottom-0"
            dangerouslySetInnerHTML={{ __html: logoImage }}
          />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
