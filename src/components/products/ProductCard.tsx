import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  price: string;
  image: string;
};

export default function ProductCard({
  title,
  price,
  image,
}: ProductCardProps) {

  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/products/${slug}`}>

      <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 group cursor-pointer">

        <div className="relative h-72 overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-110 transition duration-500"
          />

        </div>

        <div className="p-5">

          <h3 className="text-xl font-semibold mb-2">
            {title}
          </h3>

          <p className="text-gray-400 mb-4">
            Premium fashion wear
          </p>

          <div className="flex items-center justify-between">

            <span className="text-lg font-bold">
              {price}
            </span>

            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
              Buy
            </button>

          </div>

        </div>

      </div>

    </Link>
  );
}