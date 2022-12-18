import createElement from "../../../createElement";
import createProduct from "../product/createProduct";

const searchProductInput =  () => {
    const searchInput = createElement('input', 'search-product');
    searchInput.classList.add('main-input');
    
    const searchProduct = async () => {
        const board = document.querySelector('.products-board');
        board.innerHTML = '';
        return (
            await fetch(`https://dummyjson.com/products/search?q=${ searchInput.value }`)
            .then(res => res.json())
            .then(res => res.products.forEach(el => {
                const product = createProduct(el.title);
                board.appendChild(product)}
                )
            )
        )
    }

     searchInput.addEventListener('keyup', searchProduct);

    return searchInput;
}

export default searchProductInput;