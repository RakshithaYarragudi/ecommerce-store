"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterPage() {

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleRegister = async () => {

    // EMPTY CHECK
    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword
    ) {

      toast.error(
        "Please fill all fields"
      );

      return;
    }

    // NAME VALIDATION
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

    // PASSWORD LENGTH
    if (
      password.length < 6
    ) {

      toast.error(
        "Password must be at least 6 characters"
      );

      return;
    }

    // PASSWORD MATCH
    if (
      password !==
      confirmPassword
    ) {

      toast.error(
        "Passwords do not match"
      );

      return;
    }

    try {

      const response =
        await fetch(
          "/api/register",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              name: fullName,
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
        "Account created successfully"
      );

      window.location.href =
        "/login";

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

          Create Account

        </h1>

        <div className="space-y-6">

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

          <div>

            <label className="block mb-3 text-lg text-gray-300">

              Confirm Password

            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none"
            />

          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-white text-black py-5 rounded-full text-xl font-semibold hover:bg-gray-200 transition"
          >

            Create Account

          </button>

        </div>

        <p className="text-center text-gray-400 mt-8 text-lg">

          Already have an account?{" "}

          <Link
            href="/login"
            className="text-white font-semibold hover:underline"
          >

            Login

          </Link>

        </p>

      </div>

    </main>
  );
}