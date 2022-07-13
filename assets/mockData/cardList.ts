import { v4 as uuidv4 } from "uuid";

const getMockCard = () => {
  return {
    id: uuidv4(),
    author: "mock",
    authorContact: "mock",
    smallPhotoUrl: "",
    price: Math.trunc(Math.random() * 10000),
  };
};
export const cardList = [];

for (let i = 0; i < 60; i++) {
  cardList.push(getMockCard());
}
