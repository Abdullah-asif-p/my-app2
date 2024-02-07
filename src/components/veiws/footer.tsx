import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative">
      <h1 className="absolute top-[-5%] right-0  text-3xl sm:text-4xl 2xl:text-5xl  text-right font-semibold">
        Unique and Authentic Vintage Designer Jewellery
      </h1>

      <div className=" flex flex-col md:flex-row justify-center items-center bg-slate-50 px-8  pt-16 md:px-32 md:py-16 gap-20 md:gap-40">
        <div className=" relative flex items-center justify-center mdm:w-[70%] w-full">
          <div className="flex justify-between items-center">
            <div className="absolute inset-0 flex items-center justify-center  text-gray-300 mdm:text-[6.875rem] mdm:leading-[110px] opacity-45 text-6xl font-extrabold">
              Different from others
            </div>
            <div className="grid grid-cols-2 gap-20 mdm:gap-32">
              <div className=" flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  Using Good Quality Materials
                </h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div className=" flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  100% Handmade Products
                </h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div className=" flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Modern Fashion Design</h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div className=" flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  Discount for Bulk Orders
                </h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          <Image
            src={"/footer1.webp"}
            alt="Image"
            width={300}
            height={350}
            className=" "
          />
          <div className=" flex flex-col gap-4">
            <p>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className=" bg-black text-white w-[60%] p-1 text-lg">See All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
}
