"use client";

import { urlFor } from "../../../sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { CartItem, useCartContext } from "@/app/Context/cartProvider";

type productPorps = {
  image: string;
  Images: string[];
  productName: string;
  productColors: string[];
  subcategory: string;
  price: number;
};
type Size = "XS" | "S" | "M" | "L" | "XL";

export default function ProductPageComp({
  image,
  Images,
  productName,
  productColors,
  subcategory,
  price,
}: productPorps) {
  const { addToCart } = useCartContext();

  const [showImage, setShowImage] = useState<string>(image);
  const allImages = [image, ...Images];
  const [count, setCount] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelection = (color: any) => {
    setSelectedColor(color);
  };

  const handleSizeSelection = (size: Size) => {
    setSelectedSize(size);
  };

  function incrementCount() {
    count < 10 && setCount(count + 1);
  }
  function decrementCount() {
    count > 1 && setCount(count - 1);
  }
  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      const dataObject: CartItem = {
        Image: image,
        Name: productName,
        Subcategory: subcategory,
        Count: count,
        Price: price,
        Color: selectedColor,
        Size: selectedSize,
      };

      addToCart(dataObject);
    }
  };

  const handleThumbnailHover = (index: number) => {
    setShowImage(allImages[index]);
  };

  return (
    <div className="px-5 sm:px-10 mdm:px-16 2xl:px-24 py-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex gap-2 sm:gap-4 ">
          <div className="flex flex-col gap-2">
            {allImages.map((src: any, index: number) => (
              <Image
                key={index}
                src={urlFor(src).url()}
                width={120}
                height={140}
                alt="images"
                onMouseEnter={() => handleThumbnailHover(index)}
                className=" hover:border hover:border-gray-400 hover:border-spacing-4  max-sm:w-full "
              />
            ))}
          </div>
          <div>
            {showImage && (
              <Image
                src={urlFor(showImage)?.url()}
                width={900}
                height={750}
                alt="images"
                className=""
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-12 lg:gap-8 items-center pt-12 lg:pt-32 pl-4 mx-auto">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-2xl sm:text-3xl lg:text-2xl  xl:text-[2.5rem] font-semibold">
              {productName}
            </h1>
            <span className=" text-lg font-bold text-gray-500">
              {subcategory}
            </span>
          </div>

          <div className="flex gap-2 sm:gap-4 lg:gap-4 xl:gap-7 ">
            <button
              className={`sizeBtn ${selectedSize === "XS" ? "selected" : ""}`}
              onClick={() => handleSizeSelection("XS")}
            >
              XS
            </button>
            <button
              className={`sizeBtn ${selectedSize === "S" ? "selected" : ""}`}
              onClick={() => handleSizeSelection("S")}
            >
              S
            </button>
            <button
              className={`sizeBtn ${selectedSize === "M" ? "selected" : ""}`}
              onClick={() => handleSizeSelection("M")}
            >
              M
            </button>
            <button
              className={`sizeBtn ${selectedSize === "L" ? "selected" : ""}`}
              onClick={() => handleSizeSelection("L")}
            >
              L
            </button>
            <button
              className={`sizeBtn ${selectedSize === "XL" ? "selected" : ""}`}
              onClick={() => handleSizeSelection("XL")}
            >
              XL
            </button>
          </div>
          <div className=" flex items-center justify-center gap-3">
            {productColors?.map((colors, index) => (
              <button
                key={index}
                style={{ backgroundColor: colors }}
                onClick={() => handleColorSelection(colors)}
                className={`h-6 w-6 rounded-full ring-2 ring-offset-1 ring-gray-400 btn ${
                  selectedColor === colors ? "ring-gray-800" : ""
                }`}
              ></button>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <button
              className="h-8 w-8  shadow rounded-full hover:bg-zinc-50 font-bold"
              onClick={decrementCount}
            >
              ━
            </button>
            <p className=" text-lg">{count}</p>
            <button
              className="h-8 w-8 shadow rounded-full hover:bg-zinc-50 text-black text-2xl "
              onClick={incrementCount}
            >
              ＋
            </button>
            {/* <p className=" text-red-600">{warning}</p> */}
          </div>
          <div className="flex items-center justify-between gap-6 sm:gap-12 lg:gap-6 xl:gap-20">
            <button
              className="flex text-lg font-semibold  bg-stone-400 text-white rounded-sm px-3 py-2 btn "
              onClick={handleAddToCart}
            >
              <ShoppingCartIcon /> Add to Cart
            </button>
            <p className=" text-2xl xl:text-3xl font-semibold text-neutral-500">{`$${
              price * count
            }`}</p>
          </div>
        </div>
      </div>
      <div className="relative py-24 xl:px-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          Product Information
        </h2>
        {/* <div className="absolute  inset-y-12">
          <h1 className="  text-7xl font-extrabold text-gray-100">Overveiw</h1>
        </div> */}
        <div className="flex flex-col gap-20 border-t-2 ">
          <div className=" flex flex-col sm:flex-row gap-6">
            <h2 className="text-2xl sm:w-[30%] font-semibold text-gray-500">
              PRODUCT DETAILS
            </h2>
            <p className=" sm:w-[70%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <h2 className="sm:w-[30%] text-2xl font-semibold text-gray-500">
              PRODUCT CARE
            </h2>
            <ul className=" sm:w-[70%] ml-4 sm:ml-6 list-disc font-bold text-lg">
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
