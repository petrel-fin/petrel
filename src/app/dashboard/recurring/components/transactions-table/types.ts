import { z } from "zod";

export const schema = z.object({
  id: z.number(),
  description: z.string(),
  amount: z.string(),
  category: z.string(),
  recipient: z.string(),
  method: z.string(),
  date: z.string(),
});

// export const schema = z.object({
//   id: z.number(),
//   header: z.string(),
//   type: z.string(),
//   status: z.string(),
//   target: z.string(),
//   limit: z.string(),
//   reviewer: z.string(),
// });
