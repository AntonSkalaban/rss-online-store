import { cartController } from './../../../controller/cartController';
import { ICart, ICartProducts, IProduct } from './../../../model/dataType';
import createElement from "../../helpers/createElemt";
import createButton from '../../helpers/createButton';

import './cartPage.scss';

export class CartPage {
  private cart: ICart;
  private root: HTMLElement;
  private productsInner: HTMLElement;
  private summarySum: HTMLElement;
  private summaryNewSum: HTMLElement;
  private promoAppliedBlock: HTMLElement;
  private summaryPromoInput: HTMLInputElement;
  private promoBlock: HTMLElement;

  constructor(cartData: ICart) {
    this.cart = cartData;
    this.root = createElement('div', 'cart-page');
    this.productsInner = createElement('div', 'cart-products__inner');
    this.summarySum = createElement('div', 'cart-summary__sum');
    this.summaryNewSum = createElement('div', 'cart-summary__sum_new');
    this.promoAppliedBlock = createElement('div', 'cart-summary__promo-applied');
    this.summaryPromoInput = <HTMLInputElement>createElement('input', 'cart-summary__promo-input');
    this.promoBlock = createElement('div', 'cart-summary__promo-block');
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
    controlTotalPrice.innerText = `€${cartProduct.price * amount}.00`;
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
    const summaryAmountValue = createElement('span', 'cart-summary__amount-value');
    const summarySumValue = createElement('span', 'cart-summary__sum-value');
    const summaryPromoCodes = createElement('div', 'cart-summary__promo-codes');
    const summaryButton = createButton('cart-summary__button', 'Buy now');
    const codes = Object.keys(this.cart.promoCodes).map(code => `'${code.toUpperCase()}'`).join(', ');

    summaryHeaderTitle.innerText = 'Summary';
    summaryAmount.innerText = 'Products: '
    this.summarySum.innerText = 'Total: '
    summaryAmountValue.innerText = `${totalAmount}`;
    summarySumValue.innerText = `€${totalSum}.00`;
    this.summaryPromoInput.type = 'search';
    this.summaryPromoInput.placeholder = 'Enter promo code';
    summaryPromoCodes.innerText = `Promo for test: ${codes}`;

    summaryHeader.append(summaryHeaderTitle);
    summaryAmount.append(summaryAmountValue);
    this.summarySum.append(summarySumValue);
    summaryInner.append(summaryAmount, this.summarySum, this.summaryNewSum,
      this.promoAppliedBlock, this.summaryPromoInput, this.promoBlock, summaryPromoCodes, summaryButton);
    summary.append(summaryHeader, summaryInner);

    this.summaryPromoInput.addEventListener('input', this.onInputPromo.bind(this));

    return summary;
  }

  private onInputPromo(e: Event) {
    const input = e.target as HTMLInputElement;
    const value: string = input.value.toLowerCase();
    const validCodes: string[] = Object.keys(this.cart.promoCodes);

    this.promoBlock.innerHTML = '';
    if (validCodes.includes(value)) {
      this.fillPromoBlock(value);
    }
  }

  private fillPromoBlock(code: string): void {
    const promoText = createElement('span', 'cart-summary__promo-block-text');
    const promoBtn = createButton('cart-summary__promo-block-btn', 'add');

    const isAppliedCode = this.cart.appliedPromoCodes.includes(code) ? true : false;
    const discount: number = this.cart.promoCodes[code];

    promoText.innerText = `${code.toUpperCase()} - ${discount}%`;
    this.promoBlock.append(promoText);

    if (!isAppliedCode) {
      this.promoBlock.append(promoBtn);
      promoBtn.addEventListener('click', () => {
        cartController.handleApplyPromoCode(code);
        this.fillPromoAppliedBlock();
        this.updateTotalPrice();
        this.summaryPromoInput.value = '';
        this.promoBlock.innerHTML = '';
      });
    }
  }

  private updateTotalPrice(): void {
    let totalDiscount = 0;
    for (const code of this.cart.appliedPromoCodes) {
      totalDiscount += this.cart.promoCodes[code];
    }

    const currentPrice: number = this.cart.totalSum;
    const newPrice: number = currentPrice - (currentPrice * totalDiscount / 100)

    if (this.cart.appliedPromoCodes.length) {
      this.summarySum.style.textDecoration = 'line-through';
      this.summaryNewSum.innerText = `Total: €${newPrice.toFixed(2)}`;
    } else {
      this.summarySum.style.textDecoration = 'none';
      this.summaryNewSum.innerText = '';
    }
  }

  private fillPromoAppliedBlock(): void {
    this.promoAppliedBlock.innerHTML = '';
    if (this.cart.appliedPromoCodes.length) {
      const promoAppliedHeader = createElement('div', 'cart-summary__promo-applied-header');
      const promoAppliedItems: HTMLElement[] = this.cart.appliedPromoCodes.map(
        code => this.createPromoAppliedItem(code, this.cart.promoCodes[code]));
      promoAppliedHeader.innerText = 'Applied codes';

      this.promoAppliedBlock.append(promoAppliedHeader, ...promoAppliedItems)
    }
  }

  private createPromoAppliedItem(code: string, discount: number): HTMLElement {
    const item = createElement('div', 'cart-summary__promo-applied-item');
    const itemText = createElement('span', 'cart-summary__promo-applied-text');
    const itemBtn = createButton('cart-summary__promo-applied-btn', 'drop');

    itemText.innerText = `${code.toUpperCase()} - ${discount}%`;
    item.addEventListener('click', () => {
      cartController.handleDropPromoCode(code);
      this.updateTotalPrice();
      this.fillPromoAppliedBlock();
      item.remove();
      this.summaryPromoInput.value = '';
      this.promoBlock.innerHTML = '';
    });

    item.append(itemText, itemBtn);
    return item;
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