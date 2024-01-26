import Image from "next/image";
export default function Products() {
  return (
    <section className="pt-16 px-24">
      <div className=" flex flex-col gap-4 mb-12 text-center">
        <span className=" text-blue-600 tracking-widest font-extrabold text-sm font-mono">
          PROMOTIONS
        </span>
        <h2 className=" text-4xl">Our Promotions Events</h2>
      </div>
      <div className="flex justify-between gap-8 ">
        <div className="flex flex-[2] flex-col gap-4 ">
          <div className=" bg-[#d6d6d8]  flex justify-between items-center px-8 ">
            <div className="px-5  box-border">
              <h3 className=" text-3xl font-bold">
                GET UP TO <span className=" font-extrabold text-4xl ">60%</span>
              </h3>
              <p>For the summer season</p>
            </div>
            <Image
              src={"/Images/event1.png"}
              alt="img"
              width={260}
              height={260}
              className=" w-[260px] h-[200px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-white bg-[#212121] pt-12 pb-8 pr-8 ">
            <h3 className=" text-4xl font-extrabold mb-4 ">GET 30% Off</h3>
            <p>USE PROMO CODE</p>
            <button className=" text-lg font-bold tracking-[0.25rem] mt-1 bg-[#474747] py-2 px-10 rounded-lg">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className="bg-[#efe1c7] ml-4">
          <div className="">
            <div className="p-5">
              <p>Flex Sweatshirt</p>
              <div className="">
                <span className="line-through font-light">$100.00</span>
                <span className="text-lg ">$75.00</span>
              </div>
            </div>
            <Image
              src={"/Images/event2.png"}
              alt="img"
              width={260}
              height={260}
            />
          </div>
        </div>
        <div className="bg-[#d7d7d9] ">
          <div className="">
            <div className="p-5">
              <p>Flex Sweatshirt</p>
              <div className="">
                <span className="line-through font-light">$225.00</span>
                <span className="text-lg ">$190.00</span>
              </div>
            </div>
            <Image
              src={"/Images/event3.png"}
              alt="img"
              width={260}
              height={260}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
