import createStartPage from "../view/main/startPage/createStartPage";
import createProductDetailsSection from "../view/main/productDetails/createProductDetailsSection"
import data from "./data";
import  renderPage  from "../index";



const url = new URL(window.location.href);
const allParams = url.search.substring(1).split('&');

export const router = () => {

  const main  = document.querySelector('.main');
  if (!main) return;
  
  main.innerHTML = '';

  const path = window.location.pathname;

  if(path === '/' || path.includes('/?')) {
    const startPage = createStartPage(data);
    main.appendChild(startPage)
    renderPage(allParams);

  } else if (path.includes('/about')) {
    const productDetails = createProductDetailsSection(+path.split('/')[2]);
    if (productDetails) main.appendChild(productDetails);

  }else {
    // history.replaceState('', '', '/');
    // router()
  }
  
}
// Update router
window.addEventListener('popstate', router);
window.addEventListener("DOMContentLoaded", router);
