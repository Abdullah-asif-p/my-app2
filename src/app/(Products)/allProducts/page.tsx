import MProducts from "@/components/Lib/products";
import { client, urlFor } from "../../../../sanity/lib/client";
import Link from "next/link";
import { GetDataType, getallData } from "@/components/Lib/GetData";

export default async function AllProducts() {
  const data: GetDataType[] = await getallData();
  return (
    <div className="px-5 sm:px-10 mdm:px-16 xl:px-24 2xl:px-32 py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-8">
        {data.map((product: any, index: number) => (
          <div key={index} className="mb-2 mx-2">
            <Link href={`/allProducts/${product.slug}`}>
              <MProducts
                src={urlFor(product.image).url()}
                productColors={product.productColors}
                price={product.price}
                text={product.productName}
                width={1155}
                height={1500}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
