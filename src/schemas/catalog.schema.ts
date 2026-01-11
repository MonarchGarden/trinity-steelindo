import {z} from 'zod';

export const catalogRowSchema = z.object({
  no: z.number(),
  deskripsi: z.string(),
  berat: z.string(),
});

export const catalogTableSchema = z.object({
  title: z.string(),
  rightHeader: z.string().optional().default('BERAT'),
  imageSrc: z.string().optional(),
  rows: z.array(catalogRowSchema),
});

export const catalogSchema = z.object({
  tables: z.array(catalogTableSchema),
});

export type CatalogRow = z.infer<typeof catalogRowSchema>;
export type CatalogTable = z.infer<typeof catalogTableSchema>;
export type CatalogResponse = z.infer<typeof catalogSchema>;
