import axiosInstance from "@/lib/axios";

import type { Item } from "@/types/item";

export const getItems = async (params?: {
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

export const createItem = async (data: Partial<Item>) => {
  const response = await axiosInstance.post("/items", data);

  return response.data;
};

export const deleteItem = async (id: string) => {
  const response = await axiosInstance.delete(`/items/${id}`);

  return response.data;
};
