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
      <div className="flex justify-between gap-2 ">
        <div className=" flex-[2] flex-col gap-1 ">
          <div className=" bg-slate-400  justify-between item-center">
            <div className="content">
              <h3>
                GET UP TO <span>60%</span>
              </h3>
              <p>For the summer season</p>
            </div>
            <Image
              src={"/Images/event1.png"}
              alt="img"
              width={260}
              height={260}
            />
          </div>
          <div className="flex flex-col justify-center items-center text-white bg-[#212121]">
            <h3 className=" text-4xl font-extrabold">GET 30% Off</h3>
            <p>USE PROMO CODE</p>
            <button className=" bg-gray-500 p-1 px-4 rounded-lg">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className="bg-slate-500 ">
          <div className="">
            <div className="">
              <p>Flex Sweatshirt</p>
              <div className="">
                <span>$100.00</span>
                <span>$75.00</span>
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
        <div className="bg-slate-500 ">
          <div className="">
            <div className="">
              <p>Flex Sweatshirt</p>
              <div className="">
                <span>$100.00</span>
                <span>$75.00</span>
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
