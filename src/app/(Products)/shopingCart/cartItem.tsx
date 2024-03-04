"use client";
// import { CartItem, useCartContext } from "@/app/Context/cartProvider";
import { useEffect, useState } from "react";
import { urlFor } from "../../../../sanity/lib/client";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { CartItem, useCartContext } from "@/app/Context/cartProvider";

type ProductItemProps = {
  product: CartItem;
  index: number;
  pCount: number;
};

export default function ProductItem({
  product,
  index,
  pCount,
}: ProductItemProps) {
  const { incrementCount, decrementCount, deleteItemFromCart } =
    useCartContext();

  return (
    <div className=" relative shadow rounded-xl flex flex-col sm:w-full  sm:flex-row items-center sm:items-start gap-2 sm:gap-8 mdm:gap-12  bg-[#FEFEFA] ">
      <Image
        src={urlFor(product.Image)?.url()}
        width={180}
        height={200}
        alt="image"
        className="shadow rounded-2xl  w-[150px] h-[160px] xsm:h-[200px] xsm:w-[180px]"
      />
      <div className="flex flex-col items-center sm:items-start gap-1 xsm:gap-3 sm:gap-5 mt-1 ">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl sm:text-2xl   text-gray-700">{product.Name}</h3>
          <p className=" text-base sm:text-lg text-gray-400">{product.Subcategory}</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 pt-2">
          <button
            className="h-6 w-6 rounded-full font-semibold text-xs shadow hover:bg-zinc-200"
            onClick={() => decrementCount(index)}
          >
            ━
          </button>
          <span className="text-base">{pCount}</span>
          <button
            className="h-6 w-6 rounded-full font-semibold shadow hover:bg-zinc-200"
            onClick={() => incrementCount(index)}
          >
            ＋
          </button>
        </div>
        <div className="flex gap-4 sm:gap-12 text-xs sm:text-sm  mt-4 items-center text-gray-500 w-full  ">
          <p>
            Size: <span>{product.Size}</span>
          </p>
          <div className="flex items-center">
            <p>Color:</p>
            <p
              style={{ backgroundColor: product.Color }}
              className={`h-3 w-3 sm:w-4 sm:h-4 rounded-full ml-1sm:ml-2`}
            ></p>
          </div>
        </div>
      </div>
      <p className="sm:absolute sm:right-0 sm:top-2 sm:mt-2 sm:mr-2 font-semibold text-gray-500 text-base md:text-lg">{`$${
        product.Price * pCount
      }`}</p>
      <div className="sm:absolute sm:right-4 bottom-0 text-gray-500">
        <button onClick={() => deleteItemFromCart(index)}>
          <MdDeleteOutline className="text-black h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] font-medium" />
        </button>
      </div>
    </div>
  );
}
