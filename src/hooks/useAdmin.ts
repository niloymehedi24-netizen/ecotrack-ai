import { useQuery } from "@tanstack/react-query";
import {
  getAdminStats,
  getUsers,
  getAnalytics,
} from "@/services/admin.service";

import type { User } from "@/types/user";
import type { AnalyticsData } from "@/types/analytics";

export const useAdminStats = () => {
  return useQuery({
    queryKey: ["admin-stats"],
    queryFn: getAdminStats,
  });
};

export const useAdminUsers = () => {
  return useQuery<User[]>({
    queryKey: ["admin-users"],
    queryFn: getUsers,
  });
};

export const useAdminAnalytics = () => {
  return useQuery<AnalyticsData[]>({
    queryKey: ["admin-analytics"],
    queryFn: getAnalytics,
  });
};
