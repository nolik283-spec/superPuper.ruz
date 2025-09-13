import { create } from "zustand";

export const useSortStore = create((set) => ({
    sort: "alphabetical",
    setSort: (sort) => { set({ sort }) }
}))