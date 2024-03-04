// Import necessary functions and components
import { defineType } from "sanity";
import { BiUser } from "react-icons/bi";
import { isUniqueAcrossAllDocuments } from "../lib/isUniqueAll";

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

      options: {
        source: "productName", // Generate slug based on productName
        maxLength: 200,
        isUnique: isUniqueAcrossAllDocuments,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200), // Generate slug from productName
      },
      validation: (Rule) => Rule.required(),
    },
    // Define the product image field with additional properties
    {
      name: "mainProductImage",
      title: "Product Image",
      type: "image",
      description: "Upload a Main Product picture",
      validation: (rule) => rule.required(),
      options: { hotspot: true }, // Enable hotspot for image editing
    },
    {
      name: "productImage",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
      description: "Upload more product pictures",
      options: { hotspot: true },
    },
    {
      name: "productColors",
      title: "Product Colors",
      type: "array",
      of: [{ type: "string" }],
      description: "Hexadecimal color code (e.g., #RRGGBB)",
      validation: (Rule) =>
        Rule.custom((colors:any) =>
          colors.every((color:any) => /^#[0-9A-Fa-f]{6}$/.test(color))
        ).error("Please enter valid hexadecimal color codes (e.g., #RRGGBB)"),
    },

    // Define additional fields related to the product image
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Male", value: "Male" },
          { title: "Female", value: "Female" },
          { title: "Kids", value: "Kids" },
        ],
      },
    },
    {
      name: "subcategory",
      title: "Sub Category",
      type: "string",
      description: "(e.g., Sweater, T-Shirt, Jeans)",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (rule) => rule.required(),
    },
  ],
});

// Export the product type
export default productType;
