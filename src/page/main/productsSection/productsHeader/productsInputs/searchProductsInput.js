import createElement from "../../../../../createElement";
import createProduct from "../../../product/createProduct";
import loadData from "../../../loadData";

const searchProductsInput =  () => {
    const searchInput = createElement('input', 'search-product');
    searchInput.classList.add('main-input');
    searchInput.setAttribute('type', 'text');
    
    const searchProduct = async () => {
        const board = document.querySelector('.products-board');
        board.innerHTML = '';

        const sortInput = document.querySelector('.sort-input');
        
        let sortBy;

        if (sortInput.value.includes('price')) {
            sortBy = 'price';
        }

        const data = await loadData(`https://dummyjson.com/products/search?q=${ searchInput.value }`);
        data.products
            .sort((a, b) => {
                if (sortInput.value.includes('ASC')) {
                    return a[sortBy] - b[sortBy];
                }
                return b[sortBy] - a[sortBy];
            })
            .forEach((el) => {
                const product = createProduct(el.title, el.price);
                board.appendChild(product);
            })
            
        const title = document.querySelector('.main__title');
        title.textContent = `Found: ${ data.total }`;
    }

    searchInput.addEventListener('keyup', searchProduct);

    return searchInput;
}

export default searchProductsInput;