import { cartController } from './../controller/cartController';
import createElement from "./helpers/createElemt";
import createHeader from "./header/craeteHeader";
import createMain from "./main/createMain";
import { IProduct } from "../model/dataType";


import './app.scss'

const createApp = (data: Array<IProduct>) => {
  const app = createElement('div', 'app');
  const main = createMain(data);
  const header = createHeader(cartController.getCart());

  window.addEventListener('beforeunload', () => console.log(5959))
  app.append(header, main);
  return app;
}

export default createApp;
