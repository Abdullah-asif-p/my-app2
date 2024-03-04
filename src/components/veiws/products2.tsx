import Image from "next/image";
import Link from "next/link";

export default function Products2() {
  return (
    <section className=" px-8  pt-16 xl:px-24 sm:px-11 sm:pt-32">
      <div className=" flex flex-col gap-4 mb-14 items-center justify-center ">
        <span className=" text-blue-600 tracking-widest font-extrabold text-sm font-mono">
          PROMOTIONS
        </span>
        <h2 className=" text-4xl">Our Promotions Events</h2>
      </div>
      <div className="flex mdm:flex-row flex-col justify-between gap-8">
        <div className=" flex mdm:flex-1 2xl:flex-2  flex-col gap-8">
          <div className="flex flex-col mdm:flex-row xl:justify-between justify-center  items-center bg-slate-200 ">
            <div className="px-4 ">
              <h3 className=" text-3xl font-bold">
                GET UP TO <span className=" font-extrabold text-4xl ">60%</span>
              </h3>
              <p>For the summer season</p>
            </div>
            <Image
              src={"/Images/event1.png"}
              alt="img"
              width={260}
              height={200}
            />
          </div>
          <div className=" bg-slate-200 ">
            <div className="flex flex-col justify-center items-center text-white bg-[#212121] pt-12 pb-8 px-8 ">
              <h3 className="text-2xl sm:text-4xl font-extrabold mb-4 ">
                GET 30% Off
              </h3>
              <p>USE PROMO CODE</p>
              <button className="text-sm sm:text-lg font-bold tracking-[0.25rem] mt-1  bg-[#474747] py-1 px-4 sm:py-2 sm:px-10 rounded-lg">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
        </div>
        <div className="flex  flex-row gap-2 sm:gap-8  justify-between mdm:justify-evenly items-center ">
          <Link href={"/allProducts/raglan-t-shirt"} className="bg-zinc-200">
            <div className="p-1 sm:p-3">
              <p className=" text-xs sm:text-lg line-clamp-1">Raglan T-Shirt</p>
              <span className="text-[0.5rem] sm:text-base line-through font-light">
                $100.00
              </span>
              <span className="text-xs sm:text-lg  ml-1">$75.00</span>
            </div>
            <Image
              src={"/Images/event2.png"}
              alt="img"
              width={280}
              height={360}
              className="object-fit  pt-1"
            />
          </Link>

          <Link
            href={"/allProducts/flex-push-button-bomber"}
            className="bg-zinc-200"
          >
            <div className="flex flex-col justify-between">
              <div className=" p-1 sm:p-3">
                <p className=" text-xs sm:text-lg line-clamp-1 ">
                  Flex Push Button bomber
                </p>
                <span className="text-[0.5rem] sm:text-base line-through font-light">
                  $225.00
                </span>
                <span className="text-xs sm:text-lg  ml-1">$190.00</span>
              </div>
              <Image
                src={"/Images/event3.png"}
                alt="img"
                width={280}
                height={360}
                className="object-fit pt-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
