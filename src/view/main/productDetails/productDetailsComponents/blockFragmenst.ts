import { IProduct } from './../../../../model/dataType';
import createElement from "../../../helpers/createElemt"
import createBlockWitdthTitle from '../../../helpers/createBlockWithTitle';
import createButton from '../../../helpers/createButton';


export const createProductImgsBlock = (product: IProduct) => {
  const productImgsBlock = createElement('div', 'product-details__images');
  const smallImgsBlock  = createElement('div', 'product-details__small-images-container');
  const bigImgBlock  = createElement('div', 'product-details__big-image-container');

  const images = product.images;
  images.forEach((img, index) => {
    if (index === 0) {
      const bigImg = <HTMLImageElement>createElement('img', 'big-image');
      bigImg.src = img;
      bigImgBlock.appendChild(bigImg)
    }
    const smallImg =<HTMLImageElement>createElement('img', 'small-image');
    smallImg.src = img;
    smallImgsBlock.appendChild(smallImg);
    smallImg.addEventListener('click', (e) => {
      const bigImg = document.querySelector<HTMLImageElement>('.big-image');
      const smallImg = <HTMLImageElement>e.target;
      if (!bigImg || !smallImg) return;
      bigImg.src = smallImg.src;
    })
  })


  productImgsBlock.appendChild(smallImgsBlock);
  productImgsBlock.appendChild(bigImgBlock)

  return productImgsBlock;
}

export const createProductDataBlock = (product: IProduct) => {
  const dataBlock = createElement('div', 'product-details__data');
  const [descriptionBlock, descriptionMain]  = createBlockWitdthTitle(
    'description-block', 'description-block-title','Desctiption'
  );
  const [discountBlock, discountMain]  = createBlockWitdthTitle(
    'description-block', 'description-block-title' ,'Discount'
  );
  const [ratingBlock, ratingMain]  = createBlockWitdthTitle('description-block', 'description-block-title' ,'Rating');
  const [stockBlock, stockMain]  = createBlockWitdthTitle('description-block', 'description-block-title' ,'Stock');
  const [brandBlock, brandMain]  = createBlockWitdthTitle('description-block', 'description-block-title' ,'Brand');
  const [categoryBlock, categoryMain]  = createBlockWitdthTitle(
    'description-block', 'description-block-title' ,'Category'
  );

  descriptionMain.textContent = product.description;
  discountMain.textContent = String(product.discountPercentage);
  ratingMain.textContent = String(product.rating);
  stockMain.textContent = String(product.stock);
  brandMain.textContent = product.brand;
  categoryMain.textContent = product.category;

  dataBlock.appendChild(descriptionBlock);
  dataBlock.appendChild(discountBlock);
  dataBlock.appendChild(ratingBlock);
  dataBlock.appendChild(stockBlock);
  dataBlock.appendChild(brandBlock);
  dataBlock.appendChild(categoryBlock);
  return dataBlock;
}

export const createCartBlock = (product: IProduct) => {
  const cartBlock = createElement('div', 'product-details__cart');

  const price = createElement('p', 'product-details__price');
  const cartBtn = createButton('product-details-btn', 'Add to cart');
  const byeBtn = createButton('product-details-btn', 'Buy now');
  cartBtn.classList.add('product-details-cart-btn');
  byeBtn.classList.add('product-details-bue-btn');
  price.textContent = `$${product.price}.00`;

  cartBlock.appendChild(price);
  cartBlock.appendChild(cartBtn);
  cartBlock.appendChild(byeBtn);

  return cartBlock;
}