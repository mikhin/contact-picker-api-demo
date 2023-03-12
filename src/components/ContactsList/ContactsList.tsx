import React, { useCallback } from "react";
import { useStore } from "@nanostores/react";
import Button from "../Button/Button";
import ContactsTable from "../ContactsTable/ContactsTable";
import { contactsStore } from "../../stores/contacts-store";
import { isContactsSupported } from "../../constants";
import {
  ifSettingsNotSelectedStore,
  selectedPropertiesStore,
  settingsStore,
} from "../../stores/settings-store";

const ContactsList = (): JSX.Element => {
  const contacts = useStore(contactsStore);
  const settings = useStore(settingsStore);
  const selectedProperties = useStore(selectedPropertiesStore);
  const ifSettingsNotSelected = useStore(ifSettingsNotSelectedStore);

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
      {(contacts === null || contacts.length === 0) && (
        <Button
          size="lg"
          isDisabled={!isContactsSupported || ifSettingsNotSelected}
          onClick={handlePickClick}
        >
          Pick
        </Button>
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
        <p className="pt-3 text-center">No contacts selected</p>
      )}
    </div>
  );
};

export default ContactsList;
