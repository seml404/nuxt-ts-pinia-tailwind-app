export interface cardEl {
  id: number | string;
  author: string;
  authorContact: string;
  smallPhotoUrl: string;
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
