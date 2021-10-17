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
    <div >
      <div>
        <div>
          <p>
            {name}
          </p>
          {hasVariants && (
            <p>
              {selected_options.map(({ option_name }, index) => (
                <React.Fragment key={index}>
                  {index ? `, ${option_name}` : option_name}
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
        <div>
          <div>
            {line_total.formatted_with_symbol}
          </div>
          <div>
            <div>
              <button onClick={decrementQuantity}>
                -
              </button>
              <span> {quantity} </span>
              <button
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            
            <div>
              <button
                onClick={handleRemoveItem}
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