import React, { type ReactNode } from "react";

interface Props {
  size: "m" | "lg";
  children: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
}

const Button = ({
  size,
  children,
  onClick,
  isDisabled,
}: Props): JSX.Element => {
  const sizeClasses = {
    m: "py-3",
    lg: "py-8",
  };

  return (
    <button
      className={`w-full border-2 px-4 text-xl outline-2 outline-offset-[6px] outline-black
      ${isDisabled === true ? "border-gray text-gray" : "border-black"} ${
        sizeClasses[size]
      }`}
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
