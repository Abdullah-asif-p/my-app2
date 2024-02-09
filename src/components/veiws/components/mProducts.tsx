import Image from "next/image";
import Link from "next/link";

type mProductsProps = {
  src: string;
  text: string;
  price: string;
  href: string;
  hidden: boolean;
};

export default function MProducts({
  src,
  text,
  price,
  href,
  hidden,
}: mProductsProps) {
  return (
    <>
      {{ hidden } && (
        <div className=" transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-700 ">
          <Link href={href}>
            <Image
              src={src}
              width={380}
              height={400}
              alt="image"
              className="object-cover"
            />
            <p className=" font-semibold text-base flex flex-col mt-2">
              {text}
              <span>{price}</span>
            </p>
          </Link>
        </div>
      )}
    </>
  );
}
