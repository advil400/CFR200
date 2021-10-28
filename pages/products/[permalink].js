import React from "react";
import commerce from "../../lib/commerce";
import VariantPicker from "../../components/VariantPicker";
import ProductImages from "../../components/ProductImages";
import Header from "../../components/Header";
import Head from "next/head";

import { useCartDispatch } from "../../context/cart";

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
    
    
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  const { setCart } = useCartDispatch();
  
  const {
    variant_groups: variantGroups,
    assets,
  } = product;

  const images = assets.filter(({ is_image }) => is_image);
  
  const initialVariants = React.useMemo(
    () =>
      {
        return variantGroups.reduce((all, { id, options }) => {
          const [firstOption] = options;

          return { ...all, [id]: firstOption.id };

        }, {});
      },
    [product.permalink]
  );

  const [selectedVariants, setSelectedVariants] = React.useState(
    initialVariants
  );

  const handleVariantChange = ({ target: { id, value } }) =>
    setSelectedVariants({
      ...selectedVariants,
      [id]: value,
    });

  const addToCart = () =>
    commerce.cart.add(product.id, 1, selectedVariants).then(({ cart }) => {setCart(cart);return cart;})

  return (
    <React.Fragment>
    <Head>
        <meta charSet="UTF-8"/>
        <title>Product Page</title>
        <html lang="en" />
      </Head>
    <div className="container block mx-auto">
    <header className="col-span-3 row-span-1 inline-block object-top pb-20">
    <Header />
    </header>
    </div>
    <div className="container mx-auto">
    <div className="static inline-block mx-auto">     
      <div className="inline-block xl:scale-75">
      <ProductImages images={images} />
      </div>
      <h1 font-sans>{product.name}</h1>
      {product.price.formatted_with_symbol}
      <div>{product.description}</div>
    </div>
      <VariantPicker
                    variantGroups={variantGroups}
                    defaultValues={initialVariants}
                    onChange={handleVariantChange}
                  />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
    </React.Fragment>
  );
}