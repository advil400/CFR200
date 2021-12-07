import { useCartState } from "../context/cart";
import CF from "/public/assets/cf.png";
import CartItem from "./CartItem";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const { line_items, subtotal} = useCartState();


  const isEmpty = line_items.length === 0;

  return (
    <div className="container flex flex-col max-w-sm bg-gray-100 dark:bg-gray-200 border-1 rounded-lg border-gray-300 dark:border-gray-100 px-4 mx-auto">
      <div className="inline-flex pt-4 object-left-top">

        <Link href="/" passHref={true}>
        <a>
        <Image src={CF} height='40%' width='40%' alt="Chemin de Fer Logo" priority />
        </a>
        </Link>

      </div>

      <div className="text-black justify-between">
        {line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="text-black py-6">
        {isEmpty ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="text-lg">
              Subtotal: {subtotal?.formatted_with_symbol} 
            </div>
            <div>
              <Link href="/checkout" passHref={true}>
              <button
                className="text-sm bg-gray-50 dark:bg-gray-100 hover:bg-gray-100 text-black border-1 max-h-9 rounded-full border-gray-300 dark:border-gray-400 px-2"
              >
                Checkout &rarr;
              </button>
              </Link>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}

