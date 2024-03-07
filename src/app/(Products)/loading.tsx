"use client";
import { Skeleton } from "@/components/ui/skeleton";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className="relative items-center text-center justify-center px-5 sm:px-10 mdm:px-16 xl:px-24 2xl:px-32 py-16 h-full w-full">
      <div className=" my-[30rem]" > 
        <ClipLoader
          color={"sliver"}
          loading={true}
          size={40}
          speedMultiplier={1}
        />
      </div>
    </div>
  );
}
