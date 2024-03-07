"use client";
import MProducts from "../Lib/products";
import Link from "next/link";
import { urlFor } from "../../../sanity/lib/client";
import { GetDataType, getallData } from "../Lib/GetData";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import SwiperComponent from "../Lib/swipperCompenet";

export default function MidProducts({ data }: { data: GetDataType[] }) {
  return (
    <div className="flex gap-12 flex-col px-8  pt-8 xl:px-16 2xl:px-24 sm:px-11 md:pt-24 mb-36">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <span className=" text-blue-700 font-semibold ">PRODUCTS</span>
        <h3 className="text-4xl font-bold ">Check What We Have</h3>
      </div>
     <SwiperComponent data={data} />
    </div>
  );
}
