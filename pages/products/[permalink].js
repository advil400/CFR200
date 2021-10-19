import React from "react";
import commerce from "../../lib/commerce";
import VariantPicker from "../../components/VariantPicker";
import ProductImages from "../../components/ProductImages";

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
      <h1>{product.name}</h1>
      <ProductImages images={images} />
          {product.price.formatted_with_symbol}
          {product.description}
      <VariantPicker
                    variantGroups={variantGroups}
                    defaultValues={initialVariants}
                    onChange={handleVariantChange}
                  />
      <button onClick={addToCart}>Add to Cart</button>
      
    </React.Fragment>
  );
}