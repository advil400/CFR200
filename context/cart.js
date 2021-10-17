import {useCycle} from "framer-motion";
import { createContext, useReducer, useContext, useEffect } from "react";

import commerce from "../lib/commerce";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const SET_CART = "SET_CART";
const RESET = "RESET";

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload };
    case RESET:
      return initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [open, toggle] = useCycle(false, true);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCart();
  }, []);

  const setCart = (payload) => dispatch({ type: SET_CART, payload });

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();

      dispatch({ type: SET_CART, payload: cart });
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

  const reset = async () => dispatch({ type: RESET });

  return (
    <CartDispatchContext.Provider
      value={{ setCart, showCart, closeCart, reset }}
    >
      <CartStateContext.Provider value={{ open, ...state }}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);