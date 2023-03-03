import React, { useCallback } from "react";
import { ContactProperty } from "../../types";
import { Toggle } from "../Toggle/Toggle";
import { isContactsSupported } from "../../constants";

const SettingsForm = (): JSX.Element => {
  const contactProperties = Object.keys(ContactProperty);

  const handleOptionChange = useCallback((id: string, isChecked: boolean) => {
    console.log(id, isChecked);
  }, []);

  return (
    <ul className="w-full">
      <li className="mb-[-2px]">
        <Toggle
          isDisabled={!isContactsSupported}
          id="multiple"
          label="Multiple results"
          onChange={handleOptionChange}
        />
      </li>

      {contactProperties.map((property) => {
        return (
          <li key={property} className="mb-[-2px] capitalize last:mb-0">
            <Toggle
              isDisabled={!isContactsSupported}
              id={property}
              label={property}
              onChange={handleOptionChange}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SettingsForm;
