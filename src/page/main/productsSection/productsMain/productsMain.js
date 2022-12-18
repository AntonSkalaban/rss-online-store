import createElement from "../../../../createElement";
import createProduct from "../product/createProduct";
import loadData from "../../loadData";

const createProductsMain= () => {
    const  board = createElement('div', 'products-board');

    const loadProducts = async () => {
        const data = await loadData('https://dummyjson.com/products');
        data.products.forEach((el) => {
            const product = createProduct(el.title, el.price);
            board.appendChild(product);
        })
    }

    loadProducts()
  
    return board;
}

export default createProductsMain;