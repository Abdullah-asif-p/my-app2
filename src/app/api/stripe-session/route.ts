import { CartItem } from "@/app/Context/cartProvider";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.SECRET_STRIPE_KEY || "";
const stripe = new Stripe(key, {
  apiVersion: "2023-10-16",
});

// Define your route handler function
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  try {
    if (body.length) {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [{ shipping_rate: "shr_1OqxRMGJdixC1WBQFLrDqeyn" }],
        line_items: body.map((item: CartItem) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.Name,
              images: [item.Image],
            },
            unit_amount: item.Price * 100,
          },
          tax_rates: ["txr_1OrJz9GJdixC1WBQZ0E6Y5C8"],
          quantity: item.Count,
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
        })),
        mode: "payment",
        success_url: `${request.headers.get("origin")}/?success=true`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No data Found" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.message });
  }
}
