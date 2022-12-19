import data from "../../../../model/data";

const foo = () => {
  /* data */
  let newData = [...data.products];
  /* Helpers*/
  const createElement = (tag, className) =>  {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    return el;
  }

  const createBlock = (blockClassName) => {
    const block = createElement('div', 'page-block');
    const blockHeader = createElement('div', 'page-block__header');
    const blockMain = createElement('div', 'page-block__main');

    block.classList.add(blockClassName);

    block.appendChild(blockHeader);
    block.appendChild(blockMain);

    return [ block, blockHeader, blockMain ];
  }

  const createBlockWitdthTitle = (blockClassName, blockTitleClassName, BlockTitle) => {
    const block = createElement('div', 'page-block');
    const blockHeader = createElement('div', 'page-block__header');
    const blockMain = createElement('div', 'page-block__main');
    const blockTitle = createElement('h4', 'page-block__title');

    block.classList.add(blockClassName);
    blockTitle.classList.add(blockTitleClassName);
    blockTitle.textContent = BlockTitle;

    block.appendChild(blockHeader);
    block.appendChild(blockMain);
    blockHeader.appendChild(blockTitle);

    return [ block, blockMain ];
  }

  const createProductCard = (title, category, brand, price, discount, img) => {
    const [productCard, productMain] = createBlockWitdthTitle('product-card', 'product-title', title);

    const productAbout = createElement('div', 'product-about'); 
    const productCategory = createElement('div', 'product-about-item');
    const productBrand = createElement('div', 'product-about-item');
    const productPrice = createElement('div', 'product-about-item');
    const productDiscount = createElement('div', 'product-about-item');

    productCategory.textContent = `Category: ${category}`;
    productBrand.textContent = `Brand: ${brand}`;
    productPrice.textContent = `Price: ${price}`;
    productDiscount.textContent = `Discound: ${discount}`;
    productCard.style.backgroundImage = `url(${img})`;

    productAbout.appendChild(productCategory);
    productAbout.appendChild(productBrand);
    productAbout.appendChild(productPrice);
    productAbout.appendChild(productDiscount);
    productMain.appendChild(productAbout);

    return productCard;
  }

  /* MVC??? */
  const renderProducts = (data, parent) => {
    parent.innerHTML = '';
    data.forEach((el) => {
      const productCard = createProductCard(
        el.title, el.category, el.brand, el.price, el.discountPercentage, el.images[0]
      );
      parent.appendChild(productCard);
    });

    
  }

  const updateMainTitle  = (data) => {
    const mainTitle = document.querySelector('.main__title');
    mainTitle.textContent = `Found: ${ data.length }`
  }

  const renderSortProducts = (e) => {
    const parentBlock = document.querySelector('.main__main');
    const sortOption = e.target.value;
    let sortParam;

    if (sortOption.includes('price')) {
      sortParam = 'price';
    } else if (sortOption.includes('rating')) {
      sortParam = 'rating';
    } else {
      sortParam = 'discount';
    }

    if (sortOption.includes('ASC')) {
      newData = newData.sort((a, b) => a[sortParam] - b[sortParam]);
    } else {
      newData = newData.sort((a, b) => b[sortParam] - a[sortParam]);
    }
    renderProducts(newData, parentBlock);
    updateMainTitle(newData);
  }

  const renderSearchProducts = (e) => {
    const parentBlock = document.querySelector('.main__main');
    const products = data.products.filter((el) => {
      const searchVal = e.target.value.toUpperCase();
      if (
        el.title.toUpperCase().includes(searchVal) || el.description.toUpperCase().includes(searchVal)
        || el.price.toString().includes(searchVal) || el.brand.toUpperCase().includes(searchVal)
        || el.category.toUpperCase().includes(searchVal)
      ) {
        return el;
      }
    })
    newData = [...products];

    renderProducts(newData, parentBlock);
    updateMainTitle(newData);
  }

  /* view */
  const createSearchInput = () => {
    const searchInput = createElement('input', 'search-input');

    const searchProducts = (e) => renderSearchProducts(e);

    searchInput.addEventListener('keyup', searchProducts);
    return searchInput;
  }

  const createSortInput =  () => {
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
    sortInput.add(sotrByRatingASC);
    sortInput.add(sotrByRatingDESC); 

    const sortProducts = (e) => renderSortProducts(e);

    sortInput.addEventListener('change', sortProducts);

    return sortInput;
  }

  const createMainTitle = () => {
    const mainTitle = createElement('h2', 'main__title');
    mainTitle.textContent = `Found: ${ data.products.length }`
    return mainTitle;
  }

  const createCategoryBlock = () => {
    const [categoryBlock, categoryMain ] = createBlockWitdthTitle('filter', 'filetr-title', 'category');
    const list = createElement('ul', 'category__list');

     
    data.products
      .map(el => el.category)
      .filter((el, index, arr) => arr.indexOf(el) === index)
      .forEach((category) => {
        const listItem = createElement('li', 'category__list-item');
        const label = createElement('label', 'category__label');
        const checkbox = createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = category;

        const itemsCounter = createElement('p', 'category__items-counter')
        const totalItems = data.products.filter((el) => category === el.category);
        itemsCounter.textContent = `(0/${totalItems.length})`;

        list.appendChild(listItem);
        listItem.appendChild(label);
        label.appendChild(checkbox);
        label.innerHTML += category;
        listItem.appendChild(itemsCounter);
      })

    categoryMain.appendChild(list);
    return categoryBlock;
  }

  const createMain = () => {
    const [ main,  mainHeader, mainMain ] = createBlock('draft-main');
    mainMain.classList.add('main__main');

    const sortInput = createSortInput();
    const mainTitle = createMainTitle();
    const searchInput = createSearchInput();
    //draft
    const cat = createCategoryBlock();
    mainHeader.appendChild(cat);

    mainHeader.appendChild(sortInput);
    mainHeader.appendChild(mainTitle);
    mainHeader.appendChild(searchInput);

    renderProducts(data.products, mainMain);

    return main;
  }

        
  const main = createMain();
 
  return main;
}

export default foo;


