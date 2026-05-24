"use client";

import Link from "next/link";

import { X } from "lucide-react";

import { useCartStore } from "@/store/cartStore";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {

  const cart = useCartStore(
    (state) => state.cart
  );

  const removeFromCart =
    useCartStore(
      (state) => state.removeFromCart
    );

  const increaseQuantity =
    useCartStore(
      (state) => state.increaseQuantity
    );

  const decreaseQuantity =
    useCartStore(
      (state) => state.decreaseQuantity
    );

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      Number(
        item.price.replace("$", "")
      ) *
        item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-[550px] bg-black border-l border-zinc-800 z-50 transform transition-transform duration-300 overflow-y-auto ${
        isOpen
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >

      {/* HEADER */}
      <div className="flex items-center justify-between p-8 border-b border-zinc-800">

        <h2 className="text-4xl font-bold text-white">

          Your Cart

        </h2>

        <button
          onClick={onClose}
          className="text-white"
        >

          <X size={40} />

        </button>

      </div>

      {/* CART CONTENT */}
      <div className="p-8 flex flex-col gap-6 min-h-[70vh]">

        {cart.length === 0 ? (

          <div className="flex flex-col items-center justify-center h-full text-center py-20">

            <h2 className="text-3xl font-bold mb-4 text-white">

              Your Cart is Empty

            </h2>

            <p className="text-gray-400 text-lg mb-8">

              Add products to continue shopping.

            </p>

            <Link
              href="/"
              onClick={onClose}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold"
            >

              Continue Shopping

            </Link>

          </div>

        ) : (

          <>
            {cart.map((item) => (

              <div
                key={item.id}
                className="flex items-center gap-4 bg-zinc-900 rounded-3xl p-5"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-2xl"
                />

                <div className="flex-1">

                  <h3 className="text-2xl font-semibold mb-2 text-white">

                    {item.title}

                  </h3>

                  <div className="flex items-center gap-4 mb-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.id
                        )
                      }
                      className="w-10 h-10 rounded-full bg-zinc-800 text-white"
                    >

                      -

                    </button>

                    <span className="text-xl text-white">

                      {item.quantity}

                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.id
                        )
                      }
                      className="w-10 h-10 rounded-full bg-zinc-800 text-white"
                    >

                      +

                    </button>

                  </div>

                  <p className="text-2xl font-bold text-white">

                    {item.price}

                  </p>

                </div>

                <button
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                  className="text-red-500 text-lg"
                >

                  Remove

                </button>

              </div>

            ))}

            {/* FOOTER */}
            <div className="mt-auto border-t border-zinc-800 pt-8">

              <div className="flex items-center justify-between mb-8">

                <span className="text-3xl text-white">

                  Total

                </span>

                <span className="text-5xl font-bold text-white">

                  ${totalPrice}

                </span>

              </div>

              <Link
                href="/checkout"
                onClick={onClose}
                className="block w-full bg-white text-black text-center py-5 rounded-full text-2xl font-semibold"
              >

                Checkout

              </Link>

            </div>
          </>

        )}

      </div>

    </div>
  );
}