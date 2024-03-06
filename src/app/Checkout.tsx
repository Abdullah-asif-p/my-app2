"use client";

import getStipePromise from "@/components/Lib/stripe";
import { MdLock } from "react-icons/md";
import { CartItem } from "./Context/cartProvider";


const StripeCheckOutButton = ({products}: {products: CartItem[]}) => {
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <button className="flex items-center btn justify-center py-2 px-4 w-[70%]  bg-neutral-600 text-white rounded-sm" onClick={handleCheckout}>
      <MdLock />
      Checkout
    </button>
  );
};

export default StripeCheckOutButton;
