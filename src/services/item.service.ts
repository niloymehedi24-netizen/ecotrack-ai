import axiosInstance from "@/lib/axios";

import type { Item } from "@/types/item";

interface ItemsResponse {
  items: Item[];

  total: number;

  page: number;

  totalPages: number;
}

export const getItems = async (params: {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
}) => {
  const response = await axiosInstance.get("/items", {
    params,
  });

  return response.data;
};

export const getItemById = async (id: string): Promise<Item> => {
  const response = await axiosInstance.get(`/items/${id}`);

  return response.data.item;
};
