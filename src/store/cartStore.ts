"use client";

import { create } from "zustand";

import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];

  addToCart: (
    item: CartItem
  ) => void;

  removeFromCart: (
    id: string
  ) => void;

  increaseQuantity: (
    id: string
  ) => void;

  decreaseQuantity: (
    id: string
  ) => void;

  clearCart: () => void;
};

export const useCartStore =
  create<CartStore>()(
    persist(
      (set) => ({

        cart: [],

        addToCart: (item) =>
          set((state) => {

            const existingItem =
              state.cart.find(
                (cartItem) =>
                  cartItem.id === item.id
              );

            if (existingItem) {

              return {

                cart:
                  state.cart.map(
                    (cartItem) =>

                      cartItem.id === item.id
                        ? {
                            ...cartItem,
                            quantity:
                              cartItem.quantity + 1,
                          }
                        : cartItem
                  ),

              };

            }

            return {

              cart: [
                ...state.cart,
                item,
              ],

            };

          }),

        removeFromCart: (id) =>
          set((state) => ({

            cart:
              state.cart.filter(
                (item) =>
                  item.id !== id
              ),

          })),

        increaseQuantity: (id) =>
          set((state) => ({

            cart:
              state.cart.map(
                (item) =>

                  item.id === id
                    ? {
                        ...item,
                        quantity:
                          item.quantity + 1,
                      }
                    : item
              ),

          })),

        decreaseQuantity: (id) =>
          set((state) => ({

            cart:
              state.cart.map(
                (item) =>

                  item.id === id
                    ? {
                        ...item,
                        quantity:
                          Math.max(
                            1,
                            item.quantity - 1
                          ),
                      }
                    : item
              ),

          })),

        clearCart: () =>
          set({
            cart: [],
          }),

      }),
      {
        name: "cart-storage",
      }
    )
  );