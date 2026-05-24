"use client";

import Link from "next/link";

import { ShoppingBag, Heart } from "lucide-react";

import { useState } from "react";

import CartDrawer from "../cart/CartDrawer";

import { useCartStore } from "@/store/cartStore";

import { useWishlistStore } from "@/store/wishlistStore";

export default function Navbar() {

  const [isCartOpen, setIsCartOpen] =
    useState(false);

  const cart = useCartStore(
    (state) => state.cart
  );

  const wishlist =
    useWishlistStore(
      (state) => state.wishlist
    );

  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-8 py-6 border-b border-zinc-800 bg-black text-white sticky top-0 z-50">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold"
        >

          LUXE

        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-lg">

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

            <Heart size={24} />

            {wishlist.length > 0 && (

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                {wishlist.length}

              </span>

            )}

          </Link>

          <Link
            href="/login"
            className="hover:text-gray-300 transition"
          >

            Login

          </Link>

          <Link
            href="/register"
            className="hover:text-gray-300 transition"
          >

            Register

          </Link>

          {/* CART BUTTON */}
          <button
            onClick={() =>
              setIsCartOpen(true)
            }
            className="relative hover:text-gray-300 transition"
          >

            <ShoppingBag size={26} />

            {totalItems > 0 && (

              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">

                {totalItems}

              </span>

            )}

          </button>

        </div>

      </nav>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() =>
          setIsCartOpen(false)
        }
      />
    </>
  );
}