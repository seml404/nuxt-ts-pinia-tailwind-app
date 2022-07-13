import { defineStore } from "pinia";
import { cardList } from "~~/assets/mockData/cardList";
import { status } from "~~/assets/utils";
import { apiGetPhotos } from "~~/assets/api";
import { cardEl, cardAddedEl } from "~~/assets/interfaces";

export const mainStore = defineStore({
  id: "mainStore",
  state: () => {
    return {
      status: {
        photosList: "default",
      },
      photosList: [],
      cardsList: cardList,
      cardsAdded: [],
      cardsListDisplayed: [],
    };
  },
  actions: {
    async getPhotos() {
      console.log("getting photos");
      if (this.status.photosList !== status.success) {
        this.status.photosList = status.pending;
        try {
          const data = await apiGetPhotos();
          this.photosList = data.data;
          this.status.photosList = status.success;
        } catch (e) {
          this.status.photosList = status.error;
        }
      }
    },
    async createMockCards() {
      console.log("creating cards");
      if (this.status.cardsList !== status.success) {
        this.status.cardsList = status.pending;
        try {
          for (let i = 0; i < this.photosList.length; i++) {
            this.cardsList.push({
              id: this.photosList[i].id,
              author: this.photosList[i].user.name,
              authorContact: this.photosList[i].user.social.instagram_username,
              smallPhotoUrl: this.photosList[i].urls.small,
              price: Math.trunc(Math.random() * 100),
            });
          }
        } catch (e) {
          this.status.cardsList = status.error;
        }
      }
    },
    async getInitializationData() {
      // await this.getPhotos();
      await this.createMockCards();
    },
    async addToCart(item) {
      this.cardsAdded.find((card) => card.id === item.id)
        ? this.cardsAdded.find((card) => card.id === item.id).amount++
        : this.cardsAdded.push({
            id: item.id,
            price: item.price,
            amount: 1,
          });
    },
    async removeFromCart(item) {
      let card = this.cardsAdded.find((el: cardAddedEl) => el.id === item.id);
      console.log(card);
      if (card) {
        card.amount > 1
          ? card.amount--
          : (this.cardsAdded = this.cardsAdded.filter(
              (card) => card.id !== item.id
            ));
      }
    },
    defineAmountInCart(item): number {
      if (this.cardsAdded.length) {
        return this.cardsAdded.find((el: cardAddedEl) => el.id === item.id)
          ? this.cardsAdded.find((el: cardAddedEl) => el.id === item.id).amount
          : 0;
      } else {
        return 0;
      }
    },
    setCardsListDisplayed(cardsArr: Array<cardEl>): void {
      console.log(cardsArr);
      this.cardsListDisplayed = cardsArr;
    },
  },
  getters: {
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
  },
});
