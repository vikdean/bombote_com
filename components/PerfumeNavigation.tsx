"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl shadow-black/50 w-[95%] max-w-7xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width="100" height="30" className="w-[80px] md:w-[100px] h-auto" />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link
                  href="/perfume"
                  className="text-white/90 bg-white/10 hover:bg-white/30 hover:text-white backdrop-blur-sm px-2 md:px-3 py-1 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border border-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/perfume/top-picks"
                  className="text-white/90 bg-emerald-500/25 hover:bg-emerald-400/50 hover:text-white backdrop-blur-sm px-2 md:px-3 py-1 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border border-emerald-400/20"
                >
                  My Top Picks
                </Link>
                <Link
                  href="/perfume/longevity"
                  className="text-white/90 bg-emerald-500/25 hover:bg-emerald-400/50 hover:text-white backdrop-blur-sm px-2 md:px-3 py-1 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border border-emerald-400/20"
                >
                  Longevity Legend
                </Link>
                <Link
                  href="/movies"
                  className="text-white/90 bg-blue-500/25 hover:bg-blue-400/50 hover:text-white backdrop-blur-sm px-2 md:px-3 py-1 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border border-blue-400/20"
                >
                  Movie Ratings
                </Link>
                <Link
                  href="/series"
                  className="text-white/90 bg-orange-500/25 hover:bg-orange-400/50 hover:text-white backdrop-blur-sm px-2 md:px-3 py-1 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border border-orange-400/20"
                >
                  TV Show Ratings
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-white hover:bg-white/20 backdrop-blur-sm focus:outline-none transition-all duration-300 border border-white/10"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white/5 backdrop-blur-md rounded-xl mt-2 border border-white/10">
              <Link
                href="/"
                className="text-white/90 hover:bg-white/20 hover:text-white block px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 border border-white/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/perfume/top-picks"
                className="text-white/90 hover:bg-emerald-500/30 hover:text-white block px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 border border-emerald-400/20"
                onClick={() => setIsOpen(false)}
              >
                My Top Picks
              </Link>
              <Link
                href="/perfume/longevity"
                className="text-white/90 hover:bg-emerald-500/30 hover:text-white block px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 border border-emerald-400/20"
                onClick={() => setIsOpen(false)}
              >
                Longevity Legend
              </Link>
              <Link
                href="/movies"
                className="text-white/90 hover:bg-blue-500/30 hover:text-white block px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 border border-blue-400/20"
                onClick={() => setIsOpen(false)}
              >
                Movie Ratings
              </Link>
              <Link
                href="/series"
                className="text-white/90 hover:bg-orange-500/30 hover:text-white block px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 border border-orange-400/20"
                onClick={() => setIsOpen(false)}
              >
                TV Show Ratings
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
