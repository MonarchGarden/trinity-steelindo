import {z} from 'zod';

export const rowSchema = z.object({
  no: z.number(),
  deskripsi: z.string(),
  berat: z.string(),
});

export type Row = z.infer<typeof rowSchema>;
