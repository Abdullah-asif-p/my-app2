import Image from "next/image";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative flex justify-between gap-16 mt-16 mx-24">
      <div className="flex flex-1 flex-col justify-between pt-12 pb-4 ">
        <div className=" flex flex-col justify-center gap-8 ">
          <span className="bg-blue-100 w-[25%]  font-semibold text-center text-blue-800 rounded-md p-2 ">
            Sale 70%
          </span>
          <h1 className=" text-6xl font-bold">
            An Industrial Take on Streetwear
          </h1>
          <p className="w-[60%]  text-gray-500">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link
            href={"/allProduct"}
            className="flex items-center gap-2 transition  transform ease-in-out hover:-translate-y-1 hover:scale-105 duration-500 text-white border-gray-400 border-2 text-lg bg-gray-900 font-semibold w-[35%] text-center p-2 "
          >
            <ShoppingCart className="ml-2" />
            Start Shoping
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Image
            src={"/Images/Featured1.png"}
            width={100}
            height={35}
            alt="img"
          />
          <Image
            src={"/Images/Featured2.png"}
            width={100}
            height={35}
            alt="img"
          />
          <Image
            src={"/Images/Featured3.png"}
            width={100}
            height={35}
            alt="img"
          />
          <Image
            src={"/Images/Featured4.png"}
            width={100}
            height={35}
            alt="img"
          />
        </div>
      </div>
      <div className="hidden flex-1 lg:flex ">
        <div className="w-[600px] h-[600px] absolute top-[-5%] right-[-3%] bg-[#FFECE3] rounded-[50%] ">
          <Image
            src={"/Images/header.png"}
            alt="header"
            height={650}
            width={650}
            className=" h-[650px] absolute top-[-5%] "
          />
        </div>
      </div>
    </header>
  );
}
