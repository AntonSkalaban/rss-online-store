import { IProduct } from "./dataType";

export const sortData = (param: string, data: Array<IProduct>) => {
  let  sortParam: keyof IProduct;
  
  if (param.includes('price')) {
    sortParam = 'price';
  } else if (param.includes('rating')) {
    sortParam = 'rating';
  } else {
    sortParam = 'discountPercentage';
  }
   
  if (param.includes('ASC')) {
    return  data.sort((a, b) => +a[sortParam] - +b[sortParam]);
  } else if (param.includes('DESC')) {
    return data.sort((a, b) => +b[sortParam] - +a[sortParam]);
  }
  return data
}

export const searchData = (data: Array<IProduct>, value: string) => {
  return data.filter((el) => {
    return (
      el.title.toLowerCase().includes(value) || el.description.toLowerCase().includes(value)
        || el.price.toString().includes(value) || el.brand.toLowerCase().includes(value)
        || el.category.toLowerCase().includes(value)
    )
  })
}

export const filrerData = (data: Array<IProduct>, param: string, key: keyof IProduct) => {
  return data.filter((product) => param.includes(String(product[key]).toLowerCase()));
}

export const filrerSlider = (data: Array<IProduct>, key: keyof IProduct, minVal: string, maxVal: string) => {
  return data.filter((product) => product[key] >= +minVal && product[key] <= +maxVal);
}