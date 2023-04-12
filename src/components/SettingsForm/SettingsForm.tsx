import { useStore } from "@nanostores/react";
import React, { useCallback, useEffect, useState } from "react";

import { isContactsSupported } from "../../constants";
import {
  ifSettingsNotSelectedStore,
  type SettingsKeys,
  settingsStore,
} from "../../stores/settings-store";
import { type ContactProperty } from "../../types";
import { Toggle } from "../Toggle/Toggle";

const SettingsForm = (): JSX.Element => {
  const settings = useStore(settingsStore);
  const ifSettingsNotSelected = useStore(ifSettingsNotSelectedStore);
  const [contactProperties, setContactProperties] = useState<Array<
    keyof typeof ContactProperty
  > | null>(null);

  const handleOptionChange = useCallback(
    (id: SettingsKeys, isChecked: boolean) => {
      settingsStore.setKey(id, isChecked);
    },
    []
  );

  useEffect(() => {
    async function checkPropertiesSupport(): Promise<void> {
      try {
        const supportedProperties = await navigator.contacts.getProperties();
        setContactProperties(supportedProperties);
      } catch {
        console.warn(
          "This browser doesn’t support the Contact Picker API, which required for this demo."
        );
      }
    }

    void checkPropertiesSupport();
  }, []);

  return (
    <div>
      <ul className="w-full">
        <li className="mb-[-2px]">
          <Toggle
            isChecked={settings.multiple}
            isDisabled={!isContactsSupported}
            id="multiple"
            label="Multiple results"
            onChange={handleOptionChange}
          />
        </li>

        {contactProperties?.map((property) => {
          return (
            <li key={property} className="mb-[-2px] capitalize last:mb-0">
              <Toggle
                isChecked={settings[property]}
                isDisabled={!isContactsSupported}
                id={property}
                label={property}
                onChange={handleOptionChange}
              />
            </li>
          );
        })}
      </ul>

      {ifSettingsNotSelected && (
        <h3 className="mt-4 text-xs">
          Please select which properties will be selected for contacts from the
          user&apos;s address book.
        </h3>
      )}
    </div>
  );
};

export default SettingsForm;
