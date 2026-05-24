"use client";

import { create } from "zustand";

import { persist } from "zustand/middleware";

type WishlistItem = {
  id: string;
  title: string;
  price: string;
  image: string;
};

type WishlistStore = {
  wishlist: WishlistItem[];

  addToWishlist: (
    item: WishlistItem
  ) => void;

  removeFromWishlist: (
    id: string
  ) => void;
};

export const useWishlistStore =
  create<WishlistStore>()(
    persist(
      (set) => ({

        wishlist: [],

        addToWishlist: (item) =>
          set((state) => ({

            wishlist: [
              ...state.wishlist,
              item,
            ],

          })),

        removeFromWishlist: (id) =>
          set((state) => ({

            wishlist:
              state.wishlist.filter(
                (item) =>
                  item.id !== id
              ),

          })),

      }),
      {
        name: "wishlist-storage",
      }
    )
  );