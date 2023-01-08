import { cartController } from './../../../controller/cartController';
import { ICart, ICartProducts, IProduct } from './../../../model/dataType';
import createElement from "../../helpers/createElemt";
import createButton from '../../helpers/createButton';

import './cartPage.scss';

export class CartPage {
  private cart: ICart;
  private root: HTMLElement;
  private productsInner: HTMLElement;

  constructor(cartData: ICart) {
    this.cart = cartData;
    this.root = createElement('div', 'cart-page');
    this.productsInner = createElement('div', 'cart-products__inner');
  }

  private createEmptyCartText(): HTMLElement {
    const emptyCartText = createElement('div', 'cart-empty-text')
    emptyCartText.innerText = 'There are no products in the cart.';
    return emptyCartText;
  }

  private createProductSection(): HTMLElement {
    const productsSection = createElement('div' ,'cart-products');

    productsSection.append(this.createProductSectionHeader(), this.productsInner);
    this.renderCartProducts(this.cart.products)
    return productsSection;
  }

  private createProductSectionHeader(): HTMLElement  {
    const productsHeader = createElement('div', 'cart-products__header');
    const productsHeaderTitle = createElement('h2', 'cart-products__header-title');

    productsHeaderTitle.innerText = 'Products In Cart';
    productsHeader.append(productsHeaderTitle);
    return productsHeader;
  }

  private createCartProduct(num: number, cartProduct: IProduct, amount: number) {
    const product = createElement('div', 'cart-products__item');
    const productNumber = createElement('div', 'cart-products__item-number');
    const productInner = createElement('div', 'cart-products__item-inner');
    const productControls = createElement('div', 'cart-products__item-controls');
    const productImg = <HTMLImageElement>createElement('img', 'cart-products__item-img');
    const productTitle = createElement('h3', 'cart-products__item-title');
    const productDescprition = createElement('div', 'cart-products__item-description');
    const productText = createElement('div', 'cart-products__item-text');
    const productInfo = createElement('div', 'cart-products__item-info');
    const productPrice = createElement('div', 'cart-products__item-price');
    const productRaiting = createElement('div', 'cart-products__item-raiting');
    const productDiscount = createElement('div', 'cart-products__item-discount');
    const controlStock = createElement('div', 'cart-products__item-stock');
    const controlTotalPrice = createElement('div', 'cart-products__item-totalPrice');
    const controlInner = createElement('div', 'cart-products__controls-inner');
    const productBtnPlus = createButton('cart-products__item-btn_plus', '+');
    const productBtnMinus = createButton('cart-products__item-btn_minus', '-');
    const productAmount = createElement('div', 'cart-products__item-amount');

    productNumber.innerText = `${num}`;
    productImg.src = cartProduct.thumbnail;
    productTitle.innerText = cartProduct.title;
    productText.innerText = cartProduct.description;
    productPrice.innerText = `€${cartProduct.price}`;
    productDiscount.innerText = `Discount: ${cartProduct.discountPercentage}%`;
    productRaiting.innerText = `Raiting: ${cartProduct.rating}`;
    controlStock.innerText = `Stock: ${cartProduct.stock}`;
    controlTotalPrice.innerText = `€${cartProduct.price * amount}`;
    productAmount.innerText = `${amount}`;

    productInfo.append(productPrice ,productRaiting, productDiscount)
    productDescprition.append(productTitle, productText, productInfo);
    productInner.append(productImg, productDescprition);
    controlInner.append(productBtnPlus, productAmount, productBtnMinus);
    productControls.append(controlStock, controlInner, controlTotalPrice);
    product.append(productNumber, productInner, productControls);

    productBtnPlus.addEventListener('click', () => {
      const currentAmount: number = this.cart.products[cartProduct.title].amount;
      cartController.handleIncreaseProduct(productAmount, controlTotalPrice ,cartProduct, currentAmount);
    });

    productBtnMinus.addEventListener('click', () => {
      const currentAmount: number = this.cart.products[cartProduct.title].amount;
      cartController.handleDecreaseProduct(product ,productAmount, controlTotalPrice ,cartProduct, currentAmount);
    });

    return product;
  }

  private createCartSummary(totalAmount: number, totalSum: number): HTMLElement {
    const summary = createElement('div', 'cart-summary');
    const summaryHeader = createElement('div', 'cart-summary__header');
    const summaryHeaderTitle = createElement('h2', 'cart-summary__header-title');
    const summaryInner = createElement('div', 'cart-summary__inner');
    const summaryAmount = createElement('div', 'cart-summary__amount');
    const summartAmountValue = <HTMLSpanElement>createElement('span', 'cart-summary__amount-value');
    const summarySum = createElement('div', 'cart-summary__sum');
    const summartSumValue = <HTMLSpanElement>createElement('span', 'cart-summary__sum-value');
    const summartPromoInput = <HTMLInputElement>createElement('input', 'cart-summary__promo-input');
    const summartPromoText = createElement('div', 'cart-summary__promo-text');
    const summaryButton = createButton('cart-summary__button', 'Buy now');

    summaryHeaderTitle.innerText = 'Summary';
    summaryAmount.innerText = 'Products: '
    summarySum.innerText = 'Total: '
    summartAmountValue.innerText = `${totalAmount}`;
    summartSumValue.innerText = `€${totalSum}`;
    summartPromoInput.type = 'search';
    summartPromoInput.placeholder = 'Enter promo code';
    summartPromoText.innerText = `Promo for test: 'RS', 'EPM'`;

    summaryHeader.append(summaryHeaderTitle);
    summaryAmount.append(summartAmountValue);
    summarySum.append(summartSumValue);
    summaryInner.append(summaryAmount, summarySum, summartPromoInput, summartPromoText, summaryButton);
    summary.append(summaryHeader, summaryInner);

    return summary;
  }

  private renderCartProducts(products: ICartProducts) {
    const productsArr: HTMLElement[] = Object.values(products).map((item, index) => {
      return this.createCartProduct(index, item.product, item.amount);
    });

    this.productsInner.innerHTML = '';
    this.productsInner.append(...productsArr);
  }

  public getRoot() {
    return this.root;
  }

  public mount() {
    this.root.innerHTML = '';

    if (localStorage.getItem('cart')) {
      cartController.getLocalCartStorage();
    }

    if (this.cart.totalAmount <= 0) {
      this.root.append(this.createEmptyCartText());
      return;
    }
    this.root.append(this.createProductSection(), this.createCartSummary(this.cart.totalAmount, this.cart.totalSum));
  }
}