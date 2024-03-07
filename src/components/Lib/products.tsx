import Image from "next/image";

type mProductsProps = {
  src: string;
  text: string;
  price: string;
  productColors: string[];
  width: number;
  height: number;
};

export default function MProducts({
  productColors,
  src,
  text,
  price,
  width,
  height,
}: mProductsProps) {
  return (
    <>
      <div className=" ">
        <Image
          src={src}
          width={width}
          height={height}
          alt="image"
          className="object-cover  max-xsm:scale-90  "
        />
      </div>

      <div className="flex flex-col  max-xsm:scale-90    ">
        <div className=" text-gray-500  justify-between items-center  text-lg flex mt-[-1rem] xsm:mt-2">
          <p className="">{text}</p>
          <span className="">{`$${price}`}</span>
        </div>
        <div className=" flex items-center justify-center mt-1 xsm:mt-0 gap-2">
          {productColors?.map((colors, index) => (
            <div
              key={index}
              style={{ backgroundColor: colors }}
              className={`h-4 w-4 rounded-full ring-1 ring-offset-1 ring-gray-400`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
