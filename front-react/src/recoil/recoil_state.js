import { atom } from "recoil";

const isDarkState = atom({
    key: "isDarkState",
    default: false
});

const isMacState = atom({
    key: "isMacState",
    default: window.navigator.platform.includes("Mac")
});

const isOpenHomeMenuState = atom({
    key: "isOpenHomeMenuState",
    default: false
});

export { isDarkState, isMacState, isOpenHomeMenuState };