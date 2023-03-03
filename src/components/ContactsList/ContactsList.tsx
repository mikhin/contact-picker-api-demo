import React from "react";
import { useStore } from "@nanostores/react";
import Button from "../Button/Button";
import ContactsTable from "../ContactsTable/ContactsTable";
import { contactsStore } from "../../stores/contacts-store";
import { isContactsSupported } from "../../constants";

const ContactsList = (): JSX.Element => {
  const contacts = useStore(contactsStore);

  return (
    <div>
      <Button isDisabled={!isContactsSupported} onClick={() => {}}>
        Pick
      </Button>

      {contacts != null && (
        <ContactsTable isDisabled={!isContactsSupported} contacts={contacts} />
      )}
    </div>
  );
};

export default ContactsList;
