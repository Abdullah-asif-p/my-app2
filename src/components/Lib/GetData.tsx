import { client } from "../../../sanity/lib/client";

export default async function GetData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}" ]{
  productName,
  productColors,
    quantity,
    category,
    price,
    subcategory,
    "image" :mainProductImage.asset._ref,
    "images": productImage[].asset._ref,
}`;

  const data = await client.fetch(query);
  return data;
}
export async function getallData() {
  const query = `*[_type == "product"]{
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

export type GetDataType = {
  productName: string;
  productColors:string[];
  slug: string;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  quantity: number;
  price: number;
};
