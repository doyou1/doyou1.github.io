import { defineStore } from 'pinia'

export interface IsDarkState {
    isDark: boolean;
}

export interface IsDarkStateActions {
	toggle: () => void;
}

export interface IsMacState {
    isMac: boolean;
}

export interface IsMacStateActions {
	toggle: () => void;
}

const useIsDarkStore = defineStore<string, IsDarkState, {}, IsDarkStateActions>({
    id: "isDark",
    state: () => ({ isDark: false }),
    actions: {
        toggle() {
            this.isDark = !this.isDark;
        }
    },
});

const useIsMacStore = defineStore<string, IsMacState, {}, IsMacStateActions>({
    id: "isMac",
    state: () => ({ isMac: window.navigator.platform.includes("Mac") }),
    actions: {
        toggle() {
            this.isMac = !this.isMac;
        }
    },
});

export { useIsDarkStore, useIsMacStore };