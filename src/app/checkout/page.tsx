"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {

  const cart = useCartStore(
    (state) => state.cart
  );

  const clearCart =
    useCartStore(
      (state) => state.clearCart
    );

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [city, setCity] =
    useState("");

  const [zipCode, setZipCode] =
    useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      Number(
        item.price.replace("$", "")
      ) *
        item.quantity,
    0
  );

  const handlePlaceOrder = () => {

    // EMPTY CHECK
    if (
      !fullName ||
      !email ||
      !address ||
      !city ||
      !zipCode ||
      !cardNumber ||
      !expiry ||
      !cvv
    ) {

      toast.error(
        "Please fill all fields"
      );

      return;
    }

    // FULL NAME
    if (
      fullName.length < 3
    ) {

      toast.error(
        "Enter valid full name"
      );

      return;
    }

    // EMAIL VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(email)
    ) {

      toast.error(
        "Enter valid email"
      );

      return;
    }

    // ZIP CODE
    if (
      !/^\d{5,6}$/.test(zipCode)
    ) {

      toast.error(
        "Enter valid ZIP code"
      );

      return;
    }

    // CARD NUMBER
    if (
      !/^\d{16}$/.test(
        cardNumber.replace(/\s/g, "")
      )
    ) {

      toast.error(
        "Card number must be 16 digits"
      );

      return;
    }

    // EXPIRY FORMAT
    if (
      !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)
    ) {

      toast.error(
        "Expiry must be MM/YY"
      );

      return;
    }

    // CVV
    if (
      !/^\d{3}$/.test(cvv)
    ) {

      toast.error(
        "CVV must be 3 digits"
      );

      return;
    }

    // EMPTY CART
    if (
      cart.length === 0
    ) {

      toast.error(
        "Cart is empty"
      );

      return;
    }

    // SUCCESS
    clearCart();

    toast.success(
      "Order placed successfully"
    );

    window.location.href =
      "/success";
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      <h1 className="text-4xl md:text-6xl font-bold mb-16">

        Checkout

      </h1>

      <div className="grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* SHIPPING */}
          <div>

            <h2 className="text-3xl font-bold mb-8">

              Shipping Information

            </h2>

            <div className="space-y-6">

              {/* FULL NAME */}
              <div>

                <label className="block mb-3 text-lg text-gray-300">

                  Full Name

                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(
                      e.target.value
                    )
                  }
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block mb-3 text-lg text-gray-300">

                  Email Address

                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
                />

              </div>

              {/* ADDRESS */}
              <div>

                <label className="block mb-3 text-lg text-gray-300">

                  Address

                </label>

                <input
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) =>
                    setAddress(
                      e.target.value
                    )
                  }
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* CITY */}
                <div>

                  <label className="block mb-3 text-lg text-gray-300">

                    City

                  </label>

                  <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) =>
                      setCity(
                        e.target.value
                      )
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
                  />

                </div>

                {/* ZIP */}
                <div>

                  <label className="block mb-3 text-lg text-gray-300">

                    ZIP Code

                  </label>

                  <input
                    type="text"
                    placeholder="Enter ZIP code"
                    value={zipCode}
                    onChange={(e) =>
                      setZipCode(
                        e.target.value
                      )
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* PAYMENT */}
          <div>

            <h2 className="text-3xl font-bold mb-8">

              Payment Details

            </h2>

            <div className="space-y-6">

              {/* CARD */}
              <div>

                <label className="block mb-3 text-lg text-gray-300">

                  Card Number

                </label>

                <input
                  type="text"
                  placeholder="1111 1111 1111 1111"
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(
                      e.target.value
                    )
                  }
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* EXPIRY */}
                <div>

                  <label className="block mb-3 text-lg text-gray-300">

                    Expiry Date

                  </label>

                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) =>
                      setExpiry(
                        e.target.value
                      )
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
                  />

                </div>

                {/* CVV */}
                <div>

                  <label className="block mb-3 text-lg text-gray-300">

                    CVV

                  </label>

                  <input
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) =>
                      setCvv(
                        e.target.value
                      )
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 h-fit">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">

            Order Summary

          </h2>

          <div className="space-y-6 mb-10">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between border-b border-zinc-800 pb-4"
              >

                <div>

                  <h3 className="text-xl font-semibold">

                    {item.title}

                  </h3>

                  <p className="text-gray-400">

                    Qty: {item.quantity}

                  </p>

                </div>

                <p className="text-xl font-bold">

                  {item.price}

                </p>

              </div>

            ))}

          </div>

          <div className="flex items-center justify-between mb-10">

            <span className="text-2xl">

              Total

            </span>

            <span className="text-3xl md:text-4xl font-bold">

              ${totalPrice}

            </span>

          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-white text-black py-5 rounded-full text-xl font-semibold hover:bg-gray-200 transition"
          >

            Place Order

          </button>

        </div>

      </div>

    </main>
  );
}