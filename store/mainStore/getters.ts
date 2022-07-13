import { cardAddedEl } from "~~/assets/interfaces";
export const gettersComposition = () => {
  return {
    getCards() {
      return this.cardsList;
    },
    getCardsListDisplayed() {
      return this.cardsListDisplayed;
    },
    getTotalCost() {
      if (this.cardsAdded.length) {
        let sum = 0;
        this.cardsAdded.forEach((el: cardAddedEl) => {
          sum += el.price * el.amount;
        });
        return sum;
      } else {
        return 0;
      }
    },
  };
};
