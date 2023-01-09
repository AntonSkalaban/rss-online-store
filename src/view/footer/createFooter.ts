import createElement from '../helpers/createElemt';

import './footer.scss';

const createFooter = (): HTMLElement => {
  const footer = createElement('footer', 'footer');
  footer.innerText = '2023';

  return footer;
}

export default createFooter;