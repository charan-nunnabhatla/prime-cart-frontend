"use client";

import dynamic from "next/dynamic";
import fruitBasketData from "@/asserts/fruit-basket.json";
import { CiSearch } from "react-icons/ci";
import fetchData from "@/network/fetch-data";

const Player = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Canvas() {
  return (
    <div className="relative flex flex-col h-full w-full bg-transparent">
      <h1
        className="flex items-start mt-16 text-[clamp(1.6rem,calc(5vw+1px),3.5rem)] justify-center col-span-3 px-4 text-white"
        style={{ fontFamily: "custom" }}>
        Search Across 1.4M+ Products
      </h1>
      <div className="flex justify-center h-full w-full items-start p-3 ">
        <div className="relative group h-10 w-3/4 md:w-1/2 lg:w-2/5 rounded-full">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => fetchData(e.target.value)}
            className="border-none focus:ring focus:ring-blue-400 duration-150 outline-none group-hover:ring-blue-400 group-hover:ring w-full h-full px-4 py-2 text-xl rounded-full "
          />
          <CiSearch className="hover:text-blue-400 duration-150 absolute top-[50%] -translate-y-[50%] right-5 text-2xl font-extrabold hover:cursor-pointer" />
        </div>
      </div>
      {/* <div className=" absolute left-[20%] top-[50%] p-3 size-fit">
        <Player
          animationData={fruitBasketData}
          play
          className="items-center justify-center duration-150 size-[clamp(10rem,5vw,13rem)]"
        />
      </div>
      <div className="absolute right-[20%] top-[50%] p-3 size-fit">
        <Player
          animationData={fruitBasketData}
          play
          className="items-center justify-center duration-150 size-[clamp(10rem,5vw,13rem)]"
        />
      </div> */}
    </div>
  );
}
