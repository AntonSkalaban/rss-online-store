import { IProduct } from "../../model/dataType";

export const renderSortValue = (param: string) => {
  const sortInput = document.querySelector<HTMLInputElement>('.sort-input');
  if (sortInput) {
    sortInput.value = param.split('=')[1];
  }
}

export const renderSearchValue = (value: string) => { 
  const searchInput = document.querySelector<HTMLInputElement>('.search-input');
    
  if (searchInput) searchInput.value = value;
}
  
export const renderFilterValue = (param: string, key: keyof IProduct, keyCheckboxes: string) => {
  const checkboxes = document.querySelectorAll<HTMLInputElement>(keyCheckboxes);
  checkboxes.forEach((checkbox) => checkbox.checked = param.includes(checkbox.value));
}