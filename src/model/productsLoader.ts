import createProductCard from "../view/main/startPage/productsSection/createProductCard";
import { IProduct } from "./dataType";

const renderFilterdItems = (data: Array<IProduct>, category: keyof IProduct, categoryClassName: string) => {
  const avalibleItems = document.querySelectorAll<HTMLElement>(categoryClassName);
  avalibleItems.forEach((el) => {

    const itemsCounter = data.filter((product) => {
      return el.dataset.id?.toUpperCase() === String(product[category]).toUpperCase()
    }).length

    el.textContent = `${ itemsCounter }`;
  })
}

const renderSectionTitle = (data: Array<IProduct>) => {
  const sectionTitle = document.querySelector('.products-section__title');

  if (sectionTitle) sectionTitle.textContent = `Found: ${ data.length }`;
}

const renderProductsCards = (data: Array<IProduct>) => {
  const productsSectionMain = document.querySelector('.products-section__main');

  if (!productsSectionMain) return;
  productsSectionMain.innerHTML = '';

  data.forEach((el) => {
    const productCard = createProductCard(
      el. id, el.title, el.category, el.brand, el.price.toString(), el.discountPercentage.toString(),
      el.rating.toString(), el.stock.toString(), el.images[0],
    );

    productsSectionMain.appendChild(productCard);
  });
}

const renderProducts = (data: Array<IProduct>) => {
  renderProductsCards(data);
  renderSectionTitle(data);
  renderFilterdItems(data, 'category','.categoty__avalible-items');
  renderFilterdItems(data, 'brand','.brand__avalible-items');
}


export default renderProducts;


