import { useStore } from "@nanostores/react";
import React, { useCallback } from "react";

import { isContactsSupported } from "../../constants";
import { contactsStore } from "../../stores/contacts-store";
import {
  ifSettingsNotSelectedStore,
  selectedPropertiesStore,
  settingsStore,
} from "../../stores/settings-store";
import Button from "../Button/Button";
import ContactsTable from "../ContactsTable/ContactsTable";

const ContactsList = (): JSX.Element => {
  const ifSettingsNotSelected = useStore(ifSettingsNotSelectedStore);
  const selectedProperties = useStore(selectedPropertiesStore);
  const contacts = useStore(contactsStore);
  const settings = useStore(settingsStore);

  const isDisabled = !isContactsSupported || ifSettingsNotSelected;

  const handlePickClick = useCallback(async () => {
    const contacts = await navigator.contacts.select(selectedProperties, {
      multiple: settings.multiple,
    });

    contactsStore.set(contacts);
  }, [settings]);

  const handleResetClick = useCallback(async () => {
    contactsStore.set(null);
  }, []);

  return (
    <div>
      {contacts === null && (
        <>
          <Button size="lg" isDisabled={isDisabled} onClick={handlePickClick}>
            Pick
          </Button>
          {/* <h3
            className={`mt-4 text-center text-xs ${
              isDisabled ? "text-gray" : ""
            }`}
          >
            This demo does not keep any of your data. At all.
          </h3> */}
        </>
      )}

      {contacts != null && contacts.length > 0 && (
        <>
          <div className="pb-3">
            <ContactsTable
              isDisabled={!isContactsSupported}
              contacts={contacts}
            />
          </div>

          <Button size="m" onClick={handleResetClick}>
            Clear
          </Button>
        </>
      )}

      {contacts?.length === 0 && (
        <>
          <p className="mb-3 pt-3 text-center">No contacts selected</p>
          <Button size="m" onClick={handleResetClick}>
            Clear
          </Button>
        </>
      )}
    </div>
  );
};

export default ContactsList;
