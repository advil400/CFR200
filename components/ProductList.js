import Link from "next/link";

import Product from "./Product";

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <div>
      {products.map((product) => (
        <p key={product.permalink}>
          <Link href={`/products/${product.permalink}`} passHref={true}>
            <a>
              <Product {...product} />
            </a>
          </Link>
        </p>
      ))}
    </div>
  );
}