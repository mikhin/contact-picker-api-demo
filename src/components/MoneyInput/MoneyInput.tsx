import { useStore } from "@nanostores/react";
import React, { useCallback } from "react";

import { isContactsSupported } from "../../constants";
import { billAmountStore } from "../../stores/bill-amount-store";
import TextInput from "../TextInput/TextInput";

const MoneyInput = (): JSX.Element => {
  const value = String(useStore(billAmountStore));

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newValue = Number(event.target.value);
      if (newValue >= 0 && newValue <= 10000) billAmountStore.set(newValue);
    },
    []
  );

  return (
    <TextInput
      isDisabled={!isContactsSupported}
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
