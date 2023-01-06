import createElement from "../view/helpers/createElemt";
import createStartPage from "../view/main/startPage/createStartPage";
import createProductDetailsSection from "../view/main/productDetails/createProductDetailsSection"
import data from "./data";
import  renderPage  from "../index";



const url = new URL(window.location.href);
const allParams = url.search.substring(1).split('&');

export const router = () => {
  console.log('rout')
  const main  = document.querySelector('.main');
  if (!main) return;
  
  const path = location.href
  
  console.log('пас' + path)

  main.innerHTML = '';
  if(path === 'http://localhost:8080/' || path.includes('?'))  {
    const startPage = createStartPage(data);
    main.appendChild(startPage)
    renderPage(allParams);
  } else if (path.includes('http://localhost:8080/about')) {
    console.log(path.split('/'))
    const productDetails = createProductDetailsSection(+(path.split('/').length - 1));
    console.log(productDetails)
    if (productDetails) main.appendChild(productDetails)
  }else {
    // history.replaceState('', '', '/');
    // router()
  }
  
}
// Update router
window.addEventListener('popstate', () => {
  console.log('popop')
  router()
});
window.addEventListener("DOMContentLoaded", router);
