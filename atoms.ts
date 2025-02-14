import { atom } from "jotai";
import fetchData from "./network/fetch-data";

export type productDataType = {
  asin: string;
  title: string;
  imgURL?: string;
  productURL?: string;
  stars?: number;
  reviews?: number;
  price?: number;
  listPrice?: number;
  isBestSeller?: boolean;
  boughtinLastMonth?: number;
  category?: string;
};

export const fetchProductData = atom<productDataType[]>();
