import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/products/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Fashion Store
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8">
          Discover modern fashion collections with premium style and comfort.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>

      </section>

      {/* PRODUCT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <ProductCard
            title="Oversized Hoodie"
            price="$59"
          />

          <ProductCard
            title="Classic Jacket"
            price="$89"
          />

          <ProductCard
            title="Urban T-Shirt"
            price="$39"
          />

        </div>

      </section>

    </main>
  );
}