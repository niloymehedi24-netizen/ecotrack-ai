import { useMutation } from "@tanstack/react-query";
import {
  getRecommendations,
  RecommendationInput,
} from "@/services/recommendation.service";

export const useRecommendation = () => {
  return useMutation({
    mutationFn: (data: RecommendationInput) => getRecommendations(data),
  });
};
