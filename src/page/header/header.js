import createElement from "../../createElement";

const createHeader = () => {
    const header = createElement('header', 'header');
    const title = createElement('h1', 'header__title');
    title.textContent = 'Header title';
    header.appendChild(title)
    return header;
}

export default createHeader;