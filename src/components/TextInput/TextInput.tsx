import React, { type HTMLInputTypeAttribute } from "react";

interface Props {
  placeholder: string;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  placeholder,
  label,
  name,
  type,
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <input
        className="w-full text-6xl text-center p-4 bg-transparent placeholder:text-center
          border-2 border-black rounded-none
          outline-black outline-2 outline-offset-[3px]
          "
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default TextInput;
