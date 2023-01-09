import createElement from "../../../helpers/createElemt";
import createButton from "../../../helpers/createButton";
import { router } from "../../../../model/router";
import { cartController } from "../../../../controller/cartController";

import './cardBtns.scss';

const createCardBtns = (id: number, title: string) => {
  const cartBtnText = cartController.isProductInCart(title)? 'Drop from cart' : 'Add to cart';

  const productBtns = createElement('div', 'product-buttons');
  const cartBtn = createButton('cart-btn', cartBtnText);
  const detailsBtn = createButton('details-btn', 'Details');

  cartBtn.dataset.id = String(id);
  detailsBtn.dataset.id = String(id);
  detailsBtn.dataset.href = '/about';

  const editHistory = (e: Event) => {
    const target = <HTMLElement>e.target
    history.pushState('', '', target.dataset.href + '/' + target.dataset.id);
    router();
  }

  cartBtn.addEventListener('click', () => cartController.handleAddDropToCart(cartBtn, id));
  detailsBtn.addEventListener('click', (e) => editHistory(e));

  productBtns.appendChild(cartBtn);
  productBtns.appendChild(detailsBtn);
  return productBtns;
}

export default createCardBtns;