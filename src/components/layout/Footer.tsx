import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-black border-t border-zinc-800 px-8 py-16 text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>

          <h2 className="text-4xl font-bold mb-4">

            FASHION

          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">

            Premium streetwear ecommerce experience
            built with Next.js and modern UI design.

          </p>

        </div>

        {/* LINKS */}
        <div>

          <h3 className="text-2xl font-semibold mb-6">

            Quick Links

          </h3>

          <div className="flex flex-col gap-4 text-gray-400 text-lg">

            <Link href="/">

              Home

            </Link>

            <Link href="/products">

              Products

            </Link>

            <Link href="/wishlist">

              Wishlist

            </Link>

            <Link href="/checkout">

              Checkout

            </Link>

          </div>

        </div>

        {/* SOCIAL */}
        <div>

          <h3 className="text-2xl font-semibold mb-6">

            Follow Us

          </h3>

          <div className="flex flex-col gap-4 text-gray-400 text-lg">

            <a href="#">

              Instagram

            </a>

            <a href="#">

              Twitter

            </a>

            <a href="#">

              YouTube

            </a>

            <a href="#">

              TikTok

            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-gray-500 text-lg">

        © 2026 Fashion Store. All rights reserved.

      </div>

    </footer>
  );
}