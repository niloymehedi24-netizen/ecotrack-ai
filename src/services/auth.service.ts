import axiosInstance from "@/lib/axios";

export interface LoginPayload {
  email: string;

  password: string;
}

export interface RegisterPayload {
  name: string;

  email: string;

  password: string;

  role: "USER" | "ADMIN";
}

export interface AuthResponse {
  success: boolean;

  message: string;

  user: {
    _id: string;

    name: string;

    email: string;

    role: "USER" | "ADMIN";
  };
}

export const loginUser = async (payload: LoginPayload) => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/login",
    payload,
  );

  return response.data;
};

export const registerUser = async (payload: RegisterPayload) => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/register",
    payload,
  );

  return response.data;
};

export const googleLogin = async (credential: string) => {
  const response = await axiosInstance.post("/auth/google", {
    credential,
  });

  return response.data;
};

export const logoutUser = async () => {
  const response = await axiosInstance.post("/auth/logout");

  return response.data;
};
