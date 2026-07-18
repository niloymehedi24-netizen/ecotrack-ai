export type UserRole = "USER" | "ADMIN";

export interface User {
  _id: string;

  name: string;

  email: string;

  role: UserRole;

  ecoScore?: number;

  carbonSaved?: number;

  createdAt?: string;
}
