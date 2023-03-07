import { computed, map } from "nanostores";
import type { ContactProperty } from "../types";

export type SettingsKeys = keyof typeof ContactProperty | "multiple";

export const settingsStore = map<Record<SettingsKeys, boolean>>({
  multiple: false,
  address: false,
  email: false,
  icon: false,
  name: true,
  tel: true,
});

export const ifSettingsNotSelectedStore = computed(settingsStore, (settings) =>
  Object.entries(settings)
    .filter(([key]) => key !== "multiple")
    .every(([, value]) => !value)
);

export const selectedPropertiesStore = computed(settingsStore, (settings) =>
  Object.entries(settings)
    .filter(([key, value]) => value && key !== "multiple")
    .map(([key]) => key as ContactProperty)
);
