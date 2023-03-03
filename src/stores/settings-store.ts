import { map } from "nanostores";
import type { ContactProperty } from "../types";

export type SettingsKeys = keyof typeof ContactProperty | "multiple";

export const settingsStore = map<Record<SettingsKeys, boolean>>({
  multiple: false,
  address: false,
  email: false,
  icon: false,
  name: false,
  tel: false,
});
