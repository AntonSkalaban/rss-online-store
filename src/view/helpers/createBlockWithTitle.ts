import createElement from "./createElemt";
import createBlock from "./createBlock";

const createBlockWitdthTitle = (blockClassName: string, blockTitleClassName: string, title: string) => {
  const [ block, blockHeader, blockMain ] = createBlock(blockClassName);
  const blockTitle = createElement('h4', 'page-block__title');

  blockTitle.classList.add(blockTitleClassName);
  blockTitle.textContent = title;
  blockHeader.appendChild(blockTitle);

  return [ block, blockMain ];
}

export default createBlockWitdthTitle;