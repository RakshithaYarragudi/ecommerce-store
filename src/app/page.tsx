"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";

import ProductCard from "@/components/products/ProductCard";

import QuickViewModal from "@/components/products/QuickViewModal";

import { products } from "@/data/products";

export default function Home() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedProduct, setSelectedProduct] =
    useState<any>(null);

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center h-screen text-center px-4"
      >

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Fashion Store
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8">
          Discover modern fashion collections with premium style and comfort.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">

          Shop Now

        </button>

      </motion.section>

      {/* PREMIUM BANNER */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen mx-6 rounded-[40px] overflow-hidden mb-24"
      >

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hoodie.jpg')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center px-12">

          <p className="text-gray-300 text-lg mb-4 uppercase tracking-[6px]">

            New Collection

          </p>

          <h2 className="text-6xl md:text-8xl font-bold max-w-4xl leading-tight mb-6">

            Elevate Your
            Streetwear Style

          </h2>

          <p className="text-gray-300 text-xl max-w-2xl mb-8">

            Discover premium oversized fashion inspired by modern urban culture.

          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full w-fit font-semibold hover:bg-gray-200 transition">

            Explore Collection

          </button>

        </div>

      </motion.section>

      {/* PRODUCT SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl font-bold mb-12 text-center">

          Featured Products

        </h2>

        {/* SEARCH BAR */}
        <div className="mb-10 flex justify-center">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 px-6 py-4 rounded-2xl w-full max-w-xl outline-none"
          />

        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-4 gap-10">

          {/* SIDEBAR */}
          <div className="bg-zinc-900 p-6 rounded-3xl h-fit">

            <h3 className="text-2xl font-bold mb-6">

              Categories

            </h3>

            <div className="flex flex-col gap-4">

              {["All", "Hoodies", "Jackets", "T-Shirts"].map(
                (category) => (

                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`text-left px-4 py-3 rounded-xl transition ${
                      selectedCategory === category
                        ? "bg-white text-black"
                        : "bg-zinc-800 hover:bg-zinc-700"
                    }`}
                  >

                    {category}

                  </button>

                )
              )}

            </div>

          </div>

          {/* PRODUCTS */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">

            {filteredProducts.map((product, index) => (

              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >

                <div className="relative">

                  <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.images[0]}
                  />

                  {/* QUICK VIEW BUTTON */}
                  <button
                    onClick={() =>
                      setSelectedProduct(product)
                    }
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                  >

                    Quick View

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.section>

      {/* QUICK VIEW MODAL */}
      {selectedProduct && (

        <QuickViewModal
          product={selectedProduct}
          onClose={() =>
            setSelectedProduct(null)
          }
        />

      )}

    </main>
  );
}