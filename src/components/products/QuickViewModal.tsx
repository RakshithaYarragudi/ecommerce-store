"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type QuickViewModalProps = {
  product: {
    title: string;
    price: string;
    image: string;
  };

  onClose: () => void;
};

export default function QuickViewModal({
  product,
  onClose,
}: QuickViewModalProps) {

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-zinc-900 rounded-3xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2"
      >

        {/* IMAGE */}
        <div className="relative h-[500px]">

          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />

        </div>

        {/* CONTENT */}
        <div className="p-10 flex flex-col justify-center">

          <p className="text-gray-400 uppercase tracking-[4px] mb-4">
            Quick View
          </p>

          <h2 className="text-5xl font-bold mb-6">
            {product.title}
          </h2>

          <p className="text-3xl font-semibold mb-8">
            {product.price}
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">

            Premium streetwear designed for comfort, elegance, and modern fashion lovers.

          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition mb-4">

            Add To Cart

          </button>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            Close
          </button>

        </div>

      </motion.div>

    </div>
  );
}