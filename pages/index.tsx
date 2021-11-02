import React from "react";
import commerce from "../lib/commerce";
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
    
      <div className="container block mx-auto">

        <header className="object-top pb-20">
          <Header />
        </header>

        <div className="row-start-2 relative block object-center">
        <ProductList products={products} />
        </div>
        
      </div>
      </React.Fragment>
    );
  }