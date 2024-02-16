"use client";
import MProducts from "./components/products";
import productData from "./components/mProductsData";
import Link from "next/link";

export default function MidProducts() {
  return (
    <div className="flex gap-12 flex-col px-8  pt-8 xl:px-16 2xl:px-24 sm:px-11 md:pt-24 mb-36">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <span className=" text-blue-700 font-semibold ">PRODUCTS</span>
        <h3 className="text-4xl font-bold ">Check What We Have</h3>
      </div>
      <div className={`flex-1 flex-row items-center justify-between`}>
        {productData.map((product, index) => (
          <div className=" transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-700 ">
            <Link href={product.href}>
              <MProducts
                key={index}
                src={product.src}
                price={product.price}
                text={product.text}
                width={product.width}
                height={product.height}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
