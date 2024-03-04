export default function Newsletter() {
  return (
    <div className="mx-2">
      <div className="relative flex flex-col items-center justify-center  my-10 ">
        <h1 className="text-4xl font-bold pb-4 mb-1">Subscribe Our Newsletter</h1>
        <div className="absolute inset-0 pt-16 flex items-center justify-center  text-gray-200 mdm:text-[6.875rem] mdm:leading-[110px] opacity-35 text-6xl font-extrabold">
          Newsletter
        </div>
        <h3 className=" pt-2 text-black ">
          Get the latest information and promo offers directly
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 w-full">
        <input
          type="search"
          id="default-search"
          className="block   py-2  outline-none ps-4 text-base  text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Input email address"
          required
        />
        <button className=" px-1 bg-black text-white text-base py-2  rounded-sm transition ease-in-out  hover:scale-105  duration-700 ">
          Get Started
        </button>
      </div>
    </div>
  );
}
