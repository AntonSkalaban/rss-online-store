// import data from "../model/data";
import createElement from "./helpers/createElemt";
import createMain from "./main/createMain";
import { IProduct } from "../model/dataType";

const createApp = (data: Array<IProduct>) => {
  const app = createElement('div', 'app');
  const main = createMain(data);

  app.appendChild(main)
  return app;
}

export default createApp;


 