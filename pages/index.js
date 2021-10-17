import React from "react";
import commerce from "../lib/commerce";
import CartSummary from "../components/CartSummary";
import ProductList from "../components/ProductList";
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
    return (
      <React.Fragment>
        
        
        <h1>Chemin de Fer</h1>
        <div>
        <CartSummary />
        </div>

        <h3>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </h3>

        <ProductList products={products} />
      </React.Fragment>
    );
  }