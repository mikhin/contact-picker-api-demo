import React from "react";
import { useStore } from "@nanostores/react";
import Button from "../Button/Button";
import ContactsTable from "../ContactsTable/ContactsTable";
import { contactsStore } from "../../stores/contacts-store";

const ContactsList = (): JSX.Element => {
  const contacts = useStore(contactsStore);

  return (
    <div>
      <Button onClick={() => {}}>Pick</Button>

      {contacts != null && <ContactsTable contacts={contacts} />}
    </div>
  );
};

export default ContactsList;
