import React from "react";


import  commerce  from "../lib/commerce";
import { useCartDispatch } from "../context/cart";

function CartItem({ id, name, quantity, line_total, selected_options }) {
  const { setCart } = useCartDispatch();
  const hasVariants = selected_options.length >= 1;

  const handleUpdateCart = ({ cart }) => {
    setCart(cart);

    return cart;
  };

  const handleRemoveItem = () =>
    commerce.cart
      .remove(id)
      .then(handleUpdateCart);
      

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)

      : handleRemoveItem();
  };

  const incrementQuantity = () =>
    commerce.cart
      .update(id, { quantity: quantity + 1 })
      .then(handleUpdateCart);
      

  return (
   
    <div className="text-black flex flex-auto py-4 border-b justify-around border-black">
      <div className="flex flex-row flex-grow">

        <div className="flex flex-col items-start md:items-start">
          <p className="font-sans text-md md:text-lg lg:text-xl">
            {name}
          </p>
          {hasVariants && (
            <p className="font-sans italic">
              {selected_options.map(({ option_name }, index) => (
                <React.Fragment key={index}>
                  {index ? `, ${option_name}` : option_name}
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
        
        

        <div className="flex flex-col items-end justify-between flex-grow order-2">

          <div className="text-xl md:text-2xl">
            {line_total.formatted_with_symbol}
          </div>

          <div className="text-black text-xs w-full flex md:flex-col items-center md:items-end">
            <div className="md:pb-4 lg:pb-5 inline-flex items-center">
              <button
                onClick={decrementQuantity}
                className="bg-white dark:bg-gray-100 inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-100 px-3 py-2 w-4 h-4 transition"
              >
                -
              </button>
              <span className="px-2 md:text-lg">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="bg-white dark:bg-gray-100 inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-100 px-3 py-2 w-4 h-4 transition"
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={handleRemoveItem}
                className="inline-flex items-center justify-center rounded-lg border border-gray-400 text-gray-700 px-1 h-5 opacity-70 hover:opacity-100 focus:opacity-100 focus:outline-none transition"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;