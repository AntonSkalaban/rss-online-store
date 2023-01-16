import createElement from "../../helpers/createElemt";
//import './errorPage.scss'

const createErrortPage = (): HTMLElement => {
  const errorPage = createElement('div', 'error-page');
  errorPage.innerText = 'PAGE NOT FOUND (404)'

  return errorPage;
}

export default createErrortPage;