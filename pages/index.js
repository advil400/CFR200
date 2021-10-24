import React from "react";
import commerce from "../lib/commerce";
import CartSummary from "../components/CartSummary";
import ProductList from "../components/ProductList";
import Header from "../components/Header";





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
      <div className="container block mx-auto grid-cols-3 grid-rows-3">
        <div className="col-span-3 row-span-1 inline-block object-top pb-10">
        <Header />       
        </div>
      	
        <div className="row-start-2 relative block object-center">
        <ProductList products={products} />
        </div>
      </div>
      </React.Fragment>
    );
  }