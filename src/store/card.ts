import { create } from "zustand"
import { persist } from "zustand/middleware"

const useStore = create<CardStateProps>()(persist(
  (set) => ({
    cards: [],
    addCard: (id: number | null, title: string, description: string) => set((prevState) => {
      return (
      { cards: [...prevState.cards, { id: prevState.cards.length + 1, title, description }] }
    )}),
    cardToEdit: undefined,
    setCardToEdit: (card: Card) => set({ cardToEdit: card }),
    editCard: (card: Card) => set((prevState) => {
      const cardIndex = prevState.cards.findIndex((cardIterator) => cardIterator.id === card.id);
      return {cards: [ prevState.cards[cardIndex] = card, ...prevState.cards.filter(item => item.id !== card.id) ]}
    })
  }),
  {
    name: "cards-storage", // unique name
    getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
  }
));

export const useCardStore = useStore;
