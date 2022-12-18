import createElement from "../../../../createElement";
import createBlock from "./createBlock";
import loadData from "../../loadData";

const createCategoryBlock = () => {
    const block = createBlock('category');
    const list = createElement('ul', 'category__list');
            
    const loadProducts = async () => {
       const data = await loadData('https://dummyjson.com/products/categories');
       data.forEach( async (el) => {

            const listItem = createElement('li', 'category__list-item');
            const label = createElement('label', 'category__label');
            const checkbox = createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = el;

            const itemsCounter = createElement('p', 'category__items-counter')
            const totalItems = await loadData(`https://dummyjson.com/products/category/${ el }`);
            itemsCounter.textContent = `(0/${totalItems.total})`;

            list.appendChild(listItem);
            listItem.appendChild(label);
            label.appendChild(checkbox);
            label.innerHTML += el;
            listItem.appendChild(itemsCounter);
            block.appendChild(list);


            // label.addEventListener('click', findCategory)
        })


    }
    loadProducts();

    return block;
}

export default createCategoryBlock;