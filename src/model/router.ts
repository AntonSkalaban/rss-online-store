import createElement from "../view/helpers/createElemt";
import createStartPage from "../view/main/startPage/createStartPage";
import createProductDetailsSection from "../view/main/productDetails/createProductDetailsSection"
import data from "./data";
import { renderPage } from "../index";

export const router = () => {
  console.log('rout')
  const main  = document.querySelector('.main');
  if (!main) return;
  
  const path = location.pathname
  
  console.log(path)

  main.innerHTML = '';
  if(path === '/')  {
    const startPage = createStartPage(data);
    main.appendChild(startPage)
    renderPage();
  } else if (path.includes('/about')) {
    const productDetails = createProductDetailsSection(+path.split('/')[2]);
    if (productDetails) main.appendChild(productDetails)
  }else {
    history.replaceState('', '', '/');
    router()
  }
  
}
// Update router
window.addEventListener('popstate', router);
window.addEventListener("DOMContentLoaded", router);
