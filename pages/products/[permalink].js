import React from "react";
import commerce from "../../lib/commerce";
import VariantPicker from "../../components/VariantPicker";
import ProductImages from "../../components/ProductImages";
import Header from "../../components/Header";


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
      <div className="container fixed block mx-auto z-50">
        <header className="object-top pb-20">
          <Header />
        </header>
      </div>

      <div className="container flex flex-shrink lg:flex-row flex-col mx-auto mt-20">

        <div className="flex flex-initial flex-col max-w-4xl order-2 lg:order-1">              
          <ProductImages images={images} />           
        </div>
      
        <div className=" bg-gray-100 dark:bg-gray-200 border-1 rounded-lg border-gray-300 dark:border-gray-100 px-3 order-1 lg:order-2 z-40 h-full mx-auto mt-3 mb-6">
        
          <div className="flex flex-row justify-between pt-2 text-black  ">
            <span className="text-lg">{product.name}</span>
            <span className="text-md">{product.price.formatted_with_symbol}</span>
         </div>

        <div className="flex flex-row justify-between pt-3 pb-2 ">
          <VariantPicker
                    variantGroups={variantGroups}
                    defaultValues={initialVariants}
                    onChange={handleVariantChange}
                  />
          <button className="text-sm bg-gray-50 dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-200 text-black border-1 max-h-9 rounded-full border-gray-300 dark:border-gray-400 hover:border-gray-300 px-2" onClick={addToCart}>Add to Cart</button>     
        </div>

        <div className="pb-3">
          <p className="text-sm text-black ">{product.seo.description}</p>
        </div>

        </div>
      
      </div>
    </React.Fragment>
  );
}