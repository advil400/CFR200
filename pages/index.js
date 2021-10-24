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
      <div className="container mx-auto">
        <div className="flex-col block object-top">
        <Header />       
        </div>
      	
        <div className="flex-col relative block object-center">
        <ProductList products={products} />
        </div>
      </div>
      </React.Fragment>
    );
  }