"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Heart } from "lucide-react";

import { useWishlistStore } from "@/store/wishlistStore";

type ProductCardProps = {
  id: string;
  title: string;
  price: string;
  image: string;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
}: ProductCardProps) {

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleWishlist =
    useWishlistStore(
      (state) => state.toggleWishlist
    );

  const wishlist =
    useWishlistStore(
      (state) => state.wishlist
    );

  const isInWishlist =
    wishlist.some(
      (item) => item.id === id
    );

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">

      {/* HEART BUTTON */}
      <button
        onClick={() =>
          toggleWishlist({
            id,
            title,
            price,
            image,
          })
        }
        className="absolute top-5 right-5 z-20 bg-black/60 p-3 rounded-full backdrop-blur-md"
      >

        <Heart
          size={24}
          className={`transition ${
            isInWishlist
              ? "fill-red-500 text-red-500"
              : "text-white"
          }`}
        />

      </button>

      <Link href={`/products/${id}`}>

        <motion.div
          whileHover={{
            y: -15,
            scale: 1.03,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-white"
        >

          {/* IMAGE */}
          <div className="relative h-[400px] overflow-hidden">

            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative w-full h-full"
            >

              <Image
                src={image}
                alt={title}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />

            </motion.div>

          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              {title}
            </h2>

            <p className="text-gray-400 text-lg">
              {price}
            </p>

          </div>

        </motion.div>

      </Link>

    </div>
  );
}