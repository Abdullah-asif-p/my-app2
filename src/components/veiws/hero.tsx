import Image from "next/image";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative flex justify-between gap-16 mt-16 mx-8 sm:mt-16 sm:mx-24 ">
      <div className="flex flex-1 flex-col justify-between ">
        <div className="flex flex-col justify-center gap-10">
          <span className="flex items-center justify-center bg-blue-100 h-[40px] w-[120px]  font-semibold  text-blue-800 rounded-md p-2  ">
            Sale 70%
          </span>
          <h1 className="2xl:text-6xl sm:text-lgx font-bold tracking-wide mdm:-tracking-[0.07em] xl:tracking-tight 2xl:tracking-wide">
            An Industrial Take on Streetwear
          </h1>
          <p className="w-[70%]  text-gray-500">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link
            href={"/allProduct"}
            className="flex  items-center gap-2 transition  transform ease-in-out hover:-translate-y-1 hover:scale-105 duration-500 text-white border-gray-400 border-2 text-lg bg-gray-900 font-semibold text-center px-24 py-4 mx-auto"
          >
            <ShoppingCart className="" />
            Start Shoping
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4 ">
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
      <div className="hidden mdm:flex flex-1 justify-evenly  ">
        <div className="w-[600px] h-[600px]   bg-[#FFECE3] rounded-[50%] header-circle">
          <Image
            src={"/Images/header.png"}
            alt="header"
            height={650}
            width={650}
            className="object-fill w-[650px] h-[650px] absolute top-[-5%] "
          />
        </div>
      </div>
    </header>
  );

}
