"use client";

import { fetchProductData, productDataType } from "@/atoms";
import Canvas from "@/components/canvas";
import Card from "@/components/card";
import { useAtomValue } from "jotai";

export default function Home() {
  const productData = useAtomValue(fetchProductData);
  console.log("produts: ", productData);
  return (
    <main id="root" className="h-full w-full min-h-svh ">
      <div
        id="canva-root"
        className="relative h-[40%] w-full bg-gradient-to-b from-green-600 to-green-400">
        <Canvas />
      </div>
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(320px,auto))] gap-2 h-fit w-full p-3 bg-blue-400">
        {productData.map((value: productDataType) => {
          return <Card key={value.asin} {...value} />;
        })}
      </div>
    </main>
  );
}
