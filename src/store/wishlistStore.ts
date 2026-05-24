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

  toggleWishlist: (item: WishlistItem) => void;

  isInWishlist: (id: string) => boolean;
};

export const useWishlistStore =
  create<WishlistStore>()(
    persist(
      (set, get) => ({

        wishlist: [],

        toggleWishlist: (item) => {

          const exists = get().wishlist.find(
            (wishlistItem) =>
              wishlistItem.id === item.id
          );

          if (exists) {

            set({
              wishlist: get().wishlist.filter(
                (wishlistItem) =>
                  wishlistItem.id !== item.id
              ),
            });

          } else {

            set({
              wishlist: [
                ...get().wishlist,
                item,
              ],
            });

          }

        },

        isInWishlist: (id) => {

          return get().wishlist.some(
            (item) => item.id === id
          );

        },

      }),

      {
        name: "wishlist-storage",
      }
    )
  );