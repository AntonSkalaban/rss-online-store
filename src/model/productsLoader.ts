import createProductCard from "../view/main/startPage/productsSection/createProductCard";
import { IProduct } from "./dataType";

const renderProducts = (data: Array<IProduct>) => {
  const productsSectionMain = document.querySelector('.products-section__main');
  const mainTitle = document.querySelector('.products-section__title');

  if (!mainTitle || !productsSectionMain) return;
  mainTitle.textContent = `Found: ${ data.length }`
  productsSectionMain.innerHTML = '';

  data.forEach((el) => {
    const productCard = createProductCard(
      el.title, el.category, el.brand, el.price.toString(), el.discountPercentage.toString(), el.images[0]
    );

    productsSectionMain.appendChild(productCard);
  });
}

export default renderProducts;


//   const createCategoryBlock = () => {
//     const [categoryBlock, categoryMain ] = createBlockWitdthTitle('filter', 'filetr-title', 'category');
//     const list = createElement('ul', 'category__list');

//     data.products
//       .map(el => el.category)
//       .filter((el, index, arr) => arr.indexOf(el) === index)
//       .forEach((category) => {
//         const listItem = createElement('li', 'category__list-item');
//         const label = createElement('label', 'category__label');
//         const checkbox = createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.value = category;

//         const itemsCounter = createElement('p', 'category__items-counter');
//         const totalItems = createElement('span', 'categoty__total-items');
//         const avalibleItems =  createElement('span', 'categoty__avalible-items');

//         totalItems.textContent = `${data.products.filter((el) => category === el.category).length}`;
//         avalibleItems.textContent = `${newData.filter((el) => category === el.category).length}`;
//         itemsCounter.innerHTML = avalibleItems.textContent +'/' + totalItems.textContent;

//         list.appendChild(listItem);
//         listItem.appendChild(label);
//         label.appendChild(checkbox);
//         label.innerHTML += category;
//         listItem.appendChild(itemsCounter);
//       })

//     categoryMain.appendChild(list);
//     return categoryBlock;
//   }


