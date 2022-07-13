import { v4 as uuidv4 } from "uuid";

const getMockCard = () => {
  return {
    id: uuidv4(),
    urls: {
      small:
        "https://assets.gq.ru/photos/617973313f644e1010c81faa/16:9/w_2560%2Cc_limit/GettyImages-1229892421.jpg",
    },
    user: {
      username: "test username",
    },
    price: Math.trunc(Math.random() * 10000),
  };
};
export const cardList = [];

for (let i = 0; i < 60; i++) {
  cardList.push(getMockCard());
}
