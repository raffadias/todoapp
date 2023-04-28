import { create } from "zustand"
import { persist } from "zustand/middleware"

const useStore = create<CardStateProps>()(persist(
  (set) => ({
    cards: [],
    addCard: (title: string, description: string) => set((prevState) => {
      return (
      { cards: [...prevState.cards, { title, description }] }
    )})
  }),
  {
    name: "cards-storage", // unique name
    getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
  }
));

export const useCardStore = useStore;
