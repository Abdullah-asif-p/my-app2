import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 bg-zinc-400 ">
      <div className="flex gap-5">
        <Link href={"/#"}>Female</Link>
        <Link href={"/#"}>Male</Link>
        <Link href={"/#"}>Kids</Link>
        <Link href={"/#"}>All Products</Link>
      </div>
      <div className="flex">
        <Search className="bg-white rounded-l" />
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r"
        ></input>
      </div>
      <div className="p-2 rounded-full bg-gray-300">
        <ShoppingCart className="relative" />
        <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          0
        </span>
      </div>
    </nav>
  );
}