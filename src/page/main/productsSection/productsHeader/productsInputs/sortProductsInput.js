import createElement from "../../../../../createElement";;
import createProduct from "../../product/createProduct"
import loadData from "../../../loadData";

const sortProductsInput =  () => {
    const sortInput = createElement('select', 'sort-input');
    sortInput.classList.add('main-input');

    const sotrByPticeASC = document.createElement('option', 'select-option');
    const sotrByPticeDESC = document.createElement('option', 'select-option');
    const sotrByRatingASC = document.createElement('option', 'select-option');
    const sotrByRatingDESC = document.createElement('option', 'select-option');
    const sotrByDiscountASC = document.createElement('option', 'select-option');
    const sotrByDiscountDESC = document.createElement('option', 'select-option');

    sotrByPticeASC.value = 'price ASC';
    sotrByPticeDESC.value = 'price DESC';
    sotrByRatingASC.value = 'rating ASC';
    sotrByRatingDESC.value = 'rating DESC';
    sotrByDiscountASC.value = 'discount ASC';
    sotrByDiscountDESC.value = 'discont DESC';

    sotrByPticeASC.text = 'sort by price ASC';
    sotrByPticeDESC.text = 'sort by price DESC';
    sotrByRatingASC.text = 'sort by rating ASC';
    sotrByRatingDESC.text = 'sort by rating DESC';
    sotrByDiscountASC.text = 'sort by discount ASC';
    sotrByDiscountDESC.text = 'sort by discont DESC';

    sortInput.add(sotrByPticeASC);
    sortInput.add(sotrByPticeDESC);

    const sortProducts = async (e) => {
        const board = document.querySelector('.products-board');
        board.innerHTML = '';

        const searchInput = document.querySelector('.search-product');
       
        let sortBy;
 
        if (e.target.value.includes('price')) {
            sortBy = 'price';
        }

        const data = await loadData(
            !searchInput.value
                ? 'https://dummyjson.com/products'
                : `https://dummyjson.com/products/search?q=${ searchInput.value }`
        );
        data.products
            .sort((a, b ) => {
                if (e.target.value.includes('ASC')) {
                    return a[sortBy] - b[sortBy];
                }
                return b[sortBy] - a[sortBy];
            })
            .forEach((el) => {
                const product = createProduct(el.title, el.price);
                board.appendChild(product);
            })

        const title = document.querySelector('.main__title');
        title.textContent = `Found: ${data.total}`;
    }  
          
    sortInput.addEventListener('change', sortProducts);
    
    return sortInput;
}

export default sortProductsInput;