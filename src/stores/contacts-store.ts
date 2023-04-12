import { atom } from "nanostores";

import { type ContactInfo } from "../types";

export const contactsStore = atom<ContactInfo[] | null>(null);
