import Link from "next/link";



function ProductList({ products }) {
  if (!products || products.length === 0) return null;

  return products.map(({ name, permalink, price }, index) => (
    <span key={permalink}>
    {index ? ", " : ""}
    <Link href={`/products/${permalink}`}>
      <a className="flex justify-evenly py-2 md:py-3 space-x-1 dark:text-white">
          <span className="text-sm md:text-base lg:text-lg">{name}</span>
          <span className="text-sm md:text-base lg:text-lg">
            {price.formatted_with_symbol}
          </span>
      </a>
    </Link>
  </span>
));
}

export default ProductList;
