import { cartController } from './../../../controller/cartController';
import { ICart, ICartProducts, IProduct } from './../../../model/dataType';
import createElement from "../../helpers/createElemt";
import createButton from '../../helpers/createButton';

export class CartPage {
  private products: ICartProducts;
  private cartPageInner: HTMLElement;
  private productsInner: HTMLElement;

  constructor(cart: ICart) {
    this.products = cart.products;
    this.cartPageInner = createElement('div', 'cart-page__inner');
    this.productsInner = createElement('div', 'cart-products__inner');
    this.mount();
  }

  private mount() {
    const cartPage = document.querySelector<HTMLElement>('.cart-page');
    if(cartPage) {
      cartPage.innerHTML = '';
      cartPage.append(this.cartPageInner);
      // this.cartPage.append(this.summarySection)
      this.cartPageInner.append(this.createProductSection());
    }
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
    const productControl = createElement('div', 'cart-products__item-control');
    const productImg = <HTMLImageElement>createElement('img', 'cart-products__item-img');
    const productTitle = createElement('h3', 'cart-products__item-title');
    const productDescprition = createElement('div', 'cart-products__item-description');
    const productText = createElement('div', 'cart-products__item-text');
    const productInfo = createElement('div', 'cart-products__item-info');
    const productRaiting = createElement('div', 'cart-products__item-raiting');
    const productDiscount = createElement('div', 'cart-products__item-discount');
    const controlStock = createElement('div', 'cart-products__item-stock');
    const controlPrice = createElement('div', 'cart-products__item-price');
    const controlInner = createElement('div', 'cart-products__item-inner');
    const productBtnPlus = createButton('cart-products__item-btn_plus', '+');
    const productBtnMinus = createButton('cart-products__item-btn_minus', '-');
    const productAmount = createElement('div', 'cart-products__item-amount');

    productNumber.innerText = `${num}`;
    productImg.src = cartProduct.thumbnail;
    productTitle.innerText = cartProduct.title;
    productText.innerText = cartProduct.description;
    productDiscount.innerText = `${cartProduct.discountPercentage}`;
    productRaiting.innerText = `${cartProduct.rating}`;
    controlStock.innerText = `${cartProduct.stock}`;
    controlPrice.innerText = `${cartProduct.price}`;
    productAmount.innerText = `${amount}`;

    productInfo.append(productRaiting, productDiscount)
    productDescprition.append(productTitle, productText, productInfo);
    productInner.append(productImg, productDescprition);
    controlInner.append(productBtnPlus, productAmount, productBtnMinus);
    productControl.append(controlStock, controlInner, controlPrice);
    product.append(productNumber, productInner, productControl);

    productBtnPlus.addEventListener('click', () => {cartController.handleAddToCart(cartProduct.id)})
    return product;
  }

  private renderCartProducts(products: ICartProducts) {
    const productsArr = Object.values(products).map((item, index) => {
      return this.createCartProduct(index, item.product, item.amount);
    });

    this.productsInner.append(...productsArr);
  }
}