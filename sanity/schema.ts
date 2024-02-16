import { type SchemaTypeDefinition } from 'sanity'
import productType from './schemasTypes/pet'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType],
};
