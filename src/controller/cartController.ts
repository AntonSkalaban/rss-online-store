import { cartModel } from './../model/cartModel';
import { ICart, IProduct } from './../model/dataType';
import data from "../model/data";
import { router } from '../model/router';
import createElement from '../view/helpers/createElemt';

class CartController {
  private updateTotalPrise(totalSum: number): void {
    const PRISE = document.querySelector<HTMLElement>('.header__price-total');
    if (PRISE) {
      PRISE.innerText = `€${totalSum}.00`;
    }
  }

  private updateTotalAmount(totalAmount: number): void {
    const AMOUNT = document.querySelector<HTMLElement>('.header__cart-amount');
    if (AMOUNT) {
      AMOUNT.innerText = `${totalAmount}`;
    }
  }

  private updateSummaryAmount(totalAmount: number): void {
    const SUMMARY_AMOUNT = document.querySelector<HTMLElement>('.cart-summary__amount-value');
    if (SUMMARY_AMOUNT) {
      SUMMARY_AMOUNT.innerText = `${totalAmount}`;
    }
  }

  private updateSummarySum(totalSum: number): void {
    const SUMMARY_SUM = document.querySelector<HTMLElement>('.cart-summary__sum-value');
    if (SUMMARY_SUM) {
      SUMMARY_SUM.innerText = `€${totalSum}.00`;
    }
  }

  private showCartEmtyText(CART_PAGE: HTMLElement): void {
    const CART_EMTY_TEXT = createElement('div', 'cart-empty-text');
    CART_EMTY_TEXT.innerText = 'There are no products in the cart.';
    CART_PAGE.append(CART_EMTY_TEXT);
  }

  public handleAddToCart(id: number): void {
    const product: IProduct | undefined = data.find(product => product.id === id);

    if (product) {
      if(!cartModel.isProductInCart(product.title)) {
        const {totalSum, totalAmount} = cartModel.addProduct(product);
        this.updateTotalPrise(totalSum);
        this.updateTotalAmount(totalAmount);
      }
    }
  }

  public handleAddDropToCart(BTN: HTMLElement , id: number): void {
    const product: IProduct | undefined = data.find(product => product.id === id);


    if (product) {
      if(!cartModel.isProductInCart(product.title)) {
        const {totalSum, totalAmount} = cartModel.addProduct(product);
        this.updateTotalPrise(totalSum);
        this.updateTotalAmount(totalAmount);
        BTN.innerText = 'Drop from cart';
      } else {
        const {totalSum, totalAmount} = cartModel.dropProduct(product);
        this.updateTotalPrise(totalSum);
        this.updateTotalAmount(totalAmount);
        BTN.innerText = 'Add to cart';
      }
    }
  }

  public handleIncreaseProduct(PRODUCT_AMOUNT: HTMLElement, PRODUCT_TOTAL_PRICE: HTMLElement,
    product: IProduct, currentAmount: number): void {
    if(product.stock <= currentAmount) {
      return;
    }

    const {totalSum, totalAmount, products} = cartModel.increaseProduct(product);
    const productAmount: number = products[product.title].amount;
    this.updateTotalPrise(totalSum);
    this.updateTotalAmount(totalAmount);
    this.updateSummaryAmount(totalAmount);
    this.updateSummarySum(totalSum);
    PRODUCT_AMOUNT.innerText = `${productAmount}`;
    PRODUCT_TOTAL_PRICE.innerText = `€${productAmount * product.price}`
  }

  public handleDecreaseProduct(PRODUCT: HTMLElement, PRODUCT_AMOUNT: HTMLElement, PRODUCT_TOTAL_PRICE: HTMLElement,
    product: IProduct, currentAmount: number): void {

    const {totalSum, totalAmount, products} = cartModel.decreaseProduct(product);
    const productAmount: number = products[product.title].amount;
    this.updateTotalPrise(totalSum);
    this.updateTotalAmount(totalAmount);
    this.updateSummaryAmount(totalAmount);
    this.updateSummarySum(totalSum);

    const CART_PAGE = document.querySelector<HTMLElement>('.cart-page');
    const isCartEmty: boolean = cartModel.getCart().totalAmount <= 0;
    if (isCartEmty && CART_PAGE) {
      CART_PAGE.innerHTML = '';
      this.showCartEmtyText(CART_PAGE);
    }

    if(currentAmount <= 1) {
      cartModel.deleteProduct(product);
      PRODUCT.remove();
      return;
    }
    PRODUCT_AMOUNT.innerText = `${productAmount}`;
    PRODUCT_TOTAL_PRICE.innerText = `€${productAmount * product.price}`
  }

  public handleClearCart() {
    const {totalSum, totalAmount} = cartModel.clearCart();
    this.updateTotalPrise(totalSum);
    this.updateTotalAmount(totalAmount);
  }

  public handleCartClick(e: Event) {
    const target = <HTMLElement>e.currentTarget;
    history.pushState('', '', target.dataset.href);
    router();
  }

  public handleApplyPromoCode(code: string) {
    cartModel.applyPromoCode(code);
  }

  public handleDropPromoCode(code: string) {
    cartModel.dropPromoCode(code);
  }

  public getLocalCartStorage(): void {
    cartModel.getLocalCartStorage();
  }

  public getCart(): ICart {
    return cartModel.getCart();
  }

  public isProductInCart(title: string): boolean {
    return cartModel.isProductInCart(title);
  }
}

export const cartController = new CartController();