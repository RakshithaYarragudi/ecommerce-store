"use client";

import Link from "next/link";

export default function SuccessPage() {

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-16 text-center max-w-2xl w-full">

        <div className="text-8xl mb-8">

          🎉

        </div>

        <h1 className="text-6xl font-bold mb-6">

          Order Successful

        </h1>

        <p className="text-gray-400 text-2xl mb-12">

          Thank you for shopping with us.
          Your order has been placed successfully.

        </p>

        <Link href="/">

          <button className="bg-white text-black px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-200 transition">

            Continue Shopping

          </button>

        </Link>

      </div>

    </main>
  );
}