import { create } from "zustand";

interface CategoryState {
  category: string;
  setCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  category: "All",
  setCategory: (category) => set({ category }),
}));