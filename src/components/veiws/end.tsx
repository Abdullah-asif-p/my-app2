import Link from "next/link";
import Image from "next/image";
export default function End() {
  return (
    <div className="flex flex-row items-start justify-between px-16 pt-8 sm:pr-80 sm:pl-24 sm:pt-24 mb-24">
      <div className=" flex flex-col gap-14">
        <Link href={"/"} className="flex-shrink-0">
          <Image src={"/Logo.png"} alt="Logo" width={200} height={40} />
        </Link>
        <p className="">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className=" flex gap-5 ">
          <Link href={"/"} className=" rounded-md bg-gray-200 py-2 px-2">
            <svg
              enable-background="new 0 0 56.693 56.693"
              height="30px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 56.693 56.693"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z" />
            </svg>
          </Link>
          <Link href={"/"} className=" rounded-md bg-gray-200 py-2 px-2">
            <svg
              enable-background="new 0 0 56.693 56.693"
              height="30px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 56.693 56.693"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
            </svg>
          </Link>
          <Link href={"/"} className=" rounded-md bg-gray-200 py-2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 1792"
              width="30px"
              height="30px"
            >
              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col items-start justify-start pt-4 gap-4 text-gray-500">
        <h3 className="text-xl font-bold ">Company</h3>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Terms of Use</Link>
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>How it Works</Link>
        <Link href={"/"}>Contact Us</Link>
      </div>
      <div className=" flex flex-col items-start justify-start pt-4  gap-4 text-gray-500">
        <h3 className="text-xl font-bold ">Support</h3>
        <Link href={"/"}>Support Carrer</Link>
        <Link href={"/"}>24h Service</Link>
        <Link href={"/"}>Quick Chat</Link>
      </div>
      <div className=" flex flex-col items-start justify-start pt-4 gap-4 text-gray-500">
        <h3 className="text-xl font-bold ">Contact</h3>
        <Link href={"/"}>Whatsapp</Link>
        <Link href={"/"}>Support 24h</Link>
      </div>
    </div>
  );
}
