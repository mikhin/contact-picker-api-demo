import React, { useCallback } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface FieldCheckboxProps<T extends string> {
  id: T;
  label: string;
  onChange: (id: T, isChecked: boolean) => void;
  isDisabled?: boolean;
  isChecked: boolean;
}

export function Toggle<T extends string>({
  id,
  label,
  onChange,
  isDisabled,
  isChecked,
}: FieldCheckboxProps<T>): JSX.Element {
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
        checked={isChecked}
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
}
