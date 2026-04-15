import rawProducts from "@/data/products.json";

export type ProductItem = {
  id: string;
  title: string;
  reference: string;
  description: string;
  applications: string[];
  image: string;
  alt: string;
};

export const products = rawProducts as readonly ProductItem[];
