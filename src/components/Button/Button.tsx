import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props): JSX.Element => {
  return (
    <button
      className="w-full border-2 px-4 py-8 text-xl"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
