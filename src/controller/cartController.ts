import { cartModel } from './../model/cartModel';
import { CartPage } from '../view/main/cartPage/cartPage';
import { ICart, IProduct } from './../model/dataType';
import data from "../model/data";
import { router } from '../model/router';

class CartController {
  private updateTotalPrise(totalSum: number): void {
    const PRISE = document.querySelector<HTMLElement>('.header__price-total');
    if (PRISE) {
      PRISE.innerText = `${totalSum}`;
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

  public handleCartClick(e: Event) {
    const target = <HTMLElement>e.currentTarget;
    history.pushState('', '', target.dataset.href);
    router();

    new CartPage(cartModel);
  }

  public getCart(): ICart {
    return cartModel.getCart();
  }
}

export const cartController = new CartController();