import createElement from "../helpers/createElemt";
import createStartPage from "./startPage/createStartPage";
import { IProduct } from "../../model/dataType";

import './main.scss'

const createMain = (data: Array<IProduct>) => {
  const main = createElement('main', 'main');
  const startPage = createStartPage(data);

  main.appendChild(startPage);
  return main;
}

export default createMain;
