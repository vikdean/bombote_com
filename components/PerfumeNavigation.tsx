"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-bl from-emerald-400 from-10% via-emerald-600 via-25% to-primary-foreground to-80% shadow">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link href="/perfume">
                <Image src="/logo.png" alt="Logo" width="135" height="30" className="w-[80px] md:w-[135px] h-auto" />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link href="/perfume" className="text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white px-2 md:px-3 py-1 md:py-2 rounded-md text-xs md:text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/perfume/top-picks"
                  className="text-gray-300 bg-gray-800 hover:bg-emerald-800 hover:text-white px-2 md:px-3 py-1 md:py-2 rounded-md text-xs md:text-sm font-medium"
                >
                  My Top Picks
                </Link>
                <Link
                  href="/perfume/longevity"
                  className="text-gray-300 bg-gray-800 hover:bg-emerald-800 hover:text-white px-2 md:px-3 py-1 md:py-2 rounded-md text-xs md:text-sm font-medium"
                >
                  Longevity Legend
                </Link>
                <Link href="/movies" className="text-gray-300 bg-blue-800 hover:bg-blue-600 hover:text-white px-2 md:px-3 py-1 md:py-2 rounded-md text-xs md:text-sm font-medium">
                  Movie Ratings
                </Link>
                <Link href="/series" className="text-gray-300 bg-orange-800 hover:bg-orange-600 hover:text-white px-2 md:px-3 py-1 md:py-2 rounded-md text-xs md:text-sm font-medium">
                  TV Show Ratings
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-emerald-800 focus:outline-none"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/perfume" className="text-gray-300 hover:bg-emerald-800 hover:text-white block px-2 py-1 rounded-md text-xs font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/perfume/top-picks" className="text-gray-300 hover:bg-emerald-800 hover:text-white block px-2 py-1 rounded-md text-xs font-medium" onClick={() => setIsOpen(false)}>
                My Top Picks
              </Link>
              <Link href="/perfume/longevity" className="text-gray-300 hover:bg-emerald-800 hover:text-white block px-2 py-1 rounded-md text-xs font-medium" onClick={() => setIsOpen(false)}>
                Longevity Legend
              </Link>
              <Link href="/movies" className="text-gray-300 hover:bg-emerald-800 hover:text-white block px-2 py-1 rounded-md text-xs font-medium" onClick={() => setIsOpen(false)}>
                Movie Ratings
              </Link>
              <Link href="/series" className="text-gray-300 hover:bg-emerald-800 hover:text-white block px-2 py-1 rounded-md text-xs font-medium" onClick={() => setIsOpen(false)}>
                TV Show Ratings
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
