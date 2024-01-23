import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className=" flex justify-between items-center ">
      <Link href={"/"}>
        <Image
          src={"/logo.webp"}
          width={140}
          height={25}
          alt="logo"
          className=" object-cover flex-nonwrap"
        />
      </Link>
      <div className="flex gap-3 text-xl sm:invisible :visible">
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
      <Link
        href={"/shopingCart"}
        className="transition  transform ease-in-out hover:-translate-y-1 hover:scale-110   duration-500  p-3 rounded-full bg-gray-300 "
      >
        <ShoppingCart className="relative " />
        <span className="absolute top-0 h-[18px] w-[18px] text-center rounded-full bg-[#f02d34] text-white text-sm">
          0
        </span>
      </Link>
    </nav>
  );
}