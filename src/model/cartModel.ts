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

  public getCart(): ICart {
    return {
      products: this.products,
      totalAmount: this.totalAmount,
      totalSum: this.totalSum,
    };
  }

  public addProduct(product: IProduct): ICart {
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

  public deleteProduct(product: IProduct): void {
    delete this.products?.[product.title];
  }

  public increaseProduct(product: IProduct): ICart {
    this.products[product.title].amount += 1;
    this.totalAmount += 1;
    this.totalSum += product.price;

    return this.getCart();
  }

  public decreaseProduct(product: IProduct): ICart {
    this.products[product.title].amount -= 1;
    this.totalAmount -= 1;
    this.totalSum -= product.price;

    return this.getCart();
  }
}

export const cartModel = new CartModel();