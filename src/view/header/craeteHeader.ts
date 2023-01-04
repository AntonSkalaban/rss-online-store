import { cartController } from './../../controller/cartController';
import createElement from "../helpers/createElemt";

import logoImg from '../../assets/svg/logo.svg';
import cartImg from '../../assets/svg/shopping-cart.svg';

import './header.scss';

const createHeader = () => {
  const header = createElement('header', 'header');

  const logo = createElement('a', 'header__logo');
  const logoImage = <HTMLImageElement>createElement('img', 'header__logo-img');
  const logoTitle = createElement('h1', 'header__logo-title');

  const price = createElement('h2', 'header__price');
  const priceTotal = <HTMLSpanElement>createElement('span', 'header__price-total');

  const cart = createElement('div', 'header__cart');
  const cartImage = <HTMLImageElement>createElement('img', 'header__cart-img');
  const cartAmount = <HTMLSpanElement>createElement('span', 'header__cart-amount');

  logoImage.src = logoImg;
  logoTitle.innerText = 'Online Store';
  logo.append(logoImage);
  logo.append(logoTitle);

  price.innerText = 'Cart total: ';
  priceTotal.innerText = '0';
  price.appendChild(priceTotal);

  cartImage.src = cartImg;
  cartAmount.innerText = '0';
  cart.dataset.href = '/cart';
  cart.append(cartImage);
  cart.append(cartAmount);

  header.append(logo);
  header.append(price);
  header.append(cart);

  cart.addEventListener('click', (e) => cartController.handleCartClick(e))

  return header;
}

export default createHeader;