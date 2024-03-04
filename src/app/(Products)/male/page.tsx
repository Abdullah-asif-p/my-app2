import MProducts from "@/components/Lib/products";
import { urlFor } from "../../../../sanity/lib/client";
import Link from "next/link";
import getQueryData from "@/components/Lib/GetQueryData";

export default async function MaleProducts() {
  const data = await getQueryData("Male");

  return (
    <div className="px-5 xsm:px-12 sm:px-10 mdm:px-16 xl:px-24 2xl:px-32 py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  grid-flow-row gap-8">
        {data.map(
          (product: any, index: number) =>
            product.category === "Male" && (
              <div key={index} className="pb-2 px-2">
                <Link href={`/allProducts/${product.slug}`}>
                  <MProducts
                    productColors={product.productColors}
                    src={urlFor(product.image).url()}
                    price={product.price}
                    text={product.productName}
                    width={1155}
                    height={1500}
                  />
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
}
