import createElement from "../view/helpers/createElemt";
import createStartPage from "../view/main/startPage/createStartPage";
import { CartPage } from "../view/main/cartPage/cartPage";
import { renderPage } from "../index";
import data from "./data";
import { cartModel } from './cartModel';

const startPage = createStartPage(data);
const about = createElement('h1');
const cartPage = new CartPage(cartModel.getCart());
const cartPageEl = cartPage.getRoot();
about.textContent = 'ABOUT TITLE'

const routes = {
  '/': startPage,
  '/about': about,
  '/cart': cartPageEl,
}

type RoutesPaths = keyof typeof routes;

const isRoute = (str: string) : str is RoutesPaths => {
  return Object.keys(routes).includes(str);
}

export const router = () => {
  const main  = document.querySelector('.main');
  if (!main) return;

  const path = '/' + location.pathname.split('/')[1];

  if (isRoute(path)) {
    const view = routes[path];
    main.innerHTML = '';
    main.appendChild(view);
    if(path === '/') renderPage();
    if(path === '/cart') cartPage.mount();
  } else {
    history.replaceState('', '', '/');
    router()
  }
}

// Update router
window.addEventListener('popstate', router);
window.addEventListener("DOMContentLoaded", router);


// Query-param
// window.onclick = () => {
//   const newurl = window.location.href + '?myNewUrlQuery=1';
//   window.history.pushState({path:newurl},'',newurl);
// }
