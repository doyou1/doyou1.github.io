import { defineStore } from "pinia";

export type IsDarkState = {
  isDark: boolean;
};

export type IsDarkStateActions = {
  toggle: () => void;
};

export type IsMacState = {
  isMac: boolean;
};

export type IsMacStateActions = {
  toggle: () => void;
};

const useIsDarkStore = defineStore<string, IsDarkState, {}, IsDarkStateActions>(
  {
    id: "isDark",
    state: () => ({ isDark: false }),
    actions: {
      toggle() {
        this.isDark = !this.isDark;
      },
    },
  },
);

const useIsMacStore = defineStore<string, IsMacState, {}, IsMacStateActions>({
  id: "isMac",
  state: () => ({ isMac: window.navigator.platform.includes("Mac") }),
  actions: {
    toggle() {
      this.isMac = !this.isMac;
    },
  },
});

export { useIsDarkStore, useIsMacStore };
