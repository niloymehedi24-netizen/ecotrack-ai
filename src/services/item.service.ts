import axiosInstance from "@/lib/axios";

import type { Item } from "@/types/item";

export interface ItemsResponse {
  items: Item[];

  total: number;

  page: number;

  totalPages: number;
}

export const getItems = async (params?: {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
  limit?: number;
}): Promise<ItemsResponse> => {
  const response = await axiosInstance.get("/items", {
    params,
  });

  return response.data;
};

export const getItemById = async (id: string): Promise<Item> => {
  const response = await axiosInstance.get(`/items/${id}`);

  return response.data.item;
};

export const createItem = async (data: Partial<Item>) => {
  const response = await axiosInstance.post("/items", data);

  return response.data;
};

export const deleteItem = async (id: string) => {
  const response = await axiosInstance.delete(`/items/${id}`);

  return response.data;
};

export const updateItem = async (id: string, data: Partial<Item>) => {
  const response = await axiosInstance.patch(`/items/${id}`, data);

  return response.data;
};
