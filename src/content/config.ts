import {z, defineCollection } from "astro:content";

const pruebaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.string(),
  })
});

export const collections = {
  'prueba': pruebaCollection
};