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
        <a className="dark:filter dark:invert">
        <Image src={CF} height='40%' width='40%' alt="Chemin de Fer Logo" priority />
        </a>
        </Link>

      </div>

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

