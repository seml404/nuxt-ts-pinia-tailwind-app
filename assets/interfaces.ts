export interface cardEl {
  id: number | string;
  urls: any | object;
  user: any | object;
  price: number | string;
}

export interface cardAddedEl {
  id: number | string;
  price: number;
  amount: number;
}

export interface requestProps {
  method: string;
  url: string;
}

export interface requestParams {}
