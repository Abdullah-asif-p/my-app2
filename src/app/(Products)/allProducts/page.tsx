import EproductData from "@/components/veiws/components/eProducts";
import MProducts from "@/components/veiws/components/products";

export default function All() {
  return (
    <div className=" px-24 2xl:px-36 py-16">
      <div className="grid grid-cols-2 mdm:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-8">
        {EproductData.map((product, index) => (
          <div className="pb-2 px-2">
            <MProducts
              key={index}
              src={product.src}
              href={product.href}
              price={product.price}
              text={product.text}
              width={product.width}
              height={product.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
