import { router } from "../../../../model/router";
import createButton from "../../../helpers/createButton"

const createModalBtn = () => {
  const btn = createButton('modal-btn', 'Close');

    const closeModal = () => {
      console.log('asfasf')
      const editHistory = (path:string) => {  
        history.pushState('', '', path);
        router();
      }

    const errors = Array.from(document.querySelectorAll<HTMLElement>('.error'));
    console.log(errors)

    if (errors.every((error) => getComputedStyle(error).display == 'none')) {
      setTimeout(() => editHistory('/cart'), 3000)
    }
  }



  btn.addEventListener('click', closeModal)
  return btn;
}

export default createModalBtn;