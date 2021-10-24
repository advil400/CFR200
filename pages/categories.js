import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import React from "react";
import Head from "next/head";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      categories,
    },
  };
}

export default function CategoriesPage({ categories }) {
  return (
    <React.Fragment>
    <Head>
        <meta charset="UTF-8"/>
        <title>Categories</title>
        <html lang="en" />
    </Head>
      <h1>Categories</h1>

      <CategoryList categories={categories} />
    </React.Fragment>
  );
}