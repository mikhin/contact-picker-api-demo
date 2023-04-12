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
import Dialog from "../Dialog/Dialog";

const ContactsList = (): JSX.Element => {
  const ifSettingsNotSelected = useStore(ifSettingsNotSelectedStore);
  const selectedProperties = useStore(selectedPropertiesStore);
  const contacts = useStore(contactsStore);
  const settings = useStore(settingsStore);
  const [isModalErrorOpened, setIsModalErrorOpened] = React.useState(false);

  const isDisabled = !isContactsSupported || ifSettingsNotSelected;

  const handlePickClick = useCallback(async () => {
    try {
      const contacts = await navigator.contacts.select(selectedProperties, {
        multiple: settings.multiple,
      });

      contactsStore.set(contacts);
    } catch (error) {
      setIsModalErrorOpened(true);
    }
  }, [settings]);

  const handleResetClick = useCallback(async () => {
    contactsStore.set(null);
  }, []);

  const handleClose = useCallback(() => {
    setIsModalErrorOpened(false);
  }, []);

  return (
    <div>
      {contacts === null && (
        <>
          <Button size="lg" isDisabled={isDisabled} onClick={handlePickClick}>
            Pick
          </Button>
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

      <Dialog
        opened={isModalErrorOpened}
        onClose={handleClose}
        label="Something went wrong"
      >
        <p>Something went wrong.</p>
      </Dialog>
    </div>
  );
};

export default ContactsList;
