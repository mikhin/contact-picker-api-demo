import React, { useCallback } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface FieldCheckboxProps {
  id: string;
  label: string;
  onChange: (id: string, isChecked: boolean) => void;
  isDisabled?: boolean;
}

export const Toggle = ({
  id,
  label,
  onChange,
  isDisabled,
}: FieldCheckboxProps): JSX.Element => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(id, e.target.checked);
    },
    [onChange]
  );

  return (
    <label
      className={`active:bg-gray-300 flex w-full items-center border-2 py-3 px-4 ${
        isDisabled === true ? "border-gray" : "border-black"
      }`}
    >
      <span
        className={`text-small mr-2 ${
          isDisabled === true ? "text-gray" : "text-black"
        }`}
      >
        {label}
      </span>

      <input
        disabled={isDisabled}
        type="checkbox"
        onChange={handleChange}
        className={clsx(
          styles.checkbox,
          isDisabled === true ? styles.checkbox_disabled : null
        )}
      />
    </label>
  );
};
