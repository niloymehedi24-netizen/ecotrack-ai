export type ItemCategory = "Reusable" | "Energy" | "Waste" | "Water";

export interface Item {
  _id: string;

  title: string;

  description: string;

  category: ItemCategory;

  image: string;

  price: number;

  createdBy: string;

  createdAt: string;

  updatedAt?: string;
}
