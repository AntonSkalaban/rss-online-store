import { cartController } from './../controller/cartController';
import createElement from "./helpers/createElemt";
import createHeader from "./header/craeteHeader";
import createMain from "./main/createMain";
import createFooter from './footer/createFooter';

import './app.scss'

const createApp = () => {
  const app = createElement('div', 'app');

  const header = createHeader(cartController.getCart());
  const main = createMain();
  const footer = createFooter();

  app.append(header, main, footer);
  return app;
}

export default createApp;
