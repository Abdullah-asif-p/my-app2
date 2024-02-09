import MProducts from "./components/mProducts";
export default function MidProducts() {
  return (
    <div className="flex gap-12 flex-col px-8  pt-8 sm:px-16 sm:pt-24 mb-24">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <span className=" text-blue-700 font-semibold ">PRODUCTS</span>
        <h3 className="text-4xl font-bold ">Check What We Have</h3>
      </div>
      <div className="flex flex-row items-center justify-between px-16 md:px-32">
        <MProducts
          src={"/imagemid1.png"}
          text={"Brushed Raglan Sweatshirt"}
          price="$195"
          href="/page"
          hidden={false}
        />
        <MProducts
          src={"/imagemid2.png"}
          text={"Brushed Raglan Sweatshirt"}
          price="$195"
          href="/"
          hidden={true}
        />
        <MProducts
          src={"/imagemid3.png"}
          text={"Brushed Raglan Sweatshirt"}
          price="$195"
          href="/"
          hidden={true}
        />
      </div>
    </div>
  );
}
