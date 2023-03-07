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

  const handlePickClick = useCallback(() => {
    void navigator.contacts.select(selectedProperties, {
      multiple: settings.multiple,
    });
  }, [settings]);

  return (
    <div>
      <Button
        isDisabled={!isContactsSupported || ifSettingsNotSelected}
        onClick={handlePickClick}
      >
        Pick
      </Button>

      {contacts != null && (
        <ContactsTable isDisabled={!isContactsSupported} contacts={contacts} />
      )}
    </div>
  );
};

export default ContactsList;
