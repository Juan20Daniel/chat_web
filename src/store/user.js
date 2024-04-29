import { create } from "zustand";
import { getTokenLocalStorage } from '../data/local/LocalStorage';
export const userStore = create((set) => ({
    user: getTokenLocalStorage()
}));