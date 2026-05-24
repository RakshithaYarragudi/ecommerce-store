"use client";

import Link from "next/link";

import { Trash2 } from "lucide-react";

import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistPage() {

  const wishlist =
    useWishlistStore(
      (state) => state.wishlist
    );

  const removeFromWishlist =
    useWishlistStore(
      (state) =>
        state.removeFromWishlist
    );

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-16">

      <h1 className="text-5xl md:text-7xl font-bold mb-16">

        Your Wishlist

      </h1>

      {wishlist.length === 0 ? (

        <div className="flex flex-col items-center justify-center text-center py-32">

          <h2 className="text-4xl font-bold mb-4">

            Your Wishlist is Empty

          </h2>

          <p className="text-gray-400 text-xl mb-8">

            Save products you love for later.

          </p>

          <Link
            href="/"
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold"
          >

            Continue Shopping

          </Link>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="bg-zinc-900 rounded-[40px] overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[450px] object-cover"
              />

              {/* CONTENT */}
              <div className="p-8">

                <h2 className="text-4xl font-bold mb-4">

                  {item.title}

                </h2>

                <p className="text-2xl text-gray-300 mb-8">

                  {item.price}

                </p>

                {/* ACTIONS */}
                <div className="flex items-center gap-4">

                  <Link
                    href={`/products/${item.id}`}
                    className="flex-1 bg-white text-black py-5 rounded-full text-center text-2xl font-semibold hover:bg-gray-200 transition"
                  >

                    View Product

                  </Link>

                  <button
                    onClick={() =>
                      removeFromWishlist(
                        item.id
                      )
                    }
                    className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition"
                  >

                    <Trash2 size={32} />

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