import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    email: z.string().email("Please enter a valid email"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string().min(6, "Confirm password is required"),

    role: z.enum(["USER", "ADMIN"]),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginFormData = z.infer<typeof loginSchema>;

export type RegisterFormData = z.infer<typeof registerSchema>;
