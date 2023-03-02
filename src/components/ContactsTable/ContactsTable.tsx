import React from "react";
import { type ContactInfo } from "../../types";

interface Props {
  contacts: ContactInfo[];
}

const ContactsTable = ({ contacts }: Props): JSX.Element => {
  return (
    <table>
      {contacts.map((contact) => {
        return (
          <tr key={contact.name[0]}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.tel}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default ContactsTable;
