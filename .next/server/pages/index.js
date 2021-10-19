"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IndexPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./lib/commerce.js
var commerce = __webpack_require__(141);
// EXTERNAL MODULE: ./context/cart.js
var cart = __webpack_require__(947);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/CartSummary.js





function CartSummary() {
  const {
    total_unique_items
  } = (0,cart/* useCartState */.KO)();
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/cart",
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      children: ["Cart (", total_unique_items, ")"]
    })
  });
}

/* harmony default export */ const components_CartSummary = (CartSummary);
// EXTERNAL MODULE: ./components/ProductList.js + 1 modules
var ProductList = __webpack_require__(756);
;// CONCATENATED MODULE: ./pages/index.js







async function getStaticProps() {
  const {
    data: products
  } = await commerce/* default.products.list */.Z.products.list();
  return {
    props: {
      products
    }
  };
}
function IndexPage({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Chemin de Fer"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_CartSummary, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/products",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Products"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ProductList/* default */.Z, {
      products: products
    })]
  });
}

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,664,947,736], () => (__webpack_exec__(508)));
module.exports = __webpack_exports__;

})();