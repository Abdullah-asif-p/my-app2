"use client";
import MProducts from "../Lib/products";
import Link from "next/link";
import { urlFor } from "../../../sanity/lib/client";
import { GetDataType, getallData } from "../Lib/GetData";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

export default function MidProducts({ data }: { data: GetDataType[] }) {
  return (
    <div className="flex gap-12 flex-col px-8  pt-8 xl:px-16 2xl:px-24 sm:px-11 md:pt-24 mb-36">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <span className=" text-blue-700 font-semibold ">PRODUCTS</span>
        <h3 className="text-4xl font-bold ">Check What We Have</h3>
      </div>
      <div className="h-full w-full">
        <Swiper
          breakpoints={{
            // width >= 300
            300: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            // width >= 1000
            950: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            // width >= 1260
            1200: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            2500: {
              slidesPerView: 4,
              spaceBetween: 140,
            },
          }}
          modules={[A11y, Autoplay]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={3}
          className="object-cover w-full h-full"
        >
          {data.map((product: GetDataType, index: number) => (
            <div key={index}>
              {index <= 9 && (
                <SwiperSlide>
                  <Link href={`/allProducts/${product.slug}`}>
                    <div className="p-3 my-2 transition ease-in-out hover:scale-105  duration-700 ">
                      <MProducts
                        src={urlFor(product.image).url()}
                        // src={product.image}
                        productColors={product.productColors}
                        price={`${product.price}`}
                        text={product.productName}
                        width={450}
                        height={500}
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              )}
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
