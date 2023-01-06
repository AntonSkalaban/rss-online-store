// import data from "../model/data";
import createElement from "./helpers/createElemt";
import createHeader from "./header/craeteHeader";
import createMain from "./main/createMain";
import { IProduct } from "../model/dataType";

import './app.scss'

const createApp = (data: Array<IProduct>) => {
  const app = createElement('div', 'app');
  const main = createMain(data);
  const header = createHeader();

  app.appendChild(header);
  app.appendChild(main)
  return app;
}

export default createApp;
