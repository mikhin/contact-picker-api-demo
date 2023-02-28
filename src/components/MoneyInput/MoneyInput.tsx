import React from "react";
import { useStore } from "@nanostores/react";
import TextInput from "../TextInput/TextInput";
import { billAmountStore } from "../../stores/bill-amount-store";

const MoneyInput = (): JSX.Element => {
  const value = String(useStore(billAmountStore));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = Number(event.target.value);
    if (newValue >= 0) billAmountStore.set(newValue);
  };

  return (
    <TextInput
      placeholder="100"
      label="Money input"
      name="money-input"
      type="number"
      value={value}
      onChange={handleChange}
    />
  );
};

export default MoneyInput;
