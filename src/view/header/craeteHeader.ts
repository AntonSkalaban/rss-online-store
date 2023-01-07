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

  const cartImage = <HTMLImageElement>createElement('img', 'header__cart');

  logoImage.src = logoImg;
  logoTitle.innerText = 'Online Store';
  logo.appendChild(logoImage);
  logo.appendChild(logoTitle);

  price.innerText = 'Cart total: ';
  priceTotal.innerText = '0';
  price.appendChild(priceTotal);

  cartImage.src = cartImg;

  header.appendChild(logo);
  header.appendChild(price);
  header.appendChild(cartImage)

  return header;
}

export default createHeader;