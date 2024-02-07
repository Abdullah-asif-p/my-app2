import Image from "next/image";

export default function MidProducts() {
  return (
    <div className="flex gap-12 flex-col px-8  pt-16 sm:px-24 sm:pt-32">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <span className=" text-blue-700 font-semibold ">PRODUCTS</span>
        <h3 className="text-4xl font-bold ">Check What We Have</h3>
      </div>
      <div className="flex flex-row items-center justify-center px-32 mb-20 ">
        <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-700">
          <Image
            src={"/imagemid1.png"}
            width={380}
            height={400}
            alt="image"
            className="object-cover h-[400px] w-[380px]"
          />
          <p className=" font-semibold text-base flex flex-col mt-2">
            Brushed Raglan Sweatshirt
            <span>$195</span>
          </p>
        </div>

        <div className=" flex justify-between items-center ">
          <div className=" transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-700 ">
            <Image
              src={"/imagemid2.png"}
              width={380}
              height={400}
              alt="image"
              className="object-cover"
            />
            <p className=" font-semibold text-base flex flex-col mt-2">
              Brushed Raglan Sweatshirt
              <span>$195</span>
            </p>
          </div>
          <div className=" transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-700 ">
            <Image
              src={"/imagemid3.png"}
              width={380}
              height={400}
              alt="image"
              className="object-cover"
            />
            <p className="font-semibold text-base flex flex-col mt-2">
              Brushed Raglan Sweatshirt
              <span>$195</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
