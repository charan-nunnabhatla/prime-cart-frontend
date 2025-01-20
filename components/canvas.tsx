"use client";

import dynamic from "next/dynamic";

const Player = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Canvas() {
  return (
    <div className="grid grid-rows-[auto,1fr,1fr,1fr] grid-cols-3 hover:cursor-pointer size-full bg-transparent border">
      <h1
        className="flex items-end justify-center col-span-3 col-start-1 row-start-1 px-4 py-2 mt-16 text-4xl text-white border "
        style={{ fontFamily: "custom" }}>
        Search Across 1.4M+ Products
      </h1>
      <div className=""></div>
    </div>
  );
}
