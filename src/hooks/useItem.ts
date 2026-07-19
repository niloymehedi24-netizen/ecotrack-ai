import { useQuery } from "@tanstack/react-query";

import { getItemById } from "@/services/item.service";

export const useItem = (id: string) => {
  return useQuery({
    queryKey: ["item", id],

    queryFn: () => getItemById(id),

    enabled: Boolean(id),
  });
};
