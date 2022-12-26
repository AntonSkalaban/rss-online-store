import createElement from "../../../helpers/createElemt";
import createButton from "../../../helpers/createButton";
import { router } from "../../../../model/router";

const createCardBtns = (id: number) => {
  const productBtns = createElement('div', 'product-buttons');
  const cartBtn = createButton('cart-btn', 'Add to cart');
  const detailsBtn = createButton('details-btn', 'Details');

  cartBtn.dataset.id = String(id);
  detailsBtn.dataset.id = String(id);
  detailsBtn.dataset.href = '/about';

  const editHistory = (e: Event) => {
    const target = <HTMLElement>e.target
    history.pushState('', '', target.dataset.href + '/' + target.dataset.id);
    router();
  }

  cartBtn.addEventListener('click', (e: Event) => console.log(e.target))
  detailsBtn.addEventListener('click', (e) => editHistory(e))

  productBtns.appendChild(cartBtn);
  productBtns.appendChild(detailsBtn);
  return productBtns;
}

export default createCardBtns;