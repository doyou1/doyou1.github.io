import { defineStore } from 'pinia'

const useIsDarkStore = defineStore('isDark', {
    state: () => ({ isDark: false }),
    actions: {
        toggle() {
            this.isDark = !this.isDark;
        }
    },
});

const useIsMacStore = defineStore('isMac', {
    state: () => ({ isMac: window.navigator.platform.includes("Mac") }),
    actions: {
        toggle() {
            this.isMac = !this.isMac;
        }
    },
});

export { useIsDarkStore, useIsMacStore };