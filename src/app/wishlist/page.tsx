"use client";

import Link from "next/link";

import Image from "next/image";

import { Trash2 } from "lucide-react";

import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistPage() {

  const wishlist =
    useWishlistStore(
      (state) => state.wishlist
    );

  const toggleWishlist =
    useWishlistStore(
      (state) => state.toggleWishlist
    );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <h1 className="text-5xl font-bold mb-12">
        Your Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (

        <p className="text-gray-400 text-xl">
          No saved items yet.
        </p>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >

              {/* IMAGE */}
              <div className="relative h-[350px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h2 className="text-2xl font-bold mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-400 text-lg mb-6">
                  {item.price}
                </p>

                <div className="flex gap-4">

                  {/* VIEW PRODUCT */}
                  <Link
                    href={`/products/${item.id}`}
                    className="flex-1 bg-white text-black py-3 rounded-full text-center font-semibold hover:bg-gray-200 transition"
                  >

                    View Product

                  </Link>

                  {/* REMOVE */}
                  <button
                    onClick={() =>
                      toggleWishlist(item)
                    }
                    className="bg-red-500 hover:bg-red-600 p-4 rounded-full transition"
                  >

                    <Trash2 size={22} />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </main>
  );
}