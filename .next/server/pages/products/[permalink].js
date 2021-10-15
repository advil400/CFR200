"use strict";
(() => {
var exports = {};
exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(947);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





async function getStaticProps({
  params
}) {
  const {
    permalink
  } = params;
  const product = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__/* .default.products.retrieve */ .Z.products.retrieve(permalink, {
    type: "permalink"
  });
  return {
    props: {
      product
    }
  };
}
async function getStaticPaths() {
  const {
    data: products
  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__/* .default.products.list */ .Z.products.list();
  return {
    paths: products.map(product => ({
      params: {
        permalink: product.permalink
      }
    })),
    fallback: false
  };
}
function ProductPage({
  product
}) {
  const {
    setCart
  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_2__/* .useCartDispatch */ .dD)();

  const addToCart = () => _lib_commerce__WEBPACK_IMPORTED_MODULE_1__/* .default.cart.add */ .Z.cart.add(product.id).then(({
    cart
  }) => setCart(cart));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
      children: product.name
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
      children: product.price.formatted_with_symbol
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
      onClick: addToCart,
      children: "Add to Cart"
    })]
  });
}

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [947], () => (__webpack_exec__(267)));
module.exports = __webpack_exports__;

})();