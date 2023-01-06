//import { renderFilteredByPrice } from './../../../../../index';
import createElement from "../../../../helpers/createElemt";
import createBlockWitdthTitle from "../../../../helpers/createBlockWithTitle";
import { IProduct } from "../../../../../model/dataType";
import "../filterBlocks/filterBlock.css"
import "./rangeBlockStyle.css"
import renderPage from "../../../../..";

const createPriceBlock = (data: Array<IProduct>) => {
  const prices = data
    .map((el) => el.price)
    .filter((el, index, arr) => index === arr.indexOf(el))
    .sort((a,b) => a- b);

  const [categoryBlock, categoryMain ] = createBlockWitdthTitle('filter-block', 'filter-title', 'Price');

  const rangeSlider = createElement('div', 'range-slider');
  const rangeInput = createElement('div', 'range-input');
  const lowerSlider = <HTMLInputElement>createElement('input', 'lower-price-slider');
  const upperSlider = <HTMLInputElement>createElement('input', 'upper-price-slider');

  lowerSlider.type= 'range';
  lowerSlider.id = 'lower-price';
  lowerSlider.min = String(prices[0]); 
  lowerSlider.max = String(prices[prices.length - 1]);
 // lowerSlider.value = String(prices[0]); 

  upperSlider.type= 'range';
  upperSlider.id = 'upper-price';
  upperSlider.min = String(prices[0]);
  upperSlider.max = String(prices[prices.length - 1]);
  //upperSlider.value =  String(prices[prices.length - 1]);


  const pricesValues = createElement('div', 'range-values');
  const lowerPrice = createElement('p', 'lower-price-value');
  const upperPrice = createElement('p', 'upper-price-value');

  // lowerPrice.textContent = `${ prices[0] }$`
  // upperPrice.textContent = `${ prices[prices.length - 1] }$`

  categoryBlock.appendChild(categoryMain);
 
  categoryMain.appendChild(rangeSlider);
  categoryMain.appendChild(rangeInput);
  rangeInput.appendChild(lowerSlider);
  rangeInput.appendChild(upperSlider);

  categoryMain.appendChild(pricesValues);
  pricesValues.appendChild(lowerPrice);
  pricesValues.appendChild(upperPrice);

  const getNewUrl = (e:Event) => {
    const target = <HTMLInputElement>e.target;
    const value = target.value;

    const differenseNumbers = prices.map((price) => Math.abs(price - +value));
    const minDifferense = Math.min(...differenseNumbers);

    const newValue = String(prices[differenseNumbers.indexOf(minDifferense)]);
    target.value = newValue;
    
    //NewUrl
    const url = new URL(window.location.href);
    let allParams = url.search.substring(1).split('&');

    const lowerPriceSlider = document.querySelector<HTMLInputElement>('.lower-price-slider');
    const upperPriceSlider = document.querySelector<HTMLInputElement>('.upper-price-slider');

    if (!lowerPriceSlider || !upperPriceSlider) return;

    const minPrice = Math.min(+lowerPriceSlider.value, +upperPriceSlider.value);
    const maxPrice = Math.max(+lowerPriceSlider.value, +upperPriceSlider.value);

    if (window.location.href.includes('price')) {
      allParams = allParams.map((params) => {
        return params.includes('price') 
          ? `price=${ minPrice }%E2%86%95${ maxPrice }`
          : params;
      });

    } else {
      allParams.push(`price=${ minPrice }%E2%86%95${ maxPrice }`);
      if (!allParams[0]) allParams.shift();
    }

    renderPage(allParams);
  };

  lowerSlider.addEventListener('input', getNewUrl);
  upperSlider.addEventListener('input', getNewUrl);
 
  return categoryBlock;
};

export default createPriceBlock;