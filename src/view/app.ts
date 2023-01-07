import createElement from "./helpers/createElemt";
import createHeader from "./header/craeteHeader";
import createMain from "./main/createMain";
import './app.scss'

const createApp = () => {
  const app = createElement('div', 'app');
  const main = createMain();
  const header = createHeader();

  app.appendChild(header);
  app.appendChild(main)
  return app;
}

export default createApp;
