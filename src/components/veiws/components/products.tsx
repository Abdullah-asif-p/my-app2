import Image from "next/image";
import Link from "next/link";

type mProductsProps = {
  src: string;
  text: string;
  price: string;
  href: string;
  width: number;
  height: number;
};

export default function MProducts({
  src,
  text,
  price,
  href,
  width,
  height,
}: mProductsProps) {
  return (
    <>
      <Link href={href}>
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
      </Link>
    </>
  );
}
