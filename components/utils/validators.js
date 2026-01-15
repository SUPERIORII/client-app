"use client";
import { z } from "zod";

// login schema
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .refine(
      (value) => value === "" || z.string().email().safeParse(value).success,
      {
        message: "this email is not a valid email address",
      }
    ),
  loginPassword: z.string().trim().min(1, "Password is required"),
});
