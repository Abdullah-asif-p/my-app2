import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import CartIcon from "../navbar/cartIcon";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          <RiCloseLine className="text-2xl" />
        </button>

        <ul className="flex flex-col gap-8 items-center justify-center  leading-relaxed text-xl">
          <li onClick={toggle}>
            <CartIcon />
          </li>
          <li onClick={toggle}>
            <Link href={"/male"} className="hover:text-gray-600">
              Male
            </Link>
          </li>
          <li onClick={toggle}>
            <Link href={"/female"} className="hover:text-gray-600">
              Female
            </Link>
          </li>
          <li onClick={toggle}>
            <Link href={"/allProducts"} className="hover:text-gray-600">
              All Products
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
