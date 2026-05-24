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
    item: Omit<CartItem, "quantity">
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
};

export const useCartStore =
  create<CartStore>()(
    persist(
      (set, get) => ({

        cart: [],

        addToCart: (item) => {

          const existingItem =
            get().cart.find(
              (cartItem) =>
                cartItem.id === item.id
            );

          if (existingItem) {

            set({
              cart: get().cart.map(
                (cartItem) =>

                  cartItem.id === item.id
                    ? {
                        ...cartItem,
                        quantity:
                          cartItem.quantity + 1,
                      }
                    : cartItem
              ),
            });

          } else {

            set({
              cart: [
                ...get().cart,
                {
                  ...item,
                  quantity: 1,
                },
              ],
            });

          }

        },

        removeFromCart: (id) => {

          set({
            cart: get().cart.filter(
              (item) =>
                item.id !== id
            ),
          });

        },

        increaseQuantity: (id) => {

          set({
            cart: get().cart.map(
              (item) =>

                item.id === id
                  ? {
                      ...item,
                      quantity:
                        item.quantity + 1,
                    }
                  : item
            ),
          });

        },

        decreaseQuantity: (id) => {

          set({
            cart: get().cart
              .map((item) =>

                item.id === id
                  ? {
                      ...item,
                      quantity:
                        item.quantity - 1,
                    }
                  : item
              )
              .filter(
                (item) =>
                  item.quantity > 0
              ),
          });

        },

      }),

      {
        name: "cart-storage",
      }
    )
  );