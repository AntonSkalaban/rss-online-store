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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/page/main/mainHeader/mainHeader.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/page/main/mainHeader/mainHeader.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".main__header {\\r\\n    display: flex;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://src/./src/page/main/mainHeader/mainHeader.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://src/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://src/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/page/main/mainHeader/mainHeader.css":
/*!*************************************************!*\
  !*** ./src/page/main/mainHeader/mainHeader.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./mainHeader.css */ \"./node_modules/css-loader/dist/cjs.js!./src/page/main/mainHeader/mainHeader.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_mainHeader_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://src/./src/page/main/mainHeader/mainHeader.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createElement */ \"./src/createElement.js\");\n/* harmony import */ var _main_mainHeader_createMainHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/mainHeader/createMainHeader */ \"./src/page/main/mainHeader/createMainHeader.js\");\n/* harmony import */ var _productsBoard_productsBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productsBoard/productsBoard */ \"./src/page/main/productsBoard/productsBoard.js\");\n\r\n\r\n\r\n\r\n\r\nconst createMain = () => {\r\n    const main = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main', 'main');\r\n    const mainHeader = (0,_main_mainHeader_createMainHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    const board = (0,_productsBoard_productsBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    \r\n    main.appendChild(mainHeader)\r\n    main.appendChild(board);\r\n    \r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);\n\n//# sourceURL=webpack://src/./src/page/main/main.js?");

/***/ }),

/***/ "./src/page/main/mainHeader/createMainHeader.js":
/*!******************************************************!*\
  !*** ./src/page/main/mainHeader/createMainHeader.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../createElement */ \"./src/createElement.js\");\n/* harmony import */ var _mainHeader_mainInputs_searchProductInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mainHeader/mainInputs/searchProductInput */ \"./src/page/main/mainHeader/mainInputs/searchProductInput.js\");\n/* harmony import */ var _mainHeader_mainInputs_sortCategoryInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mainHeader/mainInputs/sortCategoryInput */ \"./src/page/main/mainHeader/mainInputs/sortCategoryInput.js\");\n/* harmony import */ var _createMainTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMainTitle */ \"./src/page/main/mainHeader/createMainTitle.js\");\n/* harmony import */ var _mainHeader_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainHeader.css */ \"./src/page/main/mainHeader/mainHeader.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst createMainHeader = () => {\r\n    const mainHeader = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'main__header');\r\n    const sortInput = (0,_mainHeader_mainInputs_sortCategoryInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    const mainTitle = (0,_createMainTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    const searchInpit = (0,_mainHeader_mainInputs_searchProductInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    \r\n    mainHeader.appendChild(sortInput);\r\n    mainHeader.appendChild(mainTitle)\r\n    mainHeader.appendChild(searchInpit);\r\n\r\n    return mainHeader;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainHeader);\n\n//# sourceURL=webpack://src/./src/page/main/mainHeader/createMainHeader.js?");

/***/ }),

/***/ "./src/page/main/mainHeader/createMainTitle.js":
/*!*****************************************************!*\
  !*** ./src/page/main/mainHeader/createMainTitle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../createElement */ \"./src/createElement.js\");\n\r\n\r\nconst createMainTitle = () => {\r\n    const mainTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'main__title');\r\n    mainTitle.textContent = 'Found: 0'\r\n    return mainTitle;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainTitle);\n\n//# sourceURL=webpack://src/./src/page/main/mainHeader/createMainTitle.js?");

/***/ }),

/***/ "./src/page/main/mainHeader/mainInputs/searchProductInput.js":
/*!*******************************************************************!*\
  !*** ./src/page/main/mainHeader/mainInputs/searchProductInput.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../createElement */ \"./src/createElement.js\");\n/* harmony import */ var _product_createProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../product/createProduct */ \"./src/page/main/product/createProduct.js\");\n\r\n\r\n\r\nconst searchProductInput =  () => {\r\n    const searchInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'search-product');\r\n    searchInput.classList.add('main-input');\r\n    searchInput.setAttribute('type', 'text');\r\n    \r\n    const searchProduct = async () => {\r\n        const board = document.querySelector('.products-board');\r\n        const sortInput = document.querySelector('.sort-input');\r\n        board.innerHTML = '';\r\n        \r\n        let sortBy;\r\n       if (sortInput.value.includes('price')) {\r\n        sortBy = 'price';\r\n       }\r\n\r\n        await fetch(`https://dummyjson.com/products/search?q=${ searchInput.value }`)\r\n        .then(res => res.json())\r\n        .then((res) => {\r\n            return (\r\n                res.products\r\n                    .sort((a, b ) => {\r\n                        if (sortInput.value.includes('ASC')) {\r\n                            return a[sortBy] - b[sortBy]\r\n                        }\r\n                        return b[sortBy] - a[sortBy] \r\n                    })\r\n                    .forEach((el) => {\r\n                        const product = (0,_product_createProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el.title, el.price);\r\n                        board.appendChild(product)\r\n                    })\r\n            )\r\n        })        \r\n    }\r\n\r\n     searchInput.addEventListener('keyup', searchProduct);\r\n\r\n    return searchInput;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchProductInput);\n\n//# sourceURL=webpack://src/./src/page/main/mainHeader/mainInputs/searchProductInput.js?");

