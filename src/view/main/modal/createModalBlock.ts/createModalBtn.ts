import { router } from "../../../../model/router";
import createButton from "../../../helpers/createButton"

const createModalBtn = () => {
  const btn = createButton('modal-btn', 'Buy');

  const closeModal = () => {
     
    const editHistory = (path:string) => {  
      history.pushState('', '', path);
      router();
    }

    const errors = Array.from(document.querySelectorAll<HTMLElement>('.error'));

    if (errors.every((error) => getComputedStyle(error).display == 'none')) {
      setTimeout(() => editHistory('/'), 3000)
      const modal = document.querySelector('.modal');
      if (modal) modal.innerHTML ='Order is processed';
    }
  }



  btn.addEventListener('click', closeModal)
  return btn;
}

export default createModalBtn;