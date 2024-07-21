import { z } from "zod";

export const messageSchema = z.object({
  content: z
  .string()
  .min(10, {message: "Content at least 10 Cahracters"})
  .max(1000, {message: "Content at most 1000 Cahracters"})
});
