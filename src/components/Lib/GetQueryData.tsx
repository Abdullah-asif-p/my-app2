import { client } from "../../../sanity/lib/client";

export default async function getQueryData(category: string ) {
  const query = `*[_type == "product" && category == "${category}"]{
  productName,
    "slug":slug.current,
    productColors,
    quantity,
    category,
    price,
    subcategory,
    "image" :mainProductImage.asset,
    "images": productImage[].asset,
}`;

  const data = await client.fetch(query);
  return data;
}
