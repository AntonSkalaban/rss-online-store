import createElement from "../../../helpers/createElemt";
import createBlockWitdthTitle from "../../../helpers/createBlockWithTitle";

import './productCard.scss';

const createProductCard = (
  id: number, title: string, category: string, brand: string, price: string,
  discount: string, rating: string, stock: string, img: string
) => {

  const [productCard, productMain] = createBlockWitdthTitle('product-card', 'product-title', title);

  productCard.id = String(id);

  const productImg = createElement('div', 'product-img');
  productImg.style.backgroundImage = `url(${img})`;

  const productAbout = createElement('div', 'product-about');
  const productCategory = createElement('p', 'product-about-item');
  const productBrand = createElement('p', 'product-about-item');
  const productPrice = createElement('p', 'product-about-item');
  const productDiscount = createElement('p', 'product-about-item');
  const productRating = createElement('p', 'product-about-item');
  const productStock = createElement('p', 'product-about-item');

  productCategory.textContent = `Category: ${category}`;
  productBrand.textContent = `Brand: ${brand}`;
  productPrice.textContent = `Price: ${price}`;
  productDiscount.textContent = `Discound: ${discount}`;
  productRating.textContent = `Rating: ${rating}`;
  productStock.textContent = `Stock: ${stock}`;


  productMain.appendChild(productImg);

  productMain.appendChild(productAbout);
  productAbout.appendChild(productCategory);
  productAbout.appendChild(productBrand);
  productAbout.appendChild(productPrice);
  productAbout.appendChild(productDiscount);
  productAbout.appendChild(productRating);
  productAbout.appendChild(productStock);

  return productCard;
}

export default createProductCard;