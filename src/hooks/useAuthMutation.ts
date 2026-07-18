"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { loginUser, registerUser, logoutUser } from "@/services/auth.service";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["current-user"],
      });
    },
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["current-user"],
      });
    },
  });
};
