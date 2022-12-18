import createElement from "../../createElement";
import createProductsSection from "./productsSection/createProductsSection";
import createFilterSection from "../../page/main/filterSection/createFilterSection"

const createMain = () => {
    const main = createElement('main', 'main');
    const productsSection = createProductsSection();
    const filterSection = createFilterSection();
    
    main.appendChild(filterSection);
    main.appendChild(productsSection);

    return main;
}

export default createMain;