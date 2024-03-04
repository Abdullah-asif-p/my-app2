import { GetDataType, getallData } from "@/components/Lib/GetData";
import ShoppingCart from "./ShoppingCart";


export default async function Shoppingpage() {
  const data: GetDataType[] = await getallData();
  return (
    <ShoppingCart   />
  )
}