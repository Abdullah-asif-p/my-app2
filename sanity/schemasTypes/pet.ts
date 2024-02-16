// Import necessary functions and components
import { defineType } from "sanity";
import { BiUser } from "react-icons/bi";
import CustomInputSlug from "../lib/slugInput";

// Define the product type with its fields
const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: BiUser,
  fields: [
    // Define the product name field
    {
      name: "productName",
      title: "Product Name",
      type: "string",
      validation: (rule) => rule.required(), // Ensure the product name is required
    },
    // Define the slug field with inputComponent
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "productName",
        slugify: (input: string) => input.toLowerCase(),
      },
      inputComponent: CustomInputSlug,
      hidden: true,
    },
    // Define the product image field with additional properties
    {
      name: "productImage",
      title: "Product Image",
      type: "image",
      description: "Upload a Product picture",
      options: { hotspot: true }, // Enable hotspot for image editing
      fields: [
        // Define additional fields related to the product image
        { name: "alt", title: "Alt", type: "string" },
        { name: "gender", title: "Gender", type: "string" },
        { name: "category", title: "Category", type: "string" },
        { name: "price", title: "Price", type: "number" },
        { name: "quantity", title: "Quantity", type: "number" },
      ],
    },
  ],
});

// Export the product type
export default productType;
