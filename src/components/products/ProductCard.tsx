"use client";

import Image from "next/image";

import Link from "next/link";

import { Heart } from "lucide-react";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import { useWishlistStore } from "@/store/wishlistStore";

import { useCartStore } from "@/store/cartStore";

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

  const wishlist =
    useWishlistStore(
      (state) => state.wishlist
    );

  const addToWishlist =
    useWishlistStore(
      (state) => state.addToWishlist
    );

  const removeFromWishlist =
    useWishlistStore(
      (state) => state.removeFromWishlist
    );

  const addToCart =
    useCartStore(
      (state) => state.addToCart
    );

  const isWishlisted =
    wishlist.some(
      (item) => item.id === id
    );

  const handleWishlist = () => {

    if (isWishlisted) {

      removeFromWishlist(id);

      toast("Removed from Wishlist");

    } else {

      addToWishlist({
        id,
        title,
        price,
        image,
      });

      toast.success(
        "Added to Wishlist"
      );

    }

  };

  const handleAddToCart = () => {

    addToCart({
      id,
      title,
      price,
      image,
      quantity: 1,
    });

    toast.success(
      "Added to Cart"
    );

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-zinc-950"
    >

      {/* PRODUCT IMAGE */}
      <Link href={`/products/${id}`}>

        <div className="relative h-[450px] overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />

        </div>

      </Link>

      {/* WISHLIST BUTTON */}
      <button
        onClick={handleWishlist}
        className="absolute top-5 right-5 z-20 bg-black/50 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center"
      >

        <Heart
          size={26}
          className={`transition ${
            isWishlisted
              ? "fill-red-500 text-red-500"
              : "text-white"
          }`}
        />

      </button>

      {/* HOVER ACTIONS */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300 z-20">

        <button
          onClick={handleAddToCart}
          className="bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >

          Add To Cart

        </button>

      </div>

      {/* PRODUCT INFO */}
      <div className="p-6">

        <h2 className="text-3xl font-bold text-white mb-3">

          {title}

        </h2>

        <p className="text-xl text-gray-300 mb-6">

          {price}

        </p>

        <Link href={`/products/${id}`}>

          <button className="w-full bg-white text-black py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition">

            View Product

          </button>

        </Link>

      </div>

    </motion.div>
  );
}