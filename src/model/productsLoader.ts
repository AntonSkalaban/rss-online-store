import createProductCard from "../view/main/startPage/productsSection/createProductCard";
import { IProduct } from "./dataType";

const renderSectionTitle = (data: Array<IProduct>) => {
  const sectionTitle = document.querySelector('.products-section__title');
  if (sectionTitle) sectionTitle.textContent = `Found: ${ data.length }`;
}

const renderFilterdItems = (
  data: Array<IProduct>, key: keyof IProduct, keyClassName: string
) => {
  const avalibleItems = document.querySelectorAll<HTMLElement>(keyClassName);
  avalibleItems.forEach((el) => {

    const itemsCounter = data.filter((product) => {
      return el.dataset.id?.toUpperCase() === String(product[key]).toUpperCase()
    }).length;

    el.textContent = `${ itemsCounter }`;
  })
}

const renderFilteredSlider = (
  data: Array<IProduct>, key: keyof IProduct, lowSlider: string, upSlider: string, lowVal: string, upVal: string
) => {
  const lowerSlider = document.querySelector<HTMLInputElement>(lowSlider);
  const upperSlider = document.querySelector<HTMLInputElement>(upSlider);
  const lowerVal = document.querySelector<HTMLInputElement>(lowVal);
  const upperVal = document.querySelector<HTMLInputElement>(upVal);
  if (!lowerSlider || !upperSlider || !lowerVal || !upperVal) return;

  const arr = data.map((product) => +product[key])
  const maxVal = Math.max(...arr);
  const minVal = Math.min(...arr);

  if (isFinite(maxVal) && isFinite(minVal)) {
    lowerSlider.value = String(minVal);
    upperSlider.value = String(maxVal);
    lowerVal.textContent = `${ minVal }${ key === 'price' ? '$' : ''}`;
    upperVal.textContent = `${ maxVal }${ key === 'price' ? '$' : ''}`;
  }
}

const showActiveSize = (params: Array<string>) => {
  const grids  = Array.from(document.querySelectorAll<HTMLElement>('.grid-size'));
  const param = params.find((param) => param.includes('grid'));

  if (param) {
    grids.forEach((grid) => {
      const size = grid.dataset.size;
      if (size && param.includes(size)) {
        grid.classList.add('active');
      } else {
        grid.classList.remove('active');
      }
    })

  } else {
    if (!grids.some((grid) => grid.classList.contains ('active'))) {
      grids[0].classList.add('active');
    }
  }
}

const renderProductsCards = (data: Array<IProduct>) => {
  const productsSectionMain = document.querySelector('.products-section__main');

  if (!productsSectionMain) return;
  productsSectionMain.innerHTML = '';

  if (data.length) {
    data.forEach((el) => {
      const productCard = createProductCard(
        el. id, el.title, el.category, el.brand, el.price.toString(), el.discountPercentage.toString(),
        el.rating.toString(), el.stock.toString(), el.images[0],
      );
      productsSectionMain.appendChild(productCard);
    });

  } else {
    productsSectionMain.innerHTML = '<h2>No products found :(</h2>';
  }
}

const renderProducts = (data: Array<IProduct>, params: Array<string>) => {
  renderSectionTitle(data);
  renderFilterdItems(data, 'category', '.category__avalible-items');
  renderFilterdItems(data, 'brand', '.brand__avalible-items');
  renderFilteredSlider(
    data, 'price', '.lower-price-slider', '.upper-price-slider', '.lower-price-value', '.upper-price-value'
  );
  renderFilteredSlider(
    data, 'stock', '.lower-stock-slider', '.upper-stock-slider', '.lower-stock-value', '.upper-stock-value'
  );
  showActiveSize(params);
  renderProductsCards(data);
}


export default renderProducts;