/***/ }),

/***/ "./src/page/main/mainHeader/mainInputs/sortCategoryInput.js":
/*!******************************************************************!*\
  !*** ./src/page/main/mainHeader/mainInputs/sortCategoryInput.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../createElement */ \"./src/createElement.js\");\n/* harmony import */ var _product_createProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../product/createProduct */ \"./src/page/main/product/createProduct.js\");\n\r\n\r\n\r\nconst sortProductsInput =  () => {\r\n    const sortInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('select', 'sort-input');\r\n    sortInput.classList.add('main-input');\r\n\r\n    const sotrByPticeASC = document.createElement('option', 'select-option');\r\n    const sotrByPticeDESC = document.createElement('option', 'select-option');\r\n    const sotrByRatingASC = document.createElement('option', 'select-option');\r\n    const sotrByRatingDESC = document.createElement('option', 'select-option');\r\n    const sotrByDiscountASC = document.createElement('option', 'select-option');\r\n    const sotrByDiscountDESC = document.createElement('option', 'select-option');\r\n\r\n    sotrByPticeASC.value = 'price ASC';\r\n    sotrByPticeDESC.value = 'price DESC';\r\n    sotrByRatingASC.value = 'rating ASC';\r\n    sotrByRatingDESC.value = 'rating DESC';\r\n    sotrByDiscountASC.value = 'discount ASC';\r\n    sotrByDiscountDESC.value = 'discont DESC';\r\n\r\n    sotrByPticeASC.text = 'sort by price ASC'\r\n    sotrByPticeDESC.text = 'sort by price DESC'\r\n    sotrByRatingASC.text = 'sort by rating ASC'\r\n    sotrByRatingDESC.text = 'sort by rating DESC'\r\n    sotrByDiscountASC.text = 'sort by discount ASC'\r\n    sotrByDiscountDESC.text = 'sort by discont DESC'\r\n\r\n    sortInput.add(sotrByPticeASC);\r\n    sortInput.add(sotrByPticeDESC);\r\n\r\n    const sortProducts = async (e) => {\r\n        const board = document.querySelector('.products-board');\r\n        const searchInput = document.querySelector('.search-product')\r\n        board.innerHTML = '';\r\n       \r\n        let sortBy;\r\n \r\n       if (e.target.value.includes('price')) {\r\n        sortBy = 'price';\r\n       }\r\n\r\n        await fetch( \r\n            !searchInput.value \r\n            ? 'https://dummyjson.com/products'\r\n            : `https://dummyjson.com/products/search?q=${ searchInput.value }`\r\n            )\r\n        .then((res) => res.json())\r\n        .then((res) => {\r\n            return (\r\n                res.products\r\n                    .sort((a, b ) => {\r\n                        if (e.target.value.includes('ASC')) {\r\n                           return a[sortBy] - b[sortBy]\r\n                        }\r\n                        return b[sortBy] - a[sortBy] \r\n                    })\r\n                    .forEach((el) => {\r\n                        const product = (0,_product_createProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el.title, el.price);\r\n                        board.appendChild(product)\r\n                    })\r\n            )\r\n        })\r\n    }  \r\n          \r\n    sortInput.addEventListener('change', sortProducts);\r\n    \r\n    return sortInput;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortProductsInput);\n\n//# sourceURL=webpack://src/./src/page/main/mainHeader/mainInputs/sortCategoryInput.js?");

/***/ }),

/***/ "./src/page/main/product/createProduct.js":
/*!************************************************!*\
  !*** ./src/page/main/product/createProduct.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../createElement */ \"./src/createElement.js\");\n\r\n\r\nconst createProduct = (title, price) => {\r\n    const product = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'product');\r\n    const productTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'product__title');\r\n    const productImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', 'product__img');\r\n\r\n    const productDescription = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'product__description');\r\n    const productPrice = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'product__price');\r\n\r\n    productTitle.textContent = title; \r\n    productPrice.textContent = price;\r\n    \r\n    product.appendChild(productTitle);\r\n    product.appendChild(productImg);\r\n    product.appendChild(productDescription);\r\n    productDescription.appendChild(productPrice);\r\n    return product;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProduct);\n\n//# sourceURL=webpack://src/./src/page/main/product/createProduct.js?");

/***/ }),

/***/ "./src/page/main/productsBoard/productsBoard.js":
/*!******************************************************!*\
  !*** ./src/page/main/productsBoard/productsBoard.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../createElement */ \"./src/createElement.js\");\n/* harmony import */ var _product_createProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/createProduct */ \"./src/page/main/product/createProduct.js\");\n\r\n\r\n\r\nconst productsBoard = () => {\r\n    const  board = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'products-board');\r\n\r\n    const loadProducts = async () => {\r\n        return (\r\n            await fetch('https://dummyjson.com/products')\r\n            .then(res => res.json())\r\n            .then(res => {\r\n                res.products.forEach(el => {\r\n                    const product = (0,_product_createProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el.title, el.price);\r\n                    board.appendChild(product)\r\n                })\r\n            })\r\n        )\r\n    }\r\n\r\n    loadProducts()\r\n  \r\n    return board;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsBoard);\n\n//# sourceURL=webpack://src/./src/page/main/productsBoard/productsBoard.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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