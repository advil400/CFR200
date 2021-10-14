exports.id = 482;
exports.ids = [482];
exports.modules = {

/***/ 554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductList)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/product.js

function Product({
  name,
  price
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
    children: [name, ": ", price.formatted_with_symbol]
  });
}
;// CONCATENATED MODULE: ./components/ProductList.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function ProductList({
  products
}) {
  if (!products) return null;
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    children: products.map(product => /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/products/${product.permalink}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Product, _objectSpread({}, product))
        })
      })
    }, product.permalink))
  });
}

/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(514);
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);
// lib/commerce.js

const client = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())("pk_test_30748196bb150b00e363ff64c38163180441337e2ed12");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;