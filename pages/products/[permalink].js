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

    
    <div className="relative container flex flex-initial lg:flex-row flex-col mx-auto mt-20 place-content-center">

    <div className="flex-shrink order-1 ">              
        <ProductImages images={images} />           
    </div>

    
      
      <div className="max-w-md object-right-top bg-gray-50 border-1 rounded-lg border-gray-300 px-3 order-2 z-40 h-full mx-auto">
        <div className="flex flex-row justify-between pt-3 pb-2">
          <span className="font-medium text-md">{product.name}</span>
          <span className="font-normal text-md">{product.price.formatted_with_symbol}</span>
        </div>

      <div className="flex flex-row justify-between pt-2 pb-2 ">
        <VariantPicker
                    variantGroups={variantGroups}
                    defaultValues={initialVariants}
                    onChange={handleVariantChange}
                  />
        <button className="text-xs bg-gray-200 text-black border-1 max-h-7 border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-200 py-1 px-1.5" onClick={addToCart}>Add to Cart</button>     
      </div>

      <div className="pt-1 pb-3">
      <p className="font-normal text-sm">Screenprinted in Tokyo by @creationprintingservice</p>
      </div>
      </div>
      
    

      </div>

  
      
    </React.Fragment>
  );
}