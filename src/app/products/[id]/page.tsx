"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { useCartStore } from "@/store/cartStore";
import { products } from "@/data/products";

export default function ProductPage() {

  const params = useParams();

  const id = params.id as string;

  const product = products.find(
    (item) => item.id === id
  );

  const [selectedImage, setSelectedImage] =
    useState(product?.images[0]);

  const [selectedSize, setSelectedSize] =
    useState("M");

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  if (!product) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>
      </main>
    );

  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          {/* MAIN IMAGE */}
          <div className="relative h-[700px] rounded-3xl overflow-hidden mb-6">

            <Image
              src={selectedImage || product.images[0]}
              alt={product.title}
              fill
              sizes="100vw"
              className="object-cover"
            />

          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4">

            {product.images.map((image, index) => (

              <button
                key={index}
                onClick={() =>
                  setSelectedImage(image)
                }
                className={`relative w-28 h-28 rounded-2xl overflow-hidden border-2 transition ${
                  selectedImage === image
                    ? "border-white"
                    : "border-zinc-800"
                }`}
              >

                <Image
                  src={image}
                  alt={product.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

              </button>

            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col">

          <p className="text-gray-400 uppercase tracking-[5px] mb-4">

            Premium Collection

          </p>

          <h1 className="text-6xl font-bold mb-6">

            {product.title}

          </h1>

          <p className="text-4xl font-semibold mb-6">

            {product.price}

          </p>

          {/* RATING */}
          <div className="flex items-center gap-3 mb-8">

            <span className="text-yellow-400 text-2xl">
              ★
            </span>

            <span className="text-xl font-semibold">
              {product.rating}
            </span>

          </div>

          {/* SIZE SELECTOR */}
          <div className="mb-10">

            <h2 className="text-xl font-semibold mb-4">

              Select Size

            </h2>

            <div className="flex gap-4">

              {["S", "M", "L", "XL"].map((size) => (

                <button
                  key={size}
                  onClick={() =>
                    setSelectedSize(size)
                  }
                  className={`w-14 h-14 rounded-full border transition ${
                    selectedSize === size
                      ? "bg-white text-black border-white"
                      : "border-zinc-700 hover:border-white"
                  }`}
                >

                  {size}

                </button>

              ))}

            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg leading-relaxed mb-10">

            Premium oversized streetwear crafted for modern fashion lovers. Built with comfort, luxury, and timeless style.

          </p>

          {/* ADD TO CART */}
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.images[0],
              })
            }
            className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-200 transition w-fit mb-16"
          >

            Add To Cart

          </button>

          {/* REVIEWS */}
          <div>

            <h2 className="text-3xl font-bold mb-8">

              Customer Reviews

            </h2>

            <div className="flex flex-col gap-6">

              {product.reviews.map(
                (review, index) => (

                  <div
                    key={index}
                    className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
                  >

                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold">

                        {review.user[0]}

                      </div>

                      <div>

                        <h3 className="font-semibold text-lg">

                          {review.user}

                        </h3>

                        <p className="text-yellow-400">

                          ★★★★★

                        </p>

                      </div>

                    </div>

                    <p className="text-gray-300 leading-relaxed">

                      {review.comment}

                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}