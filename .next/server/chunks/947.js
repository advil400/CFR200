"use strict";
exports.id = 947;
exports.ids = [947];
exports.modules = {

/***/ 947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zl": () => (/* binding */ CartProvider),
/* harmony export */   "KO": () => (/* binding */ useCartState),
/* harmony export */   "dD": () => (/* binding */ useCartDispatch)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CartStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const CartDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SET_CART = "SET_CART";
const RESET = "RESET";
const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case RESET:
      return initialState;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const CartProvider = ({
  children
}) => {
  const [open, toggle] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useCycle)(false, true);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getCart();
  }, []);

  const setCart = payload => dispatch({
    type: SET_CART,
    payload
  });

  const getCart = async () => {
    try {
      const cart = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__/* .default.cart.retrieve */ .Z.cart.retrieve();
      dispatch({
        type: SET_CART,
        payload: cart
      });
    } catch (err) {
      console.log(err);
    }
  };

  const showCart = () => {
    toggle();
  };

  const closeCart = () => {
    toggle();
  };

  const reset = async () => dispatch({
    type: RESET
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CartDispatchContext.Provider, {
    value: {
      setCart,
      showCart,
      closeCart,
      reset
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CartStateContext.Provider, {
      value: _objectSpread({
        open
      }, state),
      children: children
    })
  });
};
const useCartState = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartStateContext);
const useCartDispatch = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext);

/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(514);
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);
// lib/commerce.js

const client = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())("pk_test_30748196bb150b00e363ff64c38163180441337e2ed12");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);

/***/ })

};
;