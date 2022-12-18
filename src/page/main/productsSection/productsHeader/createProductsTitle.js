import createElement from "../../../../createElement";

const createMainTitle = () => {
    const mainTitle = createElement('h3', 'main__title');
    mainTitle.textContent = 'Found: 0'
    return mainTitle;
}

export default createMainTitle;