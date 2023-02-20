import React, { useCallback } from "react";
import styles from "./styles.module.css";

interface FieldCheckboxProps {
  label: string;
  onChange: (value: boolean) => void;
  className?: string;
}

export const Toggle = ({
  label,
  onChange,
}: FieldCheckboxProps): JSX.Element => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    },
    [onChange]
  );

  return (
    <label className={"w-full flex items-center"}>
      <span className="mr-2 text-small text-black">{label}</span>

      <input
        type="checkbox"
        onChange={handleChange}
        className={styles.checkbox}
      />
    </label>
  );
};
