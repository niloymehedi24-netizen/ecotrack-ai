import axiosInstance from "@/lib/axios";

export const sendAIMessage = async (message: string) => {
  const response = await axiosInstance.post("/ai/chat", {
    message,
  });

  return response.data;
};

export const getAIHistory = async () => {
  const response = await axiosInstance.get("/ai/history");

  return response.data;
};
