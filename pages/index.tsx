import React from "react";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Image from "next/image";
import CF001o from "/public/assets/CF001-O.png";
import CF001p from "/public/assets/CF001-P.png";
import Link from "next/link";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  
  return {
    props: {   
      products,
        
    },
  };
}


  

export default function IndexPage({ products }) {
  
    return products.map(({ permalink }) => (
      <React.Fragment key={permalink}>
    
      <div className="container block mx-auto" key={permalink}>

        <header className="object-top pb-20">
          <Header />
        </header>

        <div className="row-start-2 relative block object-center">
        <ProductList products={products} />
        </div>

        <div key={permalink} className="flex flex-initial flex-col mx-auto max-w-2xl" >
          <Link  href={`/products/${permalink}`} passHref={true}>
            <a>
              <Image src={CF001o} layout="responsive" quality="75" alt="Chemin de Fer Varsity Sweater in Olive" priority />
              <Image src={CF001p} layout="responsive" quality="75" alt="Chemin de Fer Varsity Sweater in Purple" priority />
            </a>
          </Link>
        </div>
        
      </div>
      </React.Fragment>
    ));
  }