import Image from "next/image";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative flex justify-between gap-16 mt-16 px-5 sm:px-10 mdm:px-16 2xl:px-24 ">
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
            href={"/allProducts"}
            className="flex  items-center justify-center gap-2 btn hover:ring-2  hover:ring-offset-1 hover:ring-gray-900  text-white rounded-sm shadow text-lg xl:text-xl 2xl:text-2xl xl:mt10 2xl:mt-20 bg-sky-950 font-medium  px-8 2xl:py-6 2xl:px-12 xl:px-10 xl:py-5 py-4 mx-auto"
          >
            <ShoppingCart />
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
