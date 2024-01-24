"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import SearchIcon from "../icons/searchIcon";
import Image from "next/image";

export default function Navbar() {
  const [buttonState, setButtonState] = useState(false);
  return (
    <nav className="flex  relative justify-between items-center p-4 md:p-6 gap-4 ">
      <Link href={"/"} className="flex-shrink-0  ml-16 ">
        <Image src={"/Logo.png"} alt="Logo" width={150} height={25} />
      </Link>

      <div className="hidden mdm:flex gap-4 lg:gap-[3rem]">
        <Link href={"/#"}>Female</Link>
        <Link href={"/#"}>Male</Link>
        <Link href={"/#"}>Kids</Link>
        <Link href={"/#"}>All Products</Link>
      </div>
      <SearchIcon />

      <div className="relative flex mdm:hidden">
        {!buttonState && (
          <button type="button" onClick={() => setButtonState(true)}>
            <RiMenu3Line fontSize={27} />
          </button>
        )}
        {buttonState && (
          <button type="button" onClick={() => setButtonState(false)}>
            <RiCloseLine fontSize={27} />
          </button>
        )}
      </div>
      <Link
        href={"/shopingCart"}
        className="  hidden mdm:flex transition  transform ease-in-out hover:-translate-y-1 hover:scale-110   duration-500  p-3 rounded-full bg-gray-300 "
      >
        <ShoppingCart className="relative" />
        <span className="absolute top-0 right-0 h-[18px] w-[18px] text-center rounded-full bg-[#f02d34] text-white text-sm">
          0
        </span>
      </Link>
    </nav>
  );
}
