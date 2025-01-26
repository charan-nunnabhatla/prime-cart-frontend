import { productDataType } from "@/atoms";
import Image from "next/image";

export default function Card(props: productDataType) {
  console.log("Card prorps: ", props);
  return (
    <div key={props.asin} className="rounded h-auto w-fit p-2 bg-orange-300">
      <Image alt={props.title} src={props.imgURL as string} width={150} height={150} className=" object-cover "/>
    </div>
  );
}
