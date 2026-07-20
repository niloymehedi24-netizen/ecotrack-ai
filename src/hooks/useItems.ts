import { useQuery } from "@tanstack/react-query";

import { getItems } from "@/services/item.service";

export const useItems = (params: {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ["items", params],

    queryFn: () => getItems(params),
  });
};
