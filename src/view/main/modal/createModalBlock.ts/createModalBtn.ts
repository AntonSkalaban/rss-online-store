import createButton from "../../../helpers/createButton"

const createModalBtn = () => {
  const btn = createButton('modal-btn', 'modal btn');

  btn.addEventListener('click', () => console.log('click'))
  return btn;
}

export default createModalBtn;