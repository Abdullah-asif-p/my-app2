import GetData, { GetDataType } from "@/components/Lib/GetData";
import ProductPageComp from "@/components/Lib/productComp";
export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: GetDataType[] = await GetData(params.slug);
  const { images, image, productName, productColors, subcategory, price } =
    data[0];

  return (
    <>
      <ProductPageComp
        image={image}
        Images={images}
        productName={productName}
        subcategory={subcategory}
        price={price}
        productColors={productColors}
      />
    </>
  );
}
