import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
}

const Button = ({ children, onClick, isDisabled }: Props): JSX.Element => {
  return (
    <button
      className={`w-full border-2 px-4 py-8 text-xl outline-2 outline-offset-[6px] outline-black
      ${isDisabled === true ? "border-gray text-gray" : "border-black"}`}
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
