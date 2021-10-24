import Image from "next/image";
import Link from "next/link";
import React from "react";



function Product({ url, name, permalink, price }) {
  
  return (
    <React.Fragment>
    <Link href={`/products/${permalink}`}>
    <a href="/" className="hover:text-gray-600">
        <div className="flex justify-evenly py-2 md:py-3 space-x-1">
          <span className="text-sm md:text-base lg:text-lg">{name}</span>
          <span className="text-sm md:text-base lg:text-lg">
            {price.formatted_with_symbol}
          </span>
        </div>
    </a>
    </Link>     
    
    </React.Fragment>
  );
}

export default Product;