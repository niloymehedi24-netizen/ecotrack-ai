import axiosInstance from "@/lib/axios";

export interface RecommendationInput {
  category: "Energy" | "Water" | "Waste" | "Reusable";
  budget: number;
  goal: string;
  livingType: "Apartment" | "House" | "Office";
}

export const getRecommendations = async (data: RecommendationInput) => {
  const response = await axiosInstance.post("/recommendations", data);
  return response.data;
};
