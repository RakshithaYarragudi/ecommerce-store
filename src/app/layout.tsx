import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Fashion Store",
  description: "Premium Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className="bg-black text-white">

        {/* TOASTER */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#18181b",
              color: "#fff",
              border: "1px solid #27272a",
            },
          }}
        />

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <Footer />

      </body>

    </html>
  );
}