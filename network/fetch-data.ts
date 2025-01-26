import { fetchProductData, productDataType } from "@/atoms";
import { SetStateAction, useSetAtom } from "jotai";

export default async function fetchData(title: string ) {
  // const setProdutsData = useSetAtom(fetchProductData);
  //   console.log(title);

  const path = process.env.NEXT_PUBLIC_ngrokURL as string;

  const res = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // title: title,
    },
    body: JSON.stringify({ title }),
  });

  const data: productDataType[] = await res.json();
  console.log('from fetch method ', data);
  // setProdutsData(Object.entries(data));
  return data;
}
