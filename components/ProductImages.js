import Image from "next/image";

function ProductImages({ images = [] }) {
  if (!images || images.length === 0) return null;

  return images.map(({ id, url, image_dimensions }) => (
    <div className="container" key={id}>
      <Image
        key={id}
        src={url}
        width={image_dimensions.width}
        height={image_dimensions.height}
        priority
        quality={75}
        alt=""
      />
    </div>
  ));
}

export default ProductImages;