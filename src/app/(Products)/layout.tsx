import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import CartContextProvider from "../Context/cartProvider";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axe Mart",
  description: "Created by Abdullah Asif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>
          <Navigation/>
          {children}
        </CartContextProvider>
        <Toaster />
      </body>
    </html>
  );
}

export const revalidate = 3600;
