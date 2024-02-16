import EproductData from "@/components/veiws/components/eProducts";
import MProducts from "@/components/veiws/components/products";
import { client, urlFor } from "../../../../sanity/lib/client";
import Link from "next/link";

async function GetData() {
  const query = `*[_type == "product"]{
  productName,
    "slug":slug.current,
    "quantity" :productImage.quantity,
    "gender" :productImage.gender,
    "price" :productImage.price,
    "category" :productImage.category,
    "alt" :productImage.alt,
    "image" :productImage.asset,
}`;

  const data = client.fetch(query);
  return data;
}

export default async function AllProducts() {
  const data = await GetData();
  console.log(data);

  return (
    <div className=" px-24 2xl:px-36 py-16">
      <div className="grid grid-cols-2 mdm:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-8">
        {data.map((product: any, index: number) => (
          <div className="pb-2 px-2">
            <Link href={`/allProducts/${product.slug}`}>
              <MProducts
                key={index}
                src={urlFor(product.image).url()}
                price={product.price}
                text={product.productName}
                width={250}
                height={270}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
