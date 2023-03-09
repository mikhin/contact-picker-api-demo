import { atom, computed } from "nanostores";
import { contactsStore } from "./contacts-store";

export const billAmountStore = atom<number>(0);

export const billAmountPerPersonStore = computed(
  [billAmountStore, contactsStore],
  (billAmount, contacts) => (billAmount / (contacts?.length ?? 1)).toFixed(2)
);
