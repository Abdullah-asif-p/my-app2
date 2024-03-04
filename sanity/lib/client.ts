import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import  ImageUrlBuilder  from '@sanity/image-url'

export const client = createClient({
  apiVersion: "2024-02-16",
  dataset,
  projectId,
  useCdn,
});

const builder = ImageUrlBuilder(client)

export function urlFor(source:any) {
  return builder.image(source)
}

// async function generateAndSetSlug(documentId:any) {
//   try {
//     // Fetch the document
//     const doc:any = await client.getDocument(documentId);

//     // Generate the slug based on the product name (assuming productName field)
//     const slug = doc?.productName
//       .toLowerCase()
//       .replace(/[^\w\s]/gi, "")
//       .replace(/\s+/g, "-")
//       .slice(0, 200);

//     // Update the document with the generated slug
//     await client
//       .patch(documentId)
//       .set({ slug: { _type: "slug", current: slug } })
//       .commit();

//     console.log(`Slug generated and set for document ${documentId}`);
//   } catch (error:any) {
//     console.error(
//       `Error generating or setting slug for document ${documentId}:`,
//       error.message
//     );
//   }
// }

// // Fetch documents and generate/set slugs for each
// async function generateSlugsForDocuments() {
//   try {
//     // Fetch documents of type 'article' (replace with your schema type)
//     const documents = await client.fetch(
//       '*[_type == "product"]{_id, productName}'
//     );

//     // Generate and set slugs for each document
//     for (const doc of documents) {
//       await generateAndSetSlug(doc._id);
//     }
//   } catch (error:any) {
//     console.error("Error fetching documents:", error.message);
//   }
// }

// // Call the function to generate and set slugs for documents
// generateSlugsForDocuments();
