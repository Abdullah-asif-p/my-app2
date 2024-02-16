import MProducts from "@/components/veiws/components/products";
import { urlFor } from "../../../../../sanity/lib/client";
import GetData from "@/components/Lib/GetData";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const data = await GetData(params.slug);
  return (
    <div>
      {data.map((product: any, index: number) => (
        <div className="pb-2 px-2">
          <MProducts
            key={index}
            src={urlFor(product.image).url()}
            price={product.price}
            text={product.productName}
            width={250}
            height={270}
          />
        </div>
      ))}
    </div>
  );
}
