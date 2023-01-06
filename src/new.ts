// const checkSortInput = (data: Array<IProduct>, params: Array<string>)  => {
//   let newData = [...data];
//   let allParams = [...params];
//   const sortInput = document.querySelector<HTMLInputElement>('.sort-input');


//   const sortOption = sortInput.value;
  
//   let sortParam: keyof IProduct;




//   if (sortOption.includes('price')) {
//     sortParam = 'price';
//   } else if (sortOption.includes('rating')) {
//     sortParam = 'rating';
//   } else {
//     sortParam = 'discountPercentage';
//   } 


//   if (sortOption.includes('ASC')) {
//     newData = newData.sort((a, b) => +a[sortParam] - +b[sortParam]);
//   } else if (sortOption.includes('DESC')) {
//     newData = newData.sort((a, b) => +b[sortParam] - +a[sortParam]);
//   }



//   if (window.location.href.includes('sort')) {
//     allParams = allParams.map((params) => {
//       if (params.includes('sort')) {
//         const val = sortParam + '-' + (sortOption.includes('ASC') ? 'ASC' : 'DESC');
//         return 'sort=' + val
//       }
//       return params;
//     }); 
//   } else if (!window.location.href.includes('sort') && sortInput.value){
//     const val = sortParam + '-' + (sortOption.includes('ASC') ? 'ASC' : 'DESC');
//     allParams.push('sort=' + val);
//     if (!allParams[0]) allParams.shift();


//   } else {
//     allParams = allParams.filter((params) => !params.includes('sort'));
//   }





  
//   if (sortInput) {
//     const sortOption = sortInput.value;
  
//     let sortParam: keyof IProduct;
  
//     if (sortOption.includes('price')) {
//       sortParam = 'price';
//     } else if (sortOption.includes('rating')) {
//       sortParam = 'rating';
//     } else {
//       sortParam = 'discountPercentage';
//     } 
  
//     if (sortOption.includes('ASC')) {
//       newData = newData.sort((a, b) => +a[sortParam] - +b[sortParam]);
//     } else if (sortOption.includes('DESC')) {
//       newData = newData.sort((a, b) => +b[sortParam] - +a[sortParam]);
//     }
  
//     if (window.location.href.includes('sort') && sortInput.value) {
//       allParams = allParams.map((params) => {
//         if (params.includes('sort')) {
//           const val = sortParam + '-' + (sortOption.includes('ASC') ? 'ASC' : 'DESC');
//           return 'sort=' + val
//         }
//         return params;
//       }); 
//     } else if (!window.location.href.includes('sort') && sortInput.value){
//       const val = sortParam + '-' + (sortOption.includes('ASC') ? 'ASC' : 'DESC');
//       allParams.push('sort=' + val);
//       if (!allParams[0]) allParams.shift();
  
  
//     } else {
//       allParams = allParams.filter((params) => !params.includes('sort'));
//     }
//   }
  
//     const arr: [Array<IProduct>, Array<string> ] =  [newData, allParams]
//     return arr;
//   }
  