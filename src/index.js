import createHeader from "./page/header/header";
import createFooter from "./page/footer/footer";
import createMain from "./page/main/main";

const header = createHeader();
const footer = createFooter();

const main = createMain();

const root = document.querySelector('.root');
root.appendChild(header);
root.appendChild(main);
root.appendChild(footer);

  



