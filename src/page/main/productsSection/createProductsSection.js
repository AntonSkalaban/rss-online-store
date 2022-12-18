import createElement from "../../../createElement";
import createProductsHeader from "./productsHeader/createProductsHeader";
import createProductsMain from "./productsMain/productsMain";

const createProductsSection = () => {
    const products = createElement('section', 'products');
    const productsHeader = createProductsHeader();
    const productsMain = createProductsMain();

    products.appendChild(productsHeader);
    products.appendChild(productsMain);

    return products;
}

export default createProductsSection;