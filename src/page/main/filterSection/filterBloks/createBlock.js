import createElement from "../../../../createElement";

const createBlock = (title) => {
    const block  = createElement('div', 'filter-block');
    const blockTitle = createElement('h4', 'filter-block__title');
    blockTitle.textContent = title;

    block.appendChild(blockTitle);
    return block;
}

export default createBlock;
