"use client";
import MProducts from "../Lib/products";
import Link from "next/link";
import { urlFor } from "../../../sanity/lib/client";
import { GetDataType, getallData } from "../Lib/GetData";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
export default function SwiperComponent({ data }: { data: GetDataType[] }) {
  return (
    <div className="max-xsm:p-0 max-sm:px-8 ">
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

          // width >= 950
          950: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          // width >= 1200
          1200: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          // width >= 1200
          1800: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          2250: {
            slidesPerView: 4,
            spaceBetween: 120,
          },
          2500: {
            slidesPerView: 5,
            spaceBetween: 120,
          },
        }}
        modules={[A11y, Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={3}
        className="object-fit items-center"
      >
        <div className="">
          {data.map((product: GetDataType, index: number) => (
            <div key={index}>
              {index <= 9 && (
                <SwiperSlide>
                  <Link href={`/allProducts/${product.slug}`}>
                    <div className="p-4 my-2 transition ease-in-out hover:scale-105   duration-700 ">
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
        </div>
      </Swiper>
    </div>
  );
}
