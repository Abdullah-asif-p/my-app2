"use client";

import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/client";
import { MdDeleteOutline, MdLock, MdModeEditOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { CartItem, useCartContext } from "@/app/Context/cartProvider";

import ProductItem from "./cartItem";

type ProductItemProps = {
  product: CartItem;
  index: number;
  deleteItem: (index: number) => void;
  pCount: number;
};

export default function ShoppingCart() {
  const { cart, total } = useCartContext();

  return (
    <div className="px-5 sm:px-10 mdm:px-16 2xl:px-24 py-10 md:py-16 ">
      <h2 className=" text-3xl font-bold text-gray-600 ">Shopping Cart</h2>
      <div className="flex flex-col xl:flex-row justify-between py-8 mdm:py-16 gap-8">
        <div className="flex flex-row flex-wrap sm:flex-col sm:items-start gap-2 xsm:gap-4 sm:gap-6 justify-around w-full xl:w-[70%] ">
          {cart?.map((product: CartItem, index: number) => (
            <ProductItem
              key={index}
              index={index}
              product={product}
              pCount={product.Count}
            />
          ))}
        </div>
        <div className=" flex flex-col items-center xl:w-[30%]">
          <div className="flex flex-col shadow justify-center  text-gray-700 bg-[#F9F2EE] rounded-lg px-4 py-6 gap-4 text-lg w-full  ">
            <h1 className=" text-2xl mdm:text-3xl font-semibold text-gray-800 pb-2 text-center">
              Order Summary
            </h1>
            <p className="flex justify-between border-b-2 text-xl">
              Subtotal <span className=" text-gray-500">$10</span>
            </p>
            <p className="flex justify-between ">
              Promo Code <button className=" text-gray-500">+</button>
            </p>

            <div className="flex flex-col gap-4 justify-between border-y-2 py-2 text-lg  ">
              <p className="flex justify-between ">
                Tax
                <span className="text-gray-500">17%</span>
              </p>
              <p className="flex justify-between ">
                Shipping
                <span className="text-gray-500">$15</span>
              </p>
            </div>

            <h2 className="flex text-xl justify-between border-b-2">
              Total: <span>{`$${total}`}</span>
            </h2>
            <button className="flex items-center btn justify-center py-2 px-4 bg-neutral-600 text-white rounded-sm">
              <MdLock />
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
