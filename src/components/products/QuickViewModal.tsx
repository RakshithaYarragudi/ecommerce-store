
"use client";

import Image from "next/image";

type QuickViewModalProps = {
  product: any;
  onClose: () => void;
};

export default function QuickViewModal({
  product,
  onClose,
}: QuickViewModalProps) {

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6">

      {/* MODAL */}
      <div className="bg-zinc-950 rounded-3xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-3xl z-20"
        >

          ✕

        </button>

        {/* IMAGE */}
        <div className="relative h-[500px] md:h-full min-h-[500px]">

          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="100vw"
            className="object-cover"
          />

        </div>

        {/* CONTENT */}
        <div className="p-10 flex flex-col justify-center">

          <p className="text-gray-400 uppercase tracking-[5px] mb-4">

            Quick View

          </p>

          <h1 className="text-6xl font-bold text-white mb-6">

            {product.title}

          </h1>

          <p className="text-4xl font-semibold text-white mb-8">

            {product.price}

          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">

            Premium streetwear designed for comfort, elegance, and modern fashion lovers.

          </p>

          <button className="bg-white text-black py-5 rounded-full text-lg font-semibold hover:bg-gray-200 transition">

            Add To Cart

          </button>

        </div>

      </div>

    </div>
  );
}