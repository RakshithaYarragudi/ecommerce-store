export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Register
        </h1>

        <form className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className="bg-zinc-800 px-5 py-4 rounded-xl outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-zinc-800 px-5 py-4 rounded-xl outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-zinc-800 px-5 py-4 rounded-xl outline-none"
          />

          <button
            className="bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">

          Already have an account?{" "}

          <a
            href="/login"
            className="text-white hover:underline"
          >
            Login
          </a>

        </p>

      </div>

    </main>
  );
}