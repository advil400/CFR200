import { useCartState } from "../context/cart";


import CartItem from "./CartItem";

export default function Cart() {
  const { line_items, subtotal, total_unique_items } = useCartState();


  const isEmpty = line_items.length === 0;

  return (
    <div>
      <div>
        {line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div>
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

