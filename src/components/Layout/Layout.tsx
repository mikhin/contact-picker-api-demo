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

      <footer className="flex flex-col items-center">
        <p className="mb-4 flex flex-col items-center">
          <a
            href="https://github.com/mikhin/contact-picker-api-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="underline outline-2 outline-offset-[4px] outline-black hover:opacity-70"
          >
            Source code
          </a>

          <a
            href="https://www.w3.org/TR/contact-picker/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline outline-2 outline-offset-[4px] outline-black hover:opacity-70"
          >
            W3C Working Draft
          </a>
        </p>

        <a
          href="https://evilmartians.com"
          target="_blank"
          rel="noopener noreferrer"
          className={
            "relative inline-flex justify-center pb-4 outline-2 outline-offset-[6px] outline-black hover:opacity-90"
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
