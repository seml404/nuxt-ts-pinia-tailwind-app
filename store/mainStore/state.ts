import { cardAddedEl, cardEl } from "~~/assets/interfaces";
// import { cardList } from "~~/assets/mockData/cardList";
export const state = () => {
  return {
    status: {
      photosList: "default",
      authorDetailsRequested: "default",
    },
    photosList: [],
    // cardsList: cardList,
    cardsList: [] as Array<cardEl>,
    cardsAdded: [] as Array<cardAddedEl>,
    cardsListDisplayed: [] as Array<cardEl>,
    authorDetailsRequested: {},
  };
};
