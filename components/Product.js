import Image from "next/image";
import Link from "next/link";


function Product({ media, name, permalink, price }) {
  
  return (
    <Link href={`/products/${permalink}`} passHref={true}>
      <a className="group relative">
        {media?.source && (
          
            <Image
              src={media.source}
              alt={Product.name}
              layout="fill"
              sizes="616px, (min-width: 768px): 352px, (min-width: 1024px): 232px, (min-width: 1280px): 288px"
              priority={true}
            />
          
        )}
        <div className="flex justify-evenly py-2 md:py-3 space-x-1">
          <span className="text-sm md:text-base lg:text-lg">{name}</span>
          <span className="text-sm md:text-base lg:text-lg">
            {price.formatted_with_symbol}
          </span>
        </div>
      </a>
    </Link>
  );
}

export default Product;