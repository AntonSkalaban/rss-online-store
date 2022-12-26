import createElement from "../view/helpers/createElemt";
import createStartPage from "../view/main/startPage/createStartPage";
import data from "./data";
import { renderPage } from "../index";

const startPage = createStartPage(data);
const about = createElement('h1')
about.textContent = 'ABOUT TITLE'

const routes = {
  '/': startPage,
  '/about': about
}

type RoutesPaths = keyof typeof routes;

const isRoute = (str: string) : str is RoutesPaths => {
  return Object.keys(routes).includes(str);
}

export const router = () => {
  const main  = document.querySelector('.main');
  if (!main) return;
  
  const path = location.pathname;
  console.log(path)

  if (isRoute(path)) {
    const view = routes[path];
    main.innerHTML = '';
    main.appendChild(view);
    if(path === '/') renderPage();
  } else {
    history.replaceState('', '', '/');
    router()
  }
}

// // Update router
window.addEventListener('popstate', router);
//window.addEventListener("DOMContentLoaded", router);



// const query = new URLSearchParams();

// query.append('param1', 'bacon');
// query.append('param2', 'eggs');
// query.append('param3', 'cheese');

// const queryString = query.toString();

// const url = window.location.href + '?' + queryString;

//window.location.href = url;