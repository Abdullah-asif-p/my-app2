"use client";

import { urlFor } from "../../../sanity/lib/client";
import { CartItem, useCartContext } from "@/app/Context/cartProvider";
import "swiper/css";
import "swiper/css/pagination";
import ProductItem from "./cartItem";
import StripeCheckOutButton from "@/app/Checkout";
import { GetDataType } from "./GetData";
import SwiperComponent from "./swipperCompenet";
import { LuShoppingBag } from "react-icons/lu";

type ProductItemProps = {
  product: CartItem;
  index: number;
  deleteItem: (index: number) => void;
  pCount: number;
};

export default function ShoppingCart({ data }: { data: GetDataType[] }) {
  const { cart, total } = useCartContext();
  let tax: number = Math.round(total * 0.17);

  return (
    <div className="px-5 sm:px-10 mdm:px-16 2xl:px-24 py-10 md:py-16 ">
      <h2 className=" text-3xl font-bold text-gray-600 ">Shopping Cart</h2>
      {cart.length === 0 && (
        <>
          <div className=" scale-75">
            <SwiperComponent data={data} />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center mt-12 text-3xl font-bold">
            <LuShoppingBag className="max-sm:text-6xl md:text-7xl 2xl:text-8xl"/>
            <p>Cart is Empty</p>
          </div>
        </>
      )}
      <div className="flex flex-col xl:flex-row justify-between py-8  gap-16 2xl:gap-8">
        <div className="flex flex-row flex-wrap sm:flex-col sm:items-start gap-2 xsm:gap-4 sm:gap-6  w-full xl:w-[70%] ">
          {cart?.map((product: CartItem, index: number) => (
            <ProductItem
              key={index}
              index={index}
              product={product}
              pCount={product.Count}
            />
          ))}
        </div>
        {cart.length > 0 && (
          <div className=" flex flex-col items-center xl:w-[30%] 2xl:w-[25%]">
            <div className="flex flex-col shadow justify-center  text-gray-700 bg-[#F9F2EE] rounded-lg px-4 py-16 gap-6 text-lg w-full  ">
              <h1 className=" text-2xl mdm:text-4xl font-semibold text-gray-800 mb-10 text-center">
                Order Summary
              </h1>
              <p className="flex justify-between border-b-2 text-xl sm:text-2xl">
                Subtotal <span className=" text-gray-500">{`$${total}`}</span>
              </p>
              <div>
                <div className="flex justify-between text-lg sm:text-xl">
                  <p>
                    Tax
                    <span className="text-base"> (Calculated on Checkout)</span>
                  </p>
                  <button className=" text-gray-500">{`$${0}`}</button>
                </div>

                <p className="flex justify-between text-lg sm:text-xl">
                  Shipping
                  <span className="text-gray-500">$10</span>
                </p>
              </div>
              <h2 className="flex text-xl sm:text-2xl justify-between border-t-2">
                Total: <span>{`$${total + 10}`}</span>
              </h2>
              <div className="flex items-center justify-center">
                {cart && <StripeCheckOutButton products={cart} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
