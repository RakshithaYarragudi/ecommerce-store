"use client";

import { use, useState } from "react";

import { notFound } from "next/navigation";

import toast from "react-hot-toast";

import { products } from "@/data/products";

import { useCartStore } from "@/store/cartStore";

import { useWishlistStore } from "@/store/wishlistStore";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = use(params);

  const product = products.find(
    (item) => item.id === id
  );

  const addToCart =
    useCartStore(
      (state) => state.addToCart
    );

  const addToWishlist =
    useWishlistStore(
      (state) =>
        state.addToWishlist
    );

  const [selectedImage, setSelectedImage] =
    useState(
      product?.images?.[0]
    );

  if (!product) {

    return notFound();

  }

  const handleAddToCart = () => {

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });

    toast.success(
      "Added to Cart"
    );
  };

  const handleWishlist = () => {

    addToWishlist({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    });

    toast.success(
      "Added to Wishlist"
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          {/* MAIN IMAGE */}
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full h-[400px] md:h-[850px] object-cover rounded-[40px]"
          />

          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-6 overflow-x-auto">

            {product.images.map(
              (image) => (

                <button
                  key={image}
                  onClick={() =>
                    setSelectedImage(image)
                  }
                  className={`border-4 rounded-3xl overflow-hidden flex-shrink-0 ${
                    selectedImage === image
                      ? "border-yellow-500"
                      : "border-transparent"
                  }`}
                >

                  <img
                    src={image}
                    alt={product.title}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover"
                  />

                </button>

              )
            )}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[10px] text-gray-400 mb-6 text-sm md:text-base">

            Premium Collection

          </p>

          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">

            {product.title}

          </h1>

          <p className="text-3xl md:text-5xl font-bold mb-8">

            {product.price}

          </p>

          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-12">

            Premium oversized fashion designed
            for modern streetwear lovers.
            Crafted with comfort, luxury,
            and timeless aesthetics.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6">

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-white text-black py-5 rounded-full text-xl md:text-2xl font-semibold hover:bg-gray-200 transition"
            >

              Add To Cart

            </button>

            <button
              onClick={handleWishlist}
              className="flex-1 border border-white py-5 rounded-full text-xl md:text-2xl font-semibold hover:bg-white hover:text-black transition"
            >

              Wishlist

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}