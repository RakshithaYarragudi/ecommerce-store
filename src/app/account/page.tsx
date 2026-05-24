"use client";

import Link from "next/link";

export default function AccountPage() {

  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-8 py-12">

      {/* HEADER */}
      <div className="mb-16">

        <h1 className="text-5xl md:text-7xl font-bold mb-4">

          My Account

        </h1>

        <p className="text-gray-400 text-lg md:text-2xl">

          Manage your profile and orders.

        </p>

      </div>

      {/* PROFILE CARD */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-8 md:p-12 mb-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">

              Rakshitha

            </h2>

            <p className="text-gray-400 text-lg md:text-xl mb-2">

              rakshitha@gmail.com

            </p>

            <p className="text-gray-500 text-base md:text-lg">

              Premium Member

            </p>

          </div>

          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition">

            Edit Profile

          </button>

        </div>

      </div>

      {/* ORDERS */}
      <div className="mb-16">

        <h2 className="text-4xl md:text-5xl font-bold mb-10">

          Recent Orders

        </h2>

        <div className="space-y-6">

          {/* ORDER */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <p className="text-gray-400 text-sm md:text-base mb-2">

                ORDER #1024

              </p>

              <h3 className="text-2xl md:text-3xl font-bold mb-2">

                Oversized Hoodie

              </h3>

              <p className="text-gray-500">

                Delivered on May 12, 2026

              </p>

            </div>

            <div className="text-left md:text-right">

              <p className="text-3xl font-bold mb-2">

                $59

              </p>

              <span className="text-green-500 font-semibold">

                Delivered

              </span>

            </div>

          </div>

          {/* ORDER */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <p className="text-gray-400 text-sm md:text-base mb-2">

                ORDER #1025

              </p>

              <h3 className="text-2xl md:text-3xl font-bold mb-2">

                Premium Shoes

              </h3>

              <p className="text-gray-500">

                Shipped on May 14, 2026

              </p>

            </div>

            <div className="text-left md:text-right">

              <p className="text-3xl font-bold mb-2">

                $129

              </p>

              <span className="text-yellow-500 font-semibold">

                Shipping

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-6">

        <Link
          href="/"
          className="bg-white text-black px-8 py-5 rounded-full text-center text-xl font-semibold hover:bg-gray-200 transition"
        >

          Continue Shopping

        </Link>

        <Link
          href="/login"
          className="border border-white px-8 py-5 rounded-full text-center text-xl font-semibold hover:bg-white hover:text-black transition"
        >

          Logout

        </Link>

      </div>

    </main>
  );
}