import createElement from "../helpers/createElemt";
import createStartPage from "./startPage/createStartPage";

const createMain = () => {
  const main = createElement('main', 'main');
  const startPage = createStartPage();

  main.appendChild(startPage);
  return main;
}

export default createMain;