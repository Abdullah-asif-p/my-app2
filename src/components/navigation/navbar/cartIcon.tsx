import Link from "next/link";
import { useCartContext } from "@/app/Context/cartProvider";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  const {cartCount} = useCartContext()
  return (
    <Link
      href={"/shopingCart"}
      className="flex transition  transform ease-in-out hover:-translate-y-1 hover:scale-110   duration-500  p-3 rounded-full bg-[#ebebeb] "
    >
      <ShoppingCart className="relative" />
      <span className="absolute top-0 right-0 h-[18px] w-[18px] text-center rounded-full bg-[#f02d34] text-white text-sm">
        {cartCount}
      </span>
    </Link>
  );
}