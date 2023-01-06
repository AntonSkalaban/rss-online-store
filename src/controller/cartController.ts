import { cartModel } from './../model/cartModel';
import { ICart, IProduct } from './../model/dataType';
import data from "../model/data";
import { router } from '../model/router';

class CartController {
  private updateTotalPrise(totalSum: number): void {
    const PRISE = document.querySelector<HTMLElement>('.header__price-total');
    if (PRISE) {
      PRISE.innerText = `€${totalSum}`;
    }
  }

  private updateTotalAmount(totalAmount: number): void {
    const AMOUNT = document.querySelector<HTMLElement>('.header__cart-amount');
    if (AMOUNT) {
      AMOUNT.innerText = `${totalAmount}`;
    }
  }

  public handleAddToCart(id: number): void {
    const product: IProduct | undefined = data.find(product => product.id === id);

    if (product) {
      const {totalSum, totalAmount} = cartModel.addProduct(product);
      this.updateTotalPrise(totalSum);
      this.updateTotalAmount(totalAmount);
    }
  }

  public handleIncreaseProduct(PRODUCT_AMOUNT: HTMLElement, PRODUCT_TOTAL_PRICE: HTMLElement,
    product: IProduct, currentAmount: number): void {
    if(product.stock === currentAmount) {
      return;
    }

    const {totalSum, totalAmount, products} = cartModel.increaseProduct(product);
    const productAmount: number = products[product.title].amount;
    this.updateTotalPrise(totalSum);
    this.updateTotalAmount(totalAmount);
    PRODUCT_AMOUNT.innerText = `${productAmount}`;
    PRODUCT_TOTAL_PRICE.innerText = `€${productAmount * product.price}`
  }

  public handleDecreaseProduct(PRODUCT: HTMLElement, PRODUCT_AMOUNT: HTMLElement, PRODUCT_TOTAL_PRICE: HTMLElement,
    product: IProduct, currentAmount: number): void {

    const {totalSum, totalAmount, products} = cartModel.decreaseProduct(product);
    const productAmount: number = products[product.title].amount;
    this.updateTotalPrise(totalSum);
    this.updateTotalAmount(totalAmount);

    if(currentAmount === 1) {
      cartModel.deleteProduct(product);
      PRODUCT.remove();
      return;
    }
    PRODUCT_AMOUNT.innerText = `${productAmount}`;
    PRODUCT_TOTAL_PRICE.innerText = `€${productAmount * product.price}`
  }

  public handleCartClick(e: Event) {
    const target = <HTMLElement>e.currentTarget;
    history.pushState('', '', target.dataset.href);
    router();
  }

  public getCart(): ICart {
    return cartModel.getCart();
  }
}

export const cartController = new CartController();