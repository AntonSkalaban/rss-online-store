// import data from "../model/data";
import createElement from "./helpers/createElemt";
import createMain from "./main/createMain";

const createApp = () => {
  const app = createElement('div', 'app');
  const main = createMain();

  app.appendChild(main)
  return app;
}

export default createApp;


 