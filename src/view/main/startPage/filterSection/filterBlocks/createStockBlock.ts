//import { renderFilteredByStock } from './../../../../../index';
import createElement from "../../../../helpers/createElemt";
import createBlockWitdthTitle from "../../../../helpers/createBlockWithTitle";
import { IProduct } from "../../../../../model/dataType";
//import "../filterBlocks/filterBlock.scss"
//import "./rangeBlockStyle.scss"
import renderPage from "../../../../..";


const createStockBlock = (data: Array<IProduct>) => {
  const stocks = data
    .map((el) => el.stock)
    .filter((el, index, arr) => index === arr.indexOf(el))
    .sort((a,b) => a- b);

  const [categoryBlock, categoryMain ] = createBlockWitdthTitle('filter-block', 'filter-title', 'Stock');

  const rangeSlider = createElement('div', 'range-slider');
  const rangeInput = createElement('div', 'range-input');
  const lowerSlider = <HTMLInputElement>createElement('input', 'lower-stock-slider');
  const upperSlider = <HTMLInputElement>createElement('input', 'upper-stock-slider');

  lowerSlider.type= 'range';
  lowerSlider.id = 'lower-stock';
  lowerSlider.min = String(stocks[0]);
  lowerSlider.max = String(stocks[stocks.length - 1]);

  upperSlider.type= 'range';
  upperSlider.id = 'upper-stock';
  upperSlider.min = String(stocks[0]);
  upperSlider.max = String(stocks[stocks.length - 1]);

  const pricesValues = createElement('div', 'range-values');
  const lowerStock = createElement('p', 'lower-stock-value');
  const upperStock = createElement('p', 'upper-stock-value');


  categoryBlock.appendChild(categoryMain);

  categoryMain.appendChild(rangeSlider);
  categoryMain.appendChild(rangeInput);
  rangeInput.appendChild(lowerSlider);
  rangeInput.appendChild(upperSlider);

  categoryMain.appendChild(pricesValues);
  pricesValues.appendChild(lowerStock);
  pricesValues.appendChild(upperStock);


  const getNewUrl = (e:Event) => {
    const target = <HTMLInputElement>e.target;
    const value = +target.value;

    const differenseNumbers = stocks.map((price) => Math.abs(price - value));
    const minDifferense = Math.min(...differenseNumbers);

    const newValue = stocks[differenseNumbers.indexOf(minDifferense)];
    target.value = String(newValue);

  
    // getNewUrl
    const url = new URL(window.location.href);
    let allParams = url.search.substring(1).split('&');

    const lowerStockSlider = document.querySelector<HTMLInputElement>('.lower-stock-slider');
    const upperStockSlider = document.querySelector<HTMLInputElement>('.upper-stock-slider');

    if (!lowerStockSlider || !upperStockSlider) return;
    const minStock = Math.min(+lowerStockSlider.value, +upperStockSlider.value);
    const maxStock = Math.max(+lowerStockSlider.value, +upperStockSlider.value);
  
    if (window.location.href.includes('stock')) {
      allParams = allParams.map((params) => {
        return params.includes('stock') 
          ? `stock=${ minStock }%E2%86%95${ maxStock }`
          : params;
      });

    } else {
      allParams.push(`stock=${ minStock }%E2%86%95${ maxStock }`);
      if (!allParams[0]) allParams.shift();
    }

    renderPage(allParams);
  }


  lowerSlider.addEventListener('input', getNewUrl);
  upperSlider.addEventListener('input', getNewUrl);
 

  return categoryBlock;
};

export default createStockBlock;