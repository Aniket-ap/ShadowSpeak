import {z} from "zod"

export const userNameValidation = z
    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(20, "Username must be no more then 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special characters")

export const signUpSchema = z.object({
    userName: userNameValidation,
    email: z.string().email({message: "Invalid Email Address"}),
    password: z.string().min(6, {message: "Password Must be at least 6 Characters"})
})