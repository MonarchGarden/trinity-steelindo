import z from 'zod';
import {rowSchema} from './title.schema';

export const dataSchema = z.object({
  title: z.string(),
  imageSrc: z.string().optional(),
  rightHeader: z.string().optional(),
  rows: z.array(rowSchema),
});

export type SpecTable = z.infer<typeof dataSchema>;
