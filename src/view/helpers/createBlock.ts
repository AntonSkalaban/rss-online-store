import createElement from "./createElemt";

const createBlock = (blockClassName: string) => {
  const block = createElement('div', 'page-block');
  const blockHeader = createElement('div', 'page-block__header');
  const blockMain = createElement('div', 'page-block__main');

  block.classList.add(blockClassName);

  block.appendChild(blockHeader);
  block.appendChild(blockMain);

  return [ block, blockHeader, blockMain ];
}

export default createBlock;