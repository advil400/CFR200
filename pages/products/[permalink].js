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

    <div className="container fixed block mx-auto z-50">
    <header className="col-span-3 row-span-1 object-top pb-20">
    <Header />
    </header>
    </div>

    <div className="container pt-10 pb-5 px-20 z-40">
      <div className="flex justify-evenly">     
       <div className="">
        <ProductImages images={images} />
       </div>
      </div>
    </div>

    <div className="container place-self-center mx-auto ">

    <div className="flex justify-evenly">
    <span className="font-medium sm:text-base md:text-lg lg:text-2xl xl:text-3xl">{product.name}</span>
    <span className="font-normal sm:text-sm md:text-base lg:text-lg">{product.price.formatted_with_symbol}</span>
    </div>

    <div className="block mx-auto bg-gray-50 text-black border-1 rounded-lg border-gray-300">
    <div className="flex box-content justify-evenly ">
      <VariantPicker
                    variantGroups={variantGroups}
                    defaultValues={initialVariants}
                    onChange={handleVariantChange}
                  />
      <button onClick={addToCart}>Add to Cart</button>
      </div>
      </div>
    <div className="flex justify-self-start py-2 md:py-3 space-x-2">
    <p className="font-normal">Screenprinted in Tokyo by @creationprintingservice</p>
    </div>
    </div>
    </React.Fragment>
  );
}