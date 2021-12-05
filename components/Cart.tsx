import { useCartState } from "../context/cart";

import CartItem from "./CartItem";

export default function Cart() {
  const { line_items, subtotal} = useCartState();


  const isEmpty = line_items.length === 0;

  return (
    <div className="container flex flex-col max-w-md bg-gray-100 dark:bg-gray-200 border-1 rounded-lg border-gray-300 dark:border-gray-100 mx-auto">
      <div className="text-black justify-between">
        {line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="text-black py-10">
        {isEmpty ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div>
              Subtotal: {subtotal?.formatted_with_symbol} 
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}

