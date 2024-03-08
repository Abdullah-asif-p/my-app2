import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import Image from "next/image";
import CartIcon from "./cartIcon";
import SearchIcon from "@/components/icons/searchIcon";

export default function Navbar({ toggle }: { toggle: () => void }) {
  return (
    <nav className="flex relative justify-between items-center xl:px-20 sm:px-10 px-4 py-6 gap-4 ">
      <button
        type="button"
        className="inline-flex items-center mdm:hidden"
        onClick={toggle}
      >
        <RiMenu3Line className="text-2xl" />
      </button>
      <Link href={"/"} className="flex-shrink-0  ">
        <Image src={"/Logo.png"} alt="Logo" width={150} height={50} />
      </Link>
      <div className="mdm:hidden block">
        <CartIcon />
      </div>
      <div className="hidden mdm:flex text-lg text-gray-400  font-medium gap-4 lg:gap-[3rem]">
        <Link href={"/female"} className="hover:text-gray-600">
          Female
        </Link>
        <Link href={"/male"} className="hover:text-gray-600">
          Male
        </Link>
        {/* <Link href={"/kids"}>Kids</Link> */}
        <Link href={"/allProducts"} className="hover:text-gray-600">
          All Products
        </Link>
      </div>
      <SearchIcon />

      <div className="hidden mdm:block">
        <CartIcon />
      </div>
    </nav>
  );
}
