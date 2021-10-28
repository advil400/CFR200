import React from "react";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Head from "next/head";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
  return (
    <React.Fragment>
    <Head>
        <meta charSet="UTF-8"/>
        <title>Cart</title>
        <html lang="en" />
    </Head>
      <h1>Products</h1>

      <ProductList products={products} />
    </React.Fragment>
  );
}