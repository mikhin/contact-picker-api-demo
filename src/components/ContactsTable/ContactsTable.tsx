import React from "react";
import { useStore } from "@nanostores/react";
import { type ContactInfo } from "../../types";
import { billAmountPerPersonStore } from "../../stores/bill-amount-store";

interface Props {
  contacts: ContactInfo[];
  isDisabled?: boolean;
}

const ContactsTable = ({ contacts }: Props): JSX.Element => {
  const billAmountPerPerson = useStore(billAmountPerPersonStore);

  return (
    <table className="w-full border-2">
      <tbody>
        {contacts.map((contact) => {
          const key =
            contact?.name?.[0] ?? contact?.email?.[0] ?? contact?.tel?.[0];
          const contactPropertiesCount = Object.values(contact).filter(
            (value) => value.length > 0
          ).length;

          return (
            <tr key={key}>
              {contact.icon != null ||
                (contact.name != null && (
                  <td
                    className="border-2 p-3 text-center"
                    colSpan={contactPropertiesCount}
                  >
                    {contact.icon != null ? (
                      <img alt="" />
                    ) : (
                      <span className="inline-block h-9 w-9 rounded-full bg-black p-1 text-xl text-white">
                        {contact.name?.[0][0]}
                      </span>
                    )}
                  </td>
                ))}

              <td className="border-2">
                <table className="mb-[-3px] w-full">
                  <tbody>
                    {contact.name?.length != null &&
                      contact.name?.length > 0 && (
                        <tr>
                          <td className="border-b-2 pt-2 pr-3 pb-2 pl-4 text-xl">
                            {contact.name[0]}
                          </td>
                        </tr>
                      )}

                    {contact.email?.length != null &&
                      contact.email?.length > 0 && (
                        <tr>
                          <td className="border-b-2 pt-2 pr-3 pb-2 pl-4">
                            {contact.email[0]}
                          </td>
                        </tr>
                      )}

                    {contact.tel?.length != null && contact.tel?.length > 0 && (
                      <tr>
                        <td className="border-b-2 pt-2 pr-3 pb-2 pl-4">
                          {contact.tel[0]}
                        </td>
                      </tr>
                    )}

                    {contact.address != null && (
                      <tr>
                        <td className="border-b-2 pt-2 pr-3 pb-2 pl-4">
                          {contact.address[0].addressLine}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>

              <td
                className="border-2 p-3 text-center text-3xl"
                colSpan={contactPropertiesCount}
              >
                {billAmountPerPerson}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactsTable;
