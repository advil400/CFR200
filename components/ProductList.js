import Link from "next/link";

import Product from "./Product";
import ProductImages from "./ProductImages";

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <div>
      {products.map((product) => (
        <p key={product.permalink}>
          <ProductImages  {...product}/>
          <Link href={`/products/${product.permalink}`} passHref={true}>
              <Product {...product} />   
          </Link>
        </p>
      ))}
    </div>
  );
}