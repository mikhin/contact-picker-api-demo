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
        className="w-full rounded-none border-2 border-black bg-transparent p-4
          text-center text-6xl outline-2
          outline-offset-[6px] outline-black placeholder:text-center
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
