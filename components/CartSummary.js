import { useCartState } from "../context/cart";
import Link from "next/link";

function CartSummary() {
  const { total_unique_items } = useCartState();


  return (
    <Link href="/cart" passHref={true}>
    <button>
      Cart ({total_unique_items})
    </button>
    </Link>
  );
}

export default CartSummary;