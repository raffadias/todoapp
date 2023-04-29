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
      return {cards: [ prevState.cards[cardIndex] = card, ...prevState.cards.filter(item => item.id !== card.id) ].sort((a : Card, b: Card) => a.id! - b.id!)}
    }),
    deleteCard: (cardId: number) => set((prevState) => (
      {cards: prevState.cards.filter(card => card.id !== cardId)}
    ))
  }),
  {
    name: "cards-storage",
    getStorage: () => localStorage,
  }
));

export const useCardStore = useStore;
