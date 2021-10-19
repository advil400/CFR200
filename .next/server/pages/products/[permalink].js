"use strict";
(() => {
var exports = {};
exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./lib/commerce.js
var commerce = __webpack_require__(141);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/VariantPicker.js
const _excluded = ["variantGroups", "defaultValues"],
      _excluded2 = ["options"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function VariantPicker(_ref) {
  let {
    variantGroups = [],
    defaultValues = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (!variantGroups || variantGroups.length === 0) return null;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: variantGroups.map(_ref2 => {
      let {
        options
      } = _ref2,
          group = _objectWithoutProperties(_ref2, _excluded2);

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          htmlFor: group.id,
          children: [group.name, ":"]
        }), /*#__PURE__*/jsx_runtime_.jsx("select", _objectSpread(_objectSpread({
          id: group.id,
          defaultValue: defaultValues[group.id]
        }, props), {}, {
          children: options.map(option => /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: option.id,
            children: option.name
          }, option.id))
        }))]
      }, group.id);
    })
  });
}

/* harmony default export */ const components_VariantPicker = (VariantPicker);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/ProductImages.js



function ProductImages({
  images = []
}) {
  if (!images || images.length === 0) return null;
  return images.map(({
    id,
    url,
    image_dimensions
  }) => /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: url,
      width: image_dimensions.width,
      height: image_dimensions.height,
      quality: 100,
      alt: ""
    }, id)
  }, id));
}

/* harmony default export */ const components_ProductImages = (ProductImages);
// EXTERNAL MODULE: ./context/cart.js
var cart = __webpack_require__(947);
;// CONCATENATED MODULE: ./pages/products/[permalink].js
function _permalink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _permalink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _permalink_ownKeys(Object(source), true).forEach(function (key) { _permalink_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _permalink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _permalink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








async function getStaticProps({
  params
}) {
  const {
    permalink
  } = params;
  const product = await commerce/* default.products.retrieve */.Z.products.retrieve(permalink, {
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
  } = await commerce/* default.products.list */.Z.products.list();
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
  } = (0,cart/* useCartDispatch */.dD)();
  const {
    variant_groups: variantGroups,
    assets
  } = product;
  const images = assets.filter(({
    is_image
  }) => is_image);
  const initialVariants = external_react_default().useMemo(() => {
    return variantGroups.reduce((all, {
      id,
      options
    }) => {
      const [firstOption] = options;
      return _permalink_objectSpread(_permalink_objectSpread({}, all), {}, {
        [id]: firstOption.id
      });
    }, {});
  }, [product.permalink]);
  const [selectedVariants, setSelectedVariants] = external_react_default().useState(initialVariants);

  const handleVariantChange = ({
    target: {
      id,
      value
    }
  }) => setSelectedVariants(_permalink_objectSpread(_permalink_objectSpread({}, selectedVariants), {}, {
    [id]: value
  }));

  const addToCart = () => commerce/* default.cart.add */.Z.cart.add(product.id, 1, selectedVariants).then(({
    cart
  }) => {
    setCart(cart);
    return cart;
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: product.name
    }), /*#__PURE__*/jsx_runtime_.jsx(components_ProductImages, {
      images: images
    }), product.price.formatted_with_symbol, product.description, /*#__PURE__*/jsx_runtime_.jsx(components_VariantPicker, {
      variantGroups: variantGroups,
      defaultValues: initialVariants,
      onChange: handleVariantChange
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
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

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [426,675,947], () => (__webpack_exec__(630)));
module.exports = __webpack_exports__;

})();