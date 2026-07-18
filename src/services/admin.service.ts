import axiosInstance from "@/lib/axios";
import type { AnalyticsData } from "@/types/analytics";

export const getAdminStats = async () => {
  const res = await axiosInstance.get("/admin/dashboard");
  return res.data.data;
};

export const getUsers = async () => {
  const res = await axiosInstance.get("/admin/users");
  return res.data.users;
};

export const getAnalytics = async (): Promise<AnalyticsData[]> => {
  const res = await axiosInstance.get("/admin/analytics");
  return res.data.analytics;
};
