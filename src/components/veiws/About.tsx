import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative flex flex-col mdm:flex-row items-center justify-center bg-slate-50 px-5 sm:px-10 mdm:px-16 2xl:px-24 py-16  gap-24 2xl:gap-96">
      <h1 className="absolute top-[-4%] sm:top-[-7%] right-0   text-2xl sm:text-4xl 2xl:text-5xl  text-right font-semibold">
        Unique and Authentic Vintage Designer Jewellery
      </h1>
      <div className="relative">
        <div className="flex justify-between items-center">
          <div className="absolute inset-0 flex items-center justify-center  text-gray-200 text-[5.5rem] mdm:text-[6.875rem] mdm:leading-[110px] opacity-45  font-extrabold">
            <p>Different from others</p>
          </div>
          <div className="grid grid-cols-2 gap-16 2xl:gap-32">
            <div className=" flex flex-col gap-2
             mdm:w-40">
              <h3 className="text-lg font-semibold ">
                Using Good Quality Materials
              </h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className=" flex flex-col gap-2  mdm:w-40">
              <h3 className="text-lg font-semibold">100% Handmade Products</h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className=" flex flex-col gap-2   mdm:w-40">
              <h3 className="text-lg font-semibold">Modern Fashion Design</h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className=" flex flex-col gap-2  mdm:w-40">
              <h3 className="text-xl font-semibold">
                Discount for Bulk Orders
              </h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <Image
          src={"/footer1.webp"}
          alt="Image"
          width={300}
          height={350}
          className="h-[350px] w-[300px]"
        />
        <div className=" flex flex-col gap-4">
          <p className=" md:w-60 ">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
          <button className=" bg-black text-white p-1 ml-4 text-lg rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500">
            <Link href={"/allProducts"}>See All Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
