import createElement from "../../createElement";
import searchProductInput from "./mainInputs/searchProductInput";
import productsSection from "./productsBoard/productsBoard"

const createMain = () => {
    const main = createElement('main', 'main');
    const board = productsSection();
    const searchInpit = searchProductInput();

    main.appendChild(searchInpit);
    main.appendChild(board);
    
    return main;
}

export default createMain;