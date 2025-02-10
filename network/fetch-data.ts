import { productDataType } from "@/atoms";

export default async function fetchData(title: string) {
  // const setProdutsData = useSetAtom(fetchProductData);
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
  // setProdutsData(Object.entries(data));
  return data;
}
