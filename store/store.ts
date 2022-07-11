import { defineStore } from "pinia";
import { status } from "~~/assets/utils";
import { apiGetPhotos } from "~~/assets/api";
import { card, cardAdded } from "~~/assets/interfaces";

export const mainStore = defineStore({
  id: "mainStore",
  state: () => {
    return {
      status: {
        photosList: "default",
      },
      photosList: [],
      cardsList: [
        {
          id: 1234,
          author: "asdf",
          authorContact: "asdf",
          smallPhotoUrl: "",
          price: Math.trunc(Math.random() * 10000),
        },
        {
          id: 12344,
          author: "asdf",
          authorContact: "asdf",
          smallPhotoUrl: "",
          price: Math.trunc(Math.random() * 10000),
        },
      ],
      cardsAdded: [],
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
    async addToCart(item: card) {
      this.cardsAdded.find((card) => card.id === item.id)
        ? this.cardsAdded.find((card) => card.id === item.id).amount++
        : this.cardsAdded.push({
            id: item.id,
            price: item.price,
            amount: 1,
          });
    },
    async removeFromCart(item) {
      let card = this.cardsAdded.find((el: cardAdded) => el.id === item.id);
      console.log(card);
      if (card) {
        card.amount > 1
          ? card.amount--
          : (this.cardsAdded = this.cardsAdded.filter(
              (card) => card.id !== item.id
            ));
      }
    },
    defineAmountInCart(item: card): number {
      if (this.cardsAdded.length) {
        return this.cardsAdded.find((el: cardAdded) => el.id === item.id)
          ? this.cardsAdded.find((el: cardAdded) => el.id === item.id).amount
          : 0;
      } else {
        return 0;
      }
    },
  },
  getters: {
    getCards() {
      return this.cardsList;
    },
    getTotalCost() {
      if (this.cardsAdded.length) {
        let sum = 0;
        this.cardsAdded.forEach((el: cardAdded) => {
          sum += el.price * el.amount;
        });
        return sum;
      } else {
        return 0;
      }
    },
  },
});
