import Image from "next/image";
import Link from "next/link";
import React from "react";



function Product({ media, name, permalink, price }) {
  
  return (    
    <Link href={`/products/${permalink}`}>
      <a className="group relative hover:text-gray-600">
        {media?.source && (
          <div className="relative rounded-lg w-full">
            <Image
              src={media.source}
              alt={Product.name}
              layout="fill"
              priority={true}
            />
          </div>
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