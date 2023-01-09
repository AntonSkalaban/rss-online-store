import { router } from "../../../../model/router";
import createButton from "../../../helpers/createButton"

const createModalBtn = () => {
  const btn = createButton('modal-btn', 'modal btn');

  const editHistory = (path: string) => {
    console.log(path)
    history.pushState('', '', path);
    router();
  }

  btn.addEventListener('click', () => editHistory('/cart'))
  return btn;
}

export default createModalBtn;