export default function Products() {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4 mt-16 mx-24 ">
      <div className="col-span-2 bg-slate-400">02</div>
      <div className="col-span-2 bg-blue-500">03</div>
      <div className="row-span-2 bg-blue-700">01</div>
      <div className="row-span-2  bg-blue-500">03</div>
    </div>
  );
}
