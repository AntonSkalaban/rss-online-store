import createElement from "../../../../createElement";
import searchProductsInput from "../productsHeader/productsInputs/searchProductsInput"
import sortProductsInput from "../productsHeader/productsInputs/sortProductsInput"
import createProductsTitle from "./createProductsTitle";
import css from "./mainHeader.css";
// import css from "./mainInputs/mainInputs.css"

const createProductsHeader = () => {
    const mainHeader = createElement('div', 'main__header');
    const sortInput = sortProductsInput();
    const mainTitle = createProductsTitle();
    const searchInpit = searchProductsInput();
    
    mainHeader.appendChild(sortInput);
    mainHeader.appendChild(mainTitle);
    mainHeader.appendChild(searchInpit);

    return mainHeader;
}

export default createProductsHeader;