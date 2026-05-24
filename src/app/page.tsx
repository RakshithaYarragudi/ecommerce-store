"use client";

import { useState } from "react";

import { products } from "@/data/products";

import ProductCard from "@/components/products/ProductCard";

import QuickViewModal from "@/components/products/QuickViewModal";

export default function HomePage() {

  const [selectedProduct, setSelectedProduct] =
    useState<any>(null);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortOption, setSortOption] =
    useState("default");

  const filteredProducts =
    products
      .filter((product) => {

        const matchesSearch =
          product.title
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            );

        const matchesCategory =
          selectedCategory === "All"
            ? true
            : product.category ===
              selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );

      })
      .sort((a, b) => {

        const priceA =
          Number(
            a.price.replace("$", "")
          );

        const priceB =
          Number(
            b.price.replace("$", "")
          );

        if (
          sortOption === "low-high"
        ) {

          return priceA - priceB;

        }

        if (
          sortOption === "high-low"
        ) {

          return priceB - priceA;

        }

        return 0;

      });

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="h-[60vh] flex flex-col items-center justify-center text-center px-4 md:px-8">

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">

          Premium Fashion

        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl">

          Discover premium streetwear collections
          with modern style and comfort.

        </p>

      </section>

      {/* SEARCH */}
      <div className="px-4 md:px-8 mb-8">

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 md:px-6 py-4 md:py-5 text-base md:text-lg outline-none"
        />

      </div>

      {/* FILTER + SORT */}
      <div className="px-4 md:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 md:mb-14">

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-3 md:gap-4">

          {[
            "All",
            "Hoodies",
            "T-Shirts",
            "Shoes",
          ].map((category) => (

            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  category
                )
              }
              className={`px-5 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg transition ${
                selectedCategory ===
                category
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-white"
              }`}
            >

              {category}

            </button>

          ))}

        </div>

        {/* SORT */}
        <select
          value={sortOption}
          onChange={(e) =>
            setSortOption(
              e.target.value
            )
          }
          className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-lg outline-none"
        >

          <option value="default">

            Default Sorting

          </option>

          <option value="low-high">

            Price: Low to High

          </option>

          <option value="high-low">

            Price: High to Low

          </option>

        </select>

      </div>

      {/* PRODUCTS */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">

        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-12">

          Featured Products

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {filteredProducts.length === 0 ? (

            <div className="col-span-full flex flex-col items-center justify-center py-20 md:py-32 text-center">

              <h3 className="text-3xl md:text-4xl font-bold mb-4">

                No Products Found

              </h3>

              <p className="text-gray-400 text-lg md:text-xl">

                Try another search or category.

              </p>

            </div>

          ) : (

            filteredProducts.map(
              (product) => (

                <div
                  key={product.id}
                  className="group relative"
                >

                  <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.images[0]}
                  />

                  {/* QUICK VIEW */}
                  <button
                    onClick={() =>
                      setSelectedProduct(
                        product
                      )
                    }
                    className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 bg-white text-black px-5 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold opacity-0 group-hover:opacity-100 transition duration-300 z-30"
                  >

                    Quick View

                  </button>

                </div>

              )
            )

          )}

        </div>

      </section>

      {/* MODAL */}
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