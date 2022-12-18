/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createElement(tag, className) {\r\n    const el = document.createElement(tag);\r\n    if(className) el.classList.add(className);\r\n    return el;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://src/./src/createElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/header/header */ \"./src/page/header/header.js\");\n/* harmony import */ var _page_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/footer/footer */ \"./src/page/footer/footer.js\");\n/* harmony import */ var _page_main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/main/main */ \"./src/page/main/main.js\");\n\r\n\r\n\r\n\r\nconst header = (0,_page_header_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst footer = (0,_page_footer_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nconst main = (0,_page_main_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nconst root = document.querySelector('.root');\r\nroot.appendChild(header);\r\nroot.appendChild(main);\r\nroot.appendChild(footer);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://src/./src/index.js?");

/***/ }),

/***/ "./src/page/footer/footer.js":
/*!***********************************!*\
  !*** ./src/page/footer/footer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createElement */ \"./src/createElement.js\");\n\r\n\r\nconst createFooter = () => {\r\n    const footer = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header', 'footer');\r\n    const title = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', 'footer__title');\r\n    title.textContent = 'Footer title';\r\n    footer.appendChild(title)\r\n    return footer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n//# sourceURL=webpack://src/./src/page/footer/footer.js?");

/***/ }),

/***/ "./src/page/header/header.js":
/*!***********************************!*\
  !*** ./src/page/header/header.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createElement */ \"./src/createElement.js\");\n\r\n\r\nconst createHeader = () => {\r\n    const header = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header', 'header');\r\n    const title = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'header__title');\r\n    title.textContent = 'Header title';\r\n    header.appendChild(title)\r\n    return header;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://src/./src/page/header/header.js?");

/***/ }),

/***/ "./src/page/main/main.js":
/*!*******************************!*\
  !*** ./src/page/main/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createElement */ \"./src/createElement.js\");\n/* harmony import */ var _mainInputs_searchProductInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainInputs/searchProductInput */ \"./src/page/main/mainInputs/searchProductInput.js\");\n/* harmony import */ var _productsBoard_productsBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productsBoard/productsBoard */ \"./src/page/main/productsBoard/productsBoard.js\");\n\r\n\r\n\r\n\r\nconst createMain = () => {\r\n    const main = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main', 'main');\r\n    const board = (0,_productsBoard_productsBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    const searchInpit = (0,_mainInputs_searchProductInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n    main.appendChild(searchInpit);\r\n    main.appendChild(board);\r\n    \r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);\n\n//# sourceURL=webpack://src/./src/page/main/main.js?");

/***/ }),

/***/ "./src/page/main/mainInputs/searchProductInput.js":
/*!********************************************************!*\
  !*** ./src/page/main/mainInputs/searchProductInput.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../createElement */ \"./src/createElement.js\");\n/* harmony import */ var _product_createProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/createProduct */ \"./src/page/main/product/createProduct.js\");\n\r\n\r\n\r\nconst searchProductInput =  () => {\r\n    const searchInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'search-product');\r\n    searchInput.classList.add('main-input');\r\n    \r\n    const searchProduct = async () => {\r\n        const board = document.querySelector('.products-board');\r\n        board.innerHTML = '';\r\n        return (\r\n            await fetch(`https://dummyjson.com/products/search?q=${ searchInput.value }`)\r\n            .then(res => res.json())\r\n            .then(res => res.products.forEach(el => {\r\n                const product = (0,_product_createProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el.title);\r\n                board.appendChild(product)}\r\n                )\r\n            )\r\n        )\r\n    }\r\n\r\n     searchInput.addEventListener('keyup', searchProduct);\r\n\r\n    return searchInput;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchProductInput);\n\n//# sourceURL=webpack://src/./src/page/main/mainInputs/searchProductInput.js?");

/***/ }),

/***/ "./src/page/main/product/createProduct.js":
/*!************************************************!*\
  !*** ./src/page/main/product/createProduct.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../createElement */ \"./src/createElement.js\");\n\r\n\r\nconst createProduct = (title) => {\r\n    const product = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'product');\r\n    const productTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'product__title');\r\n    const productImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', 'product__img');\r\n\r\n    const productDescription = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'product__description');\r\n    const productPrice = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'product__price');\r\n\r\n    productTitle.textContent = title; \r\n    \r\n    product.appendChild(productTitle);\r\n    product.appendChild(productImg);\r\n    product.appendChild(productDescription);\r\n    productDescription.appendChild(productPrice);\r\n    return product;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProduct);\n\n//# sourceURL=webpack://src/./src/page/main/product/createProduct.js?");

/***/ }),

/***/ "./src/page/main/productsBoard/productsBoard.js":
/*!******************************************************!*\
  !*** ./src/page/main/productsBoard/productsBoard.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../createElement */ \"./src/createElement.js\");\n/* harmony import */ var _product_createProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/createProduct */ \"./src/page/main/product/createProduct.js\");\n\r\n\r\n\r\nconst productsBoard = () => {\r\n    const  board = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'products-board');\r\n\r\n    const loadProducts = async () => {\r\n        return (\r\n            await fetch('https://dummyjson.com/products')\r\n            .then(res => res.json())\r\n            .then(res => {\r\n                res.products.forEach(el => {\r\n                    const product = (0,_product_createProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el.title);\r\n                    board.appendChild(product)\r\n                })\r\n            })\r\n        )\r\n    }\r\n\r\n    loadProducts()\r\n  \r\n    return board;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsBoard);\n\n//# sourceURL=webpack://src/./src/page/main/productsBoard/productsBoard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;