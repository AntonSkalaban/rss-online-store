import createElement from "../../../createElement";

const createProduct = (title) => {
    const product = createElement('div', 'product');
    const productTitle = createElement('p', 'product__title');
    const productImg = createElement('img', 'product__img');

    const productDescription = createElement('div', 'product__description');
    const productPrice = createElement('p', 'product__price');

    productTitle.textContent = title; 
    
    product.appendChild(productTitle);
    product.appendChild(productImg);
    product.appendChild(productDescription);
    productDescription.appendChild(productPrice);
    return product;
}

export default createProduct;