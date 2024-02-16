import { client } from "../../../sanity/lib/client";

export default async function GetData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"]{
  productName,
    "slug":slug.current,
    "quantity" :productImage.quantity,
    "gender" :productImage.gender,
    "price" :productImage.price,
    "category" :productImage.category,
    "alt" :productImage.alt,
    "image" :productImage.asset,

}`;

  const data = await client.fetch(query);
  return data;
}
