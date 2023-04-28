type CardStateProps = {
  cards: Card[];
  addCard: (id: number | null, title: string, description: string) => void;
  cardToEdit: Card | undefined;
  setCardToEdit: (card: Card) => void;
  editCard: (card: Card) => void;
}
