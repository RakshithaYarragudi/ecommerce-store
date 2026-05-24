"use client";

import Link from "next/link";

import { ShoppingCart, Heart } from "lucide-react";

import { useCartStore } from "@/store/cartStore";

import { useWishlistStore } from "@/store/wishlistStore";

export default function Navbar() {

  const cart =
    useCartStore(
      (state) => state.cart
    );

  const wishlist =
    useWishlistStore(
      (state) => state.wishlist
    );

  const totalCartItems =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800 bg-black sticky top-0 z-50">

      {/* LOGO */}
      <Link
        href="/"
        className="text-3xl font-bold"
      >
        FASHION
      </Link>

      {/* LINKS */}
      <div className="flex items-center gap-8 text-lg">

        <Link
          href="/"
          className="hover:text-gray-300 transition"
        >
          Home
        </Link>

        <Link
          href="/wishlist"
          className="relative hover:text-gray-300 transition"
        >

          <Heart size={28} />

          {wishlist.length > 0 && (

            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

              {wishlist.length}

            </span>

          )}

        </Link>

        <Link
          href="/cart"
          className="relative hover:text-gray-300 transition"
        >

          <ShoppingCart size={28} />

          {totalCartItems > 0 && (

            <span className="absolute -top-2 -right-3 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">

              {totalCartItems}

            </span>

          )}

        </Link>

      </div>

    </nav>
  );
}