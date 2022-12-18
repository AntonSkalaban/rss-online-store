import createElement from "../../../createElement";
import createProduct from "../product/createProduct";

const productsBoard = () => {
    const  board = createElement('div', 'products-board');

    const loadProducts = async () => {
        return (
            await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                res.products.forEach(el => {
                    const product = createProduct(el.title);
                    board.appendChild(product)
                })
            })
        )
    }

    loadProducts()
  
    return board;
}

export default productsBoard;