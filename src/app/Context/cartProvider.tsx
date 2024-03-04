"use client";

import React, { useContext, createContext, useEffect, useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export type CartItem = {
  Image: string;
  Name: string;
  Subcategory: string;
  Count: number;
  Price: number;
  Color: string;
  Size: string;
};

interface CartContextType {
  cart: CartItem[];
  total: number;
  cartCount: number;
  addToCart: (item: CartItem) => void;
  deleteItemFromCart: (index: number) => void;
  incrementCount: (index: number) => void;
  decrementCount: (index: number) => void;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  total: 0,
  cartCount:0,
  setCart: () => {},
  addToCart: () => {},
  incrementCount: () => {},
  decrementCount: () => {},
  deleteItemFromCart: () => {},
});

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();

  const ls = typeof window !== "undefined" ? localStorage : null;

  useEffect(() => {
    const getItem = localStorage?.getItem("cart");
    if (getItem) {
      setCart(JSON.parse(getItem));
      setCartCount(JSON.parse(getItem).length)
      setTotal(
        cart.reduce((total, item) => total + item.Price * item.Count, 0)
      );
    }
  }, []);

  useEffect(() => {
    setTotal(cart.reduce((total, item) => total + item.Price * item.Count, 0));
  }, [cart]);

  const addToCart = (newProduct: CartItem) => {
    const existingIndex = cart.findIndex(
      (i) =>
        i.Image === newProduct.Image &&
        i.Color === newProduct.Color &&
        i.Size === newProduct.Size
    );
    if (existingIndex === -1) {
      setCart((prev) => {
        const updatedCart = [...prev, newProduct];
        saveCartTOLocalStorage(updatedCart);
        toast({
          title: `${newProduct.Count}x ${newProduct.Name} added to cart`,
          action: (
            <ToastAction
              altText="Undo"
              onClick={() => deleteItemFromCart(updatedCart.length - 1)}
              className="shadow text-black bg-white"
            >
              Undo
            </ToastAction>
          ),
          className: "text-lg text-green-500",
        });
        setCartCount(updatedCart.length);
        return updatedCart;
      });
    } else {
      toast({
        title: `${newProduct.Count}x ${newProduct.Name} added to cart`,
        className: "text-lg text-green-500",
      });
    }
  };
  const incrementCount = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].Count < 10) {
      updatedCart[index].Count++;
      setCart(updatedCart);
      saveCartTOLocalStorage(updatedCart);
    }
  };
  const decrementCount = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].Count > 1) {
      updatedCart[index].Count--;
      setCart(updatedCart);
      saveCartTOLocalStorage(updatedCart);
    }
  };

  const deleteItemFromCart = (index: number) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      const deletedItem = updatedCart.splice(index, 1);
      saveCartTOLocalStorage(updatedCart);
      toast({
        title: `${deletedItem[0].Count}x ${deletedItem[0].Name} successfully deleted`,
        className: "text-lg text-red-500",
      });
      setCartCount(updatedCart.length);
      return updatedCart;
    });
  };

  function CalculatetotalPrice() {
    const totalprice = cart.reduce(
      (total, item) => total + item.Price * item.Count,
      0
    );
    setTotal(totalprice);
  }

  function saveCartTOLocalStorage(cart: CartItem[]) {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cart));
    }
    CalculatetotalPrice();
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartCount,
        setCart,
        addToCart,
        incrementCount,
        decrementCount,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
