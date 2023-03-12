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
        {contacts.map((contact, index) => {
          const isNameExists = contact.name != null && contact.name?.length > 0;
          const isIconExists = contact.icon != null && contact.icon.length > 0;
          const isTelExists = contact.tel != null && contact.tel?.length > 0;
          const isEmailExists =
            contact.email != null && contact.email?.length > 0;
          const isAddressExists =
            contact.address != null && contact.address?.length > 0;

          const key =
            contact?.name?.[0] ?? contact?.email?.[0] ?? contact?.tel?.[0];

          return (
            <tr key={key}>
              {(isIconExists || isNameExists) && (
                <td className="border-2 p-3 text-center">
                  {(contact.icon != null ? <img alt="" /> : null) ??
                    (contact.name != null ? (
                      <span className="inline-block h-9 w-9 rounded-full bg-black p-1 text-xl text-white">
                        {contact.name[0][0]}
                      </span>
                    ) : null)}
                </td>
              )}

              <td className="border-2">
                <table className="w-full">
                  <tbody>
                    <tr className="group">
                      <td className="break-all border-b-2 pt-2 pr-3 pb-2 pl-4 text-xl group-last:border-b-0">
                        {contact.name?.[0] ?? `Person ${index + 1}`}
                      </td>
                    </tr>

                    {isEmailExists && (
                      <tr className="group">
                        <td className="break-all border-b-2 pt-2 pr-3 pb-2 pl-4 group-last:border-b-0">
                          {contact.email?.[0]}
                        </td>
                      </tr>
                    )}

                    {isTelExists && (
                      <tr className="group">
                        <td className="break-all border-b-2 pt-2 pr-3 pb-2 pl-4 group-last:border-b-0">
                          {contact.tel?.[0]}
                        </td>
                      </tr>
                    )}

                    {isAddressExists && (
                      <tr className="group">
                        <td className="break-all border-b-2 pt-2 pr-3 pb-2 pl-4 group-last:border-b-0">
                          {contact.address?.[0].addressLine}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>

              <td className="border-2 p-3 text-center text-3xl">
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
