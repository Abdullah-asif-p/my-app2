import Link from "next/link";
import { useCartContext } from "@/app/Context/cartProvider";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  const { cartCount } = useCartContext();
  return (
    <Link
      href={"/shopingCart"}
      className="flex transition  transform ease-in-out hover:-translate-y-1 hover:scale-105 scale-95 mdm:scale-100  duration-500 p-2 mdm:p-3 rounded-full bg-[#ebebeb] "
    >
      <ShoppingCart className="relative " />
      <span className="absolute top-0 right-0 h-[16px] w-[16px] mdm:h-[18px] mdm:w-[18px] text-center rounded-full bg-[#f02d34] text-white text-xs mdm:text-sm">
        {cartCount}
      </span>
    </Link>
  );
}
