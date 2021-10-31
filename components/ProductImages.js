import Image from "next/image";

function ProductImages({ images = [] }) {
  if (!images || images.length === 0) return null;

  return images.map(({ id, url, image_dimensions }) => (
    <div className="container object-scale-down" key={id}>
      <Image
        key={id}
        src={url}
        width={image_dimensions.width}
        height={image_dimensions.height}
        quality={100}
        alt=""
      />
    </div>
  ));
}

export default ProductImages;