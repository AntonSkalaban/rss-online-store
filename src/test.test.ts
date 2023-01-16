import {describe, expect, test} from '@jest/globals';
import { sortData, searchData, filrerData, filrerSlider } from "./model/changeData";
import data from './model/data';
import createBlock from './view/helpers/createBlock';
import createBlockWitdthTitle from './view/helpers/createBlockWithTitle';
import createButton from './view/helpers/createButton';
import createElement from './view/helpers/createElemt';
import createErrortPage from './view/main/error-page/createErrorPage';
import createProductDetailsNavigator 
  from './view/main/productDetails/productDetailsComponents/createProductDetailsNavigator';

describe('Creating components', () => {
  test('Shuld create HTMLElement', () => {
    expect((createElement('div', 'test-el')).className).toBe('test-el')
  });

  test('Shuld create button', () => {
    expect((createButton('test-btn', 'test-btn')).className).toBe('page-btn test-btn')
  });

  test('Shuld create block', () => {
    expect(createBlock('test-block')[0].className).toBe('page-block test-block')
  });

  test('Shuld create block with title', () => {
    expect(createBlockWitdthTitle('test-block', 'test-title', 'title')[0].textContent).toBe('title')
  });

  test('Shuld create product path', () => {
    expect(createProductDetailsNavigator(data[0]).textContent).toBe('store>>smartphones>>Apple>>iPhone 9')
  });

  test('Shuld create error', () => {
    expect(createErrortPage().innerText).toBe('PAGE NOT FOUND (404)')
  })
  
})

describe('Changing data', () => {
  test('The highest price is 1749', () => {
    expect(sortData('sort=price-DESC', data)[0].price).toBe(1749)
  });

  test('Serched products should contain "book"', () => {
    expect((searchData(data, 'book')).map((el)=> el.title)).toEqual(
      [ "MacBook Pro", "Samsung Galaxy Book", "Infinix INBOOK" ]
    );
  });

  test('Filtered products by brand should be from "apple" brand', () => {
    expect((filrerData(data, 'brand=apple', 'brand')).map((el)=> el.title)).toEqual(
      [ "MacBook Pro", "iPhone X", "iPhone 9" ]
    );
  });

  test('The price of data should be between 1499 and 1749', () => {
    expect((filrerSlider(data, 'price', '1499', '1749')).length).toEqual(3);
  });
});
