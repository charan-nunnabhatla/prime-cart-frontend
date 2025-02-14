"use client";
import { fetchProductData, productDataType } from "@/atoms";

// import dynamic from "next/dynamic";
import { CiSearch } from "react-icons/ci";
import fetchData from "@/network/fetch-data";
import { ChangeEvent, FormEvent } from "react";
import { useSetAtom } from "jotai";

// const Player = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Canvas() {
  const setProdutsData = useSetAtom(fetchProductData);

  const handleChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const data = Object.fromEntries(formdata.entries());
    const result = await fetchData(data["search-input"] as string);
    setProdutsData(result);
  };

  return (
    <div className="relative flex flex-col h-full w-full bg-transparent">
      <h1
        className="flex items-start mt-16 text-[clamp(1.6rem,calc(5vw+1px),3.5rem)] justify-center col-span-3 px-4 text-white"
        style={{ fontFamily: "custom" }}>
        Search Across 1.4M+ Products
      </h1>
      <div className="flex flex-col justify-start h-full w-full items-center p-3">
        <form
          onSubmit={(e) => handleChange(e)}
          id="input-section"
          className=" mb-4 relative group h-10 w-3/4 md:w-1/2 lg:w-2/5 rounded-full">
          <input
            type="text"
            name="search-input"
            placeholder="Search"
            className="border-none focus:ring focus:ring-blue-400 duration-150 outline-none group-hover:ring-blue-400 group-hover:ring w-full h-full px-4 py-2 text-xl rounded-full "
          />
          <button type="submit">
            <CiSearch className="hover:text-blue-400 duration-150 absolute top-[50%] -translate-y-[50%] right-5 text-2xl font-extrabold hover:cursor-pointer" />
          </button>
        </form>
        {/* <div className=" absolute left-[20%] top-[50%] p-3 size-fit">
          <Player
            animationData={fruitBasketData}
            play
            className="items-center justify-center duration-150 size-[clamp(10rem,5vw,13rem)]"
          />
        </div> */}
      </div>
    </div>
  );
}
