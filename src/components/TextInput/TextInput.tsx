import React, { type HTMLInputTypeAttribute } from "react";

interface Props {
  placeholder: string;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}

const TextInput = ({
  placeholder,
  label,
  name,
  type,
  value,
  onChange,
  isDisabled,
}: Props): JSX.Element => {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <input
        className={`w-full rounded-none border-2 bg-transparent
            p-4 text-center text-6xl outline-2
            outline-offset-[6px] outline-black placeholder:text-center
            ${isDisabled === true ? "border-gray text-gray" : "border-black"}
          `}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </label>
  );
};

export default TextInput;
