import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-bl from-emerald-400 from-10% via-emerald-600 via-25% to-primary-foreground to-80% shadow">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width="135" height="30" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 bg-gray-800 hover:bg-emerald-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  Home
                </Link>
                <Link href="/top-picks" className="text-gray-300 bg-gray-800 hover:bg-emerald-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  My Top Picks
                </Link>
                <Link href="/longevity" className="text-gray-300 bg-gray-800 hover:bg-emerald-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  Longevity Legend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
