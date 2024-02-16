import Image from "next/image";
import Link from "next/link";

type mProductsProps = {
  src: string;
  text: string;
  price: string;

  width: number;
  height: number;
};

export default function MProducts({
  src,
  text,
  price,
  width,
  height,
}: mProductsProps) {
  return (
    <>
      <Image
        src={src}
        width={width}
        height={height}
        alt="image"
        className="object-cover"
      />
      <p className=" font-semibold text-base flex flex-col mt-2">
        {text}
        <span>{price}</span>
      </p>
    </>
  );
}
