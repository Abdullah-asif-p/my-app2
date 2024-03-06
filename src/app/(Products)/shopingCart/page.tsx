import { GetDataType, getallData } from "@/components/Lib/GetData";
import ShoppingCart from "../../../components/Lib/ShoppingCart";
import StripeCheckOutButton from "@/app/Checkout";

export default async function Shoppingpage() {
  const data: GetDataType[] = await getallData();
  return (
    <ShoppingCart />
    // <div className="flex min-h-screen flex-col items-center p-24">
    //   <div>Stripe Check Out</div>
    //   <StripeCheckOutButton />
    // </div>
  );
}
