import React, { useCallback } from "react";
import styles from "./styles.module.css";

interface FieldCheckboxProps {
  id: string;
  label: string;
  onChange: (id: string, isChecked: boolean) => void;
}

export const Toggle = ({
  id,
  label,
  onChange,
}: FieldCheckboxProps): JSX.Element => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(id, e.target.checked);
    },
    [onChange]
  );

  return (
    <label
      className={
        "active:bg-gray-300 flex w-full items-center border-2 border-black py-3 px-4"
      }
    >
      <span className="text-small mr-2 text-black">{label}</span>

      <input
        type="checkbox"
        onChange={handleChange}
        className={styles.checkbox}
      />
    </label>
  );
};
