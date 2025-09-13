import { create } from "zustand";

export const useCategoryStore = create((set) => ({
    category: "all",
    setCategory: (category) => { set({ category }) }
}))