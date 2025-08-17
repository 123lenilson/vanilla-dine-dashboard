import { useState, useEffect, useCallback } from "react";
import { Cart, CartItem, CartTotals, PaymentMethod } from "@/types/pos";
import { PRODUCTS } from "@/data/products";

const CART_STORAGE_KEY = "pos-cart";
const TAX_RATE = 0.1; // 10%

export const useCart = () => {
  const [cart, setCart] = useState<Cart>({});
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit");

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to parse stored cart:", error);
      }
    }
  }, []);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((productId: number) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || product.stock === 0) return;

    setCart(prev => {
      const existing = prev[productId];
      if (existing) {
        // Increment existing item if stock allows
        if (existing.quantity < product.stock) {
          return {
            ...prev,
            [productId]: {
              ...existing,
              quantity: existing.quantity + 1
            }
          };
        }
        return prev;
      } else {
        // Add new item
        return {
          ...prev,
          [productId]: {
            product,
            quantity: 1
          }
        };
      }
    });
  }, []);

  const increment = useCallback((productId: number) => {
    addToCart(productId);
  }, [addToCart]);

  const decrement = useCallback((productId: number) => {
    setCart(prev => {
      const existing = prev[productId];
      if (!existing) return prev;

      if (existing.quantity <= 1) {
        const { [productId]: removed, ...rest } = prev;
        return rest;
      } else {
        return {
          ...prev,
          [productId]: {
            ...existing,
            quantity: existing.quantity - 1
          }
        };
      }
    });
  }, []);

  const remove = useCallback((productId: number) => {
    setCart(prev => {
      const { [productId]: removed, ...rest } = prev;
      return rest;
    });
  }, []);

  const getCartTotals = useCallback((): CartTotals => {
    const subTotal = Object.values(cart).reduce(
      (sum, item) => sum + (item.product.price * item.quantity),
      0
    );
    const tax = subTotal * TAX_RATE;
    const total = subTotal + tax;

    return { subTotal, tax, total };
  }, [cart]);

  const getQuantity = useCallback((productId: number): number => {
    return cart[productId]?.quantity || 0;
  }, [cart]);

  const clearCart = useCallback(() => {
    setCart({});
  }, []);

  const getCartItems = useCallback((): CartItem[] => {
    return Object.values(cart);
  }, [cart]);

  return {
    cart,
    paymentMethod,
    setPaymentMethod,
    addToCart,
    increment,
    decrement,
    remove,
    getCartTotals,
    getQuantity,
    clearCart,
    getCartItems,
  };
};