export interface IProduct {
  "id": number;
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": Array<string>
}

export interface ICartProducts {
  [key: string]: {
    product: IProduct;
    amount: number;
  };
}

export interface ICart {
  products: ICartProducts,
  totalAmount: number,
  totalSum: number,
}

/* export interface CartProducts {
  [key: string]: {
    amount: number;
    product: IProduct;
  };
}

export interface ICart {
  products: CartProducts,
  totalAmount: number,
  totalSum: number,
} */