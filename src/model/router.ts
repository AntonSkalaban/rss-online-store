import createStartPage from "../view/main/startPage/createStartPage";
import { CartPage } from "../view/main/cartPage/cartPage";
import createProductDetailsSection from "../view/main/productDetails/createProductDetailsSection"
import  renderPage  from "../index";
import data from "./data";
import { cartModel } from './cartModel';
import createErrortPage from "../view/main/error-page/createErrorPage";

const url = new URL(window.location.href);
const allParams = url.search.substring(1).split('&');

export const router = () => {

  const main  = document.querySelector('.main');
  if (!main) return;

  const cartPage = new CartPage(cartModel.getCart());

  main.innerHTML = '';

  const path = window.location.pathname;

  if(path === '/' || path.includes('/?')) {
    const startPage = createStartPage(data);
    main.appendChild(startPage)
    renderPage(allParams);

  } else if (path.includes('/about')) {
    const productDetails = createProductDetailsSection(+path.split('/')[2]);
    if (productDetails) main.appendChild(productDetails);

  } else if (path.includes('/cart')) {
    main.append(cartPage.getRoot())
    cartPage.mount();

  } else if (!path.includes('/cart') && !path.includes('/about') && !path.includes('/?')) {

    const errorPage = createErrortPage();
    main.append(errorPage);
    
  } else {
    // history.replaceState('', '', '/');
    // router()
  }

}
// Update router
window.addEventListener('popstate', router);
window.addEventListener("DOMContentLoaded", router);