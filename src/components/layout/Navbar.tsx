export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold tracking-wide">
          FASHION
        </h1>

        <div className="flex items-center gap-6 text-sm md:text-base">

          <button className="hover:text-gray-300 transition">
            Home
          </button>

          <button className="hover:text-gray-300 transition">
            Products
          </button>

          <button className="hover:text-gray-300 transition">
            Cart
          </button>

          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Login
          </button>

        </div>

      </div>

    </nav>
  );
}