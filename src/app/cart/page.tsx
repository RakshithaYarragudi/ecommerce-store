"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {

  const cart = useCartStore(
    (state) => state.cart
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      Number(item.price.replace("$", "")) *
        item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (

        <p className="text-gray-400 text-xl">
          Your cart is empty.
        </p>

      ) : (

        <>
          {/* CART ITEMS */}
          <div className="flex flex-col gap-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-zinc-900 rounded-2xl p-5 flex items-center gap-6"
              >

                {/* IMAGE */}
                <div className="relative w-32 h-32 rounded-xl overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* DETAILS */}
                <div className="flex-1">

                  <h2 className="text-2xl font-bold mb-2">
                    {item.title}
                  </h2>

                  <p className="text-xl font-semibold mb-4">
                    {item.price}
                  </p>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="bg-zinc-700 px-4 py-2 rounded-lg"
                    >
                      -
                    </button>

                    <span className="text-xl">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="bg-zinc-700 px-4 py-2 rounded-lg"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl transition"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* ORDER SUMMARY */}
          <div className="mt-10 bg-zinc-900 rounded-2xl p-8 max-w-md ml-auto">

            <h2 className="text-3xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between text-lg mb-4">

              <span>Total Items</span>

              <span>
                {cart.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )}
              </span>

            </div>

            <div className="flex justify-between text-2xl font-bold mb-8">

              <span>Total</span>

              <span>
                ${totalPrice}
              </span>

            </div>

            <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition">

              Checkout

            </button>

          </div>
        </>

      )}

    </main>
  );
}