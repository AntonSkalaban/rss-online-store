import createElement from "../../createElement";

const createFooter = () => {
    const footer = createElement('header', 'footer');
    const title = createElement('h2', 'footer__title');
    title.textContent = 'Footer title';
    footer.appendChild(title)
    return footer;
}

export default createFooter;