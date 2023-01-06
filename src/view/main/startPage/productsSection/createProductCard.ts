import createElement from "../../../helpers/createElemt";
import createBlockWitdthTitle from "../../../helpers/createBlockWithTitle";
import createCardBtns from "./createCardBtns"; 

const createProductCard = (
  id: number, title: string, category: string, brand: string, price: string,
  discount: string, rating: string, stock: string, img: string
) => {
  const grids  = document.querySelectorAll<HTMLElement>('.grid-size');
  const isBig = grids[0].classList.contains('active');

  const [productCard, productMain] = createBlockWitdthTitle('product-card', 'product-title', title);

  const productImgContainer = createElement('div', 'product-img-container');

  const productBtns = createCardBtns(id);
 
  productCard.style.width = isBig ? '23%' : '15%';

  productImgContainer.style.width = '100%';
  productImgContainer.style.height = isBig ? '250px' : '70px';
  productImgContainer.style.backgroundPosition = 'center';
  productImgContainer.style.backgroundImage = `url(${img})`;
  productImgContainer.style.backgroundSize = 'cover';
  productImgContainer.style.backgroundPosition = 'center';


  productMain.appendChild(productImgContainer);

  if (isBig) {
    const productAbout = createElement('div', 'product-about');
    const productCategory = createElement('p', 'product-about-item');
    const productBrand = createElement('p', 'product-about-item');
    const productPrice = createElement('p', 'product-about-item');
    const productDiscount = createElement('p', 'product-about-item');
    const productRating = createElement('p', 'product-about-item');
    const productStock = createElement('p', 'product-about-item');
    
    productCategory.textContent = `Category: ${category}`;
    productBrand.textContent = `Brand: ${brand}`;
    productPrice.textContent = `Price: $${price}.00`;
    productDiscount.textContent = `Discound: ${discount}`;
    productRating.textContent = `Rating: ${rating}`;
    productStock.textContent = `Stock: ${stock}`;

    productMain.appendChild(productAbout);
    productAbout.appendChild(productCategory);
    productAbout.appendChild(productBrand);
    productAbout.appendChild(productPrice);
    productAbout.appendChild(productDiscount);
    productAbout.appendChild(productRating);
    productAbout.appendChild(productStock);
  }
  productMain.appendChild(productBtns);

  return productCard;
}

export default createProductCard;