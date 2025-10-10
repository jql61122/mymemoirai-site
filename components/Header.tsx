// components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#FAF7F1]/70 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center px-6 py-3">
        <Link
          href="/"
          className="text-2xl font-serif text-[#1E4636] tracking-wide"
        >
          MyMemoir
        </Link>
      </div>
    </header>
  );
}
