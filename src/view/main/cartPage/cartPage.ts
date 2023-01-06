import { cartController } from './../../../controller/cartController';
import { ICart, ICartProducts, IProduct } from './../../../model/dataType';
import createElement from "../../helpers/createElemt";
import createButton from '../../helpers/createButton';

import './cartPage.scss';

export class CartPage {
  private products: ICartProducts;
  private root: HTMLElement;
  private productsInner: HTMLElement;

  constructor(cartData: ICart) {
    this.products = cartData.products;
    this.root = createElement('div', 'cart-page');
    this.productsInner = createElement('div', 'cart-products__inner');
  }

  private createProductSection(): HTMLElement {
    const productsSection = createElement('div' ,'cart-products');

    productsSection.append(this.createProductSectionHeader(), this.productsInner);
    this.renderCartProducts(this.products)
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
      const currentAmount: number = this.products[cartProduct.title].amount;
      cartController.handleIncreaseProduct(productAmount, controlTotalPrice ,cartProduct, currentAmount);
    });

    productBtnMinus.addEventListener('click', () => {
      const currentAmount: number = this.products[cartProduct.title].amount;
      cartController.handleDecreaseProduct(product ,productAmount, controlTotalPrice ,cartProduct, currentAmount);
    });

    return product;
  }

  private renderCartProducts(products: ICartProducts) {
    const productsArr = Object.values(products).map((item, index) => {
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
    this.root.append(this.createProductSection());
  }
}