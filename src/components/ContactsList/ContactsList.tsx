import React from "react";
import { useStore } from "@nanostores/react";
import Button from "../Button/Button";
import ContactsTable from "../ContactsTable/ContactsTable";
import { contactsStore } from "../../stores/contacts-store";
import { isContactsSupported } from "../../constants";
import { settingsStore } from "../../stores/settings-store";

const ContactsList = (): JSX.Element => {
  const contacts = useStore(contactsStore);
  const settings = useStore(settingsStore);
  const nothingSelected = Object.values(settings).every((value) => !value);

  return (
    <div>
      <Button
        isDisabled={!isContactsSupported || nothingSelected}
        onClick={() => {}}
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
