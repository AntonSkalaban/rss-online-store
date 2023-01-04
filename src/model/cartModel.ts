import { IProduct, ICartProducts, ICart } from './dataType';

class CartModel {
  products: ICartProducts;
  totalAmount: number;
  totalSum: number;

  constructor() {
    this.products = {};
    this.totalAmount = 0;
    this.totalSum = 0;
  }

  getCart(): ICart {
    return {
      products: this.products,
      totalAmount: this.totalAmount,
      totalSum: this.totalSum,
    };
  }

  addProduct(product: IProduct): ICart {
    if (!this.products[product.title]) {
      this.products[product.title] = {
        product,
        amount: 1,
      };
    } else if (this.products[product.title]) {
      this.products[product.title].amount += 1;
    }

    this.totalAmount += 1;
    this.totalSum += product.price;

    return this.getCart();
  }
}

export const cartModel = new CartModel();