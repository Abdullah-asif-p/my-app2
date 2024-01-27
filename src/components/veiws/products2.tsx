import Image from "next/image";

export default function Products2() {
  return (
    <section className=" px-8  pt-16 sm:px-24 sm:pt-32">
      <div className=" flex flex-col gap-4 mb-14 text-center">
        <span className=" text-blue-600 tracking-widest font-extrabold text-sm font-mono">
          PROMOTIONS
        </span>
        <h2 className=" text-4xl">Our Promotions Events</h2>
      </div>
      <div className="flex mdm:flex-row flex-col justify-between gap-8">
        <div className=" flex flex-2 flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between  items-center bg-slate-200 ">
            <div className="px-5 ">
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
        <div className="flex flex-1 flex-row gap-2 sm:gap-8  justify-between mdm:justify-evenly items-center">
          <div className="bg-zinc-200">
            <div className="p-1 sm:p-5">
              <p>Flex Sweatshirt</p>
              <span className="text-sm sm:text-base  line-through font-light">
                $100.00
              </span>
              <span className="text-sm sm:text-lg  ml-1">$75.00</span>
            </div>
            <Image
              src={"/Images/event2.png"}
              alt="img"
              width={280}
              height={340}
              className="object-contain sm:object-none sm:h-[340px] sm:w-[280px] pt-1"
            />
          </div>
          <div className="bg-zinc-200">
            <div className="flex flex-col justify-between">
              <div className=" p-1 sm:p-5">
                <p className=" text-base sm:text-sm ">Flex Sweatshirt</p>
                <span className="text-sm sm:text-base line-through font-light">
                  $225.00
                </span>
                <span className="text-sm sm:text-lg ml-1">$190.00</span>
              </div>
              <Image
                src={"/Images/event3.png"}
                alt="img"
                width={280}
                height={340}
                className="object-contain sm:object-none sm:h-[340px] sm:w-[280px] pt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
