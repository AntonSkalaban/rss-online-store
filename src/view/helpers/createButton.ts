import createElement from "./createElemt";

const createButton = (btnClassName: string, btnTittle: string) => {
  const btn = createElement('button', 'page-btn');
  btn.classList.add(btnClassName)
  btn.textContent = btnTittle;

  return btn;
}

export default createButton;