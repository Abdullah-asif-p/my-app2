import { GetDataType, getallData } from "@/components/Lib/GetData";
import ShoppingCart from "../../../components/Lib/ShoppingCart";
import StripeCheckOutButton from "@/app/Checkout";

export default async function Shoppingpage() {
  const data: GetDataType[] = await getallData();
  return (
    <ShoppingCart data={data } />
    
  );
}
