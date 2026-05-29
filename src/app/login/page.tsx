"use client";

import { useState } from "react";

import Link from "next/link";

import toast from "react-hot-toast";

export default function LoginPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {

    // EMPTY CHECK
    if (!email || !password) {

      toast.error(
        "Please fill all fields"
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

    // PASSWORD LENGTH
    if (
      password.length < 6
    ) {

      toast.error(
        "Password must be at least 6 characters"
      );

      return;
    }

    try {

      const response =
        await fetch(
          "/api/login",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

      const data =
        await response.json();

      if (!data.success) {

        toast.error(
          data.message
        );

        return;
      }

      toast.success(
        "Login Successful"
      );

      window.location.href =
        "/account";

    } catch (error) {

      toast.error(
        "Something went wrong"
      );

    }

  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-[40px] p-8 md:p-12">

        <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">

          Welcome Back

        </h1>

        <div className="space-y-6">

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

          {/* PASSWORD */}
          <div>

            <label className="block mb-3 text-lg text-gray-300">

              Password

            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
            />

          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-white text-black py-5 rounded-full text-xl font-semibold hover:bg-gray-200 transition"
          >

            Login

          </button>

        </div>

        {/* REGISTER LINK */}
        <p className="text-center text-gray-400 mt-8 text-lg">

          Don&apos;t have an account?{" "}

          <Link
            href="/register"
            className="text-white font-semibold hover:underline"
          >

            Register

          </Link>

        </p>

      </div>

    </main>
  );
}