import { IProduct, ICart } from './dataType';

class CartModel {
  cart: ICart;

  constructor() {
    this.cart = {
      products: {},
      totalAmount: 0,
      totalSum: 0,
      promoCodes: {
        'epm': 5,
        'rs': 10,
      },
      appliedPromoCodes: [],
    }

    this.getLocalCartStorage();
  }

  public getLocalCartStorage(): void {
    if (localStorage.getItem('cart')) {
      const savedCart = JSON.parse(localStorage.getItem('cart') as 'string');
      this.cart.products = savedCart.products;
      this.cart.totalAmount = savedCart.totalAmount;
      this.cart.totalSum = savedCart.totalSum;
    }
  }

  public getCart(): ICart {
    return this.cart;
  }

  public addProduct(product: IProduct): ICart {
    if (!this.cart.products[product.title]) {
      this.cart.products[product.title] = {
        product,
        amount: 1,
      };
    } else if (this.cart.products[product.title]) {
      this.cart.products[product.title].amount += 1;
    }

    this.cart.totalAmount += 1;
    this.cart.totalSum += product.price;

    this.setLocalCartStorage(this.getCart());
    return this.getCart();
  }

  public dropProduct(product: IProduct): ICart {
    const productAmount = this.cart.products[product.title].amount;
    const productSum = this.cart.products[product.title].product.price;
    this.cart.totalAmount -= productAmount;
    this.cart.totalSum -= productAmount * productSum;
    this.deleteProduct(product);

    this.setLocalCartStorage(this.getCart());
    return this.getCart();
  }

  public deleteProduct(product: IProduct): void {
    delete this.cart.products?.[product.title];
    this.setLocalCartStorage(this.getCart());
  }

  public increaseProduct(product: IProduct): ICart {
    this.cart.products[product.title].amount += 1;
    this.cart.totalAmount += 1;
    this.cart.totalSum += product.price;

    this.setLocalCartStorage(this.getCart());
    return this.getCart();
  }

  public decreaseProduct(product: IProduct): ICart {
    this.cart.products[product.title].amount -= 1;
    this.cart.totalAmount -= 1;
    this.cart.totalSum -= product.price;

    this.setLocalCartStorage(this.getCart());
    return this.getCart();
  }

  public clearCart(): ICart {
    this.cart.products = {};
    this.cart.totalAmount = 0;
    this.cart.totalSum = 0;

    return this.getCart();
  }

  public isProductInCart(title: string): boolean {
    if (this.cart.products[title]) {
      return true;
    } else {
      return false;
    }
  }

  public applyPromoCode(code: string) {
    if (!this.cart.appliedPromoCodes.includes(code)) {
      !this.cart.appliedPromoCodes.push(code);
    }
  }

  public dropPromoCode(code: string) {
    if (this.cart.appliedPromoCodes.includes(code)) {
      this.cart.appliedPromoCodes = this.cart.appliedPromoCodes.filter(i => i !== code);
    }
  }

  public setLocalCartStorage(cart: ICart): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

export const cartModel = new CartModel();