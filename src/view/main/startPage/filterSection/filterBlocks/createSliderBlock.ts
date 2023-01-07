import createElement from "../../../../helpers/createElemt";
import createBlockWitdthTitle from "../../../../helpers/createBlockWithTitle";
import { IProduct } from "../../../../../model/dataType";
//import "../filterBlocks/filterBlock.scss"
//import "./rangeBlockStyle.scss"
import { getSliderUrl } from "../../../../../controller/startPage/changeUrl";

const createSliderBlock = (data: Array<IProduct>, key: keyof IProduct) => {
  const sliderHandler = (e:Event) => {
    const target = <HTMLInputElement>e.target;
    const value = target.value;

    const differenseNumbers = rangeValues.map((rangeVal) => Math.abs(+rangeVal - +value));
    const minDifferense = Math.min(...differenseNumbers);

    const newValue = String(rangeValues[differenseNumbers.indexOf(minDifferense)]);
    target.value = newValue;

    getSliderUrl(key);
  };

  const rangeValues = data
    .map((el) => el[key])
    .filter((el, index, arr) => index === arr.indexOf(el))
    .sort((a,b) => +a - +b);
console.log(rangeValues)
  const [categoryBlock, categoryMain ] = createBlockWitdthTitle(
    'filter-block', 'filter-title', `${ key.replace(key[0], key[0].toUpperCase()) }`
  );

  const rangeSlider = createElement('div', 'range-slider');
  const rangeInput = createElement('div', 'range-input');
  const lowerSlider = <HTMLInputElement>createElement('input', `lower-${ key }-slider`);
  const upperSlider = <HTMLInputElement>createElement('input', `upper-${ key }-slider`);

  lowerSlider.type= 'range';
  lowerSlider.id = `lower-${ key }`;
  lowerSlider.min = String(rangeValues[0]);
  lowerSlider.max = String(rangeValues[rangeValues.length - 1]);

  upperSlider.type= 'range';
  upperSlider.id = `upper-${ key }`;
  upperSlider.min = String(rangeValues[0]);
  upperSlider.max = String(rangeValues[rangeValues.length - 1]);

  const slidersVal = createElement('div', 'range-values');
  const lowerVal = createElement('p', `lower-${ key }-value`);
  const upperVal = createElement('p', `upper-${ key }-value`);

  categoryBlock.appendChild(categoryMain);

  categoryMain.appendChild(rangeSlider);
  categoryMain.appendChild(rangeInput);
  rangeInput.appendChild(lowerSlider);
  rangeInput.appendChild(upperSlider);

  categoryMain.appendChild(slidersVal);
  slidersVal.appendChild(lowerVal);
  slidersVal.appendChild(upperVal);

  lowerSlider.addEventListener('input', sliderHandler);
  upperSlider.addEventListener('input', sliderHandler);
 
  return categoryBlock;
};

export default createSliderBlock;