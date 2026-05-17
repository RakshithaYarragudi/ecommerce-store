import Image from "next/image";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {

  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* PRODUCT IMAGE */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden">

          <Image
            src="/images/hoodie.jpg"
            alt={id}
            fill
            className="object-cover"
          />

        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex flex-col justify-center">

          <p className="text-gray-400 uppercase tracking-widest mb-3">
            Premium Collection
          </p>

          <h1 className="text-5xl font-bold mb-6 capitalize">
            {id}
          </h1>

          <p className="text-3xl font-semibold mb-6">
            $59
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Modern oversized fashion wear designed for premium comfort and street-style aesthetics.
          </p>

          {/* SIZE BUTTONS */}
          <div className="flex gap-4 mb-8">

            <button className="border border-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
              S
            </button>

            <button className="border border-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
              M
            </button>

            <button className="border border-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
              L
            </button>

          </div>

          {/* ADD TO CART */}
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition w-fit">
            Add To Cart
          </button>

        </div>

      </div>

    </main>
  );
}