import { productDataType } from "@/atoms";
import { useSetAtom } from "jotai";

export default async function fetchData(title: string) {
  //   console.log(title);

  const url = process.env.NEXT_PUBLIC_ngrokURL as string;

  const res = await fetch(`${url}/about`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // title: title,
    },
    body: JSON.stringify({ title }),
  });

  const data: productDataType[] = await res.json();
  console.log("from fetch method ", data);
   return data;
}
