import * as yup from "yup";

export const userSchema = yup.object({
  id: yup.string().uuid("Invalid ID format"),
  name: yup
    .string()
    .min(2, "Name too short")
    .max(50, "Name too long")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  age: yup.number().min(18, "Must be at least 18").optional(),
  password: yup.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
