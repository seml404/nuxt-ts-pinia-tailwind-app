import { status } from "~~/assets/utils";
import { apiGetPhotos, apiGetUserDetails } from "~~/assets/api";
import { cardEl, cardAddedEl } from "~~/assets/interfaces";
export const actionsComposition = () => {
  return {
    async getPhotos() {
      console.log("getting photos");
      if (this.status.photosList !== status.success) {
        this.status.photosList = status.pending;
        try {
          const data = await apiGetPhotos();
          console.log(data);
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
              urls: this.photosList[i].urls,
              user: this.photosList[i].user,
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
      this.cardsAdded.find((card: cardAddedEl) => card.id === item.id)
        ? this.cardsAdded.find((card: cardAddedEl) => card.id === item.id)
            .amount++
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
    async getAuthorDetails(usernameRequested) {
      console.log("getting user details");
      if (this.authorDetailsRequested.username !== usernameRequested) {
        this.status.authorDetailsRequested = status.pending;
        try {
          const data = await apiGetUserDetails(usernameRequested);
          console.log(data);
          this.authorDetailsRequested = data.data;
          this.status.authorDetailsRequested = status.success;
        } catch (e) {
          this.status.authorDetailsRequested = status.error;
        }
      }
    },
    getMockAuthorDetails(username) {
      console.log(this.cardsList);
      console.log(username);
      return this.cardsList.find(
        (item: cardEl) => item.user.username === username
      )?.user;
    },
  };
};
