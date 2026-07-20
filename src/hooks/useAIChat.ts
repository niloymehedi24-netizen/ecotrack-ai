import { useMutation, useQuery } from "@tanstack/react-query";

import { sendAIMessage, getAIHistory } from "@/services/ai.service";

export const useAIHistory = () => {
  return useQuery({
    queryKey: ["ai-history"],

    queryFn: getAIHistory,
  });
};

export const useSendAIMessage = () => {
  return useMutation({
    mutationFn: sendAIMessage,
  });
};
