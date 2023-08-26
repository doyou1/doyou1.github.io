import { defineStore } from 'pinia'

export const useIsDarkStore = defineStore('isDark', {
    state: () => ({ isDark: false }),
    actions: {
        toggle() {
            this.isDark = !this.isDark;
        }
    },
});