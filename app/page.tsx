import Image from "next/image";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: "Bombote.com - Personal Reviews & Ratings Database",
  description: "Comprehensive personal database of detailed fragrance analysis, unbiased movie ratings, and honest TV series reviews with regular updates.",
  openGraph: {
    title: "Bombote.com - Personal Reviews & Ratings Database",
    description: "Comprehensive personal database of detailed fragrance analysis, unbiased movie ratings, and honest TV series reviews with regular updates.",
    url: "https://bombote.com",
    images: [
      {
        url: "/logo.png",
        width: 220,
        height: 200,
        alt: "Bombote.com Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://bombote.com",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData type="website" />
      <div className="bg-secondary min-h-screen">
        <div className="max-w-[1920px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mt-4 mb-8">
              <Image src="/logo.png" alt="Logo" width="220" height="200" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-12 bg-gradient-to-r from-emerald-400 via-blue-500 to-orange-500 bg-clip-text text-transparent">
              Honest Reviews & Ratings
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12">My curated collections of unbiased fragrance, movie, and TV show ratings database.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 w-full max-w-5xl">
              <div className="group">
                <a
                  href="/perfume"
                  className="p-8 bg-green-950/50 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 h-60 flex flex-col justify-between"
                >
                  <div className="flex justify-center mb-2">
                    <Image src="/icons8-perfume-bottle-100.png" width="50" height="50" alt="bottle" />
                  </div>
                  <h3 className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-emerald-200 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">Perfume Ratings</h3>
                  <div className="flex justify-center">
                    <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                      <span className="relative px-16 py-3 transition-all ease-out bg-gray-800 rounded-md group-hover:bg-opacity-0 duration-400 min-w-[120px]">
                        <span className="relative text-white">Open</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="group">
                <a
                  href="/movies"
                  className="p-8 bg-blue-950/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 h-60 flex flex-col justify-between"
                >
                  <div className="flex justify-center mb-4">
                    <Image src="/icons8-movie-50.png" width="50" height="50" alt="movie" />
                  </div>
                  <h3 className="text-2xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-400 bg-clip-text text-transparent">Movie Ratings</h3>
                  <div className="flex justify-center">
                    <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                      <span className="relative px-16 py-3 transition-all ease-out bg-gray-800 rounded-md group-hover:bg-opacity-0 duration-400 min-w-[120px]">
                        <span className="relative text-white">Open</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="group">
                <a
                  href="/series"
                  className="p-8 bg-orange-950/50 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 h-60 flex flex-col justify-between"
                >
                  <div className="flex justify-center mb-4">
                    <Image src="/icons8-tv-50.png" width="50" height="50" alt="tv" />
                  </div>
                  <h3 className="text-2xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-orange-200 via-orange-500 to-orange-400 bg-clip-text text-transparent">TV Show Ratings</h3>
                  <div className="flex justify-center">
                    <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                      <span className="relative px-16 py-3 transition-all ease-out bg-gray-800 rounded-md group-hover:bg-opacity-0 duration-400 min-w-[120px]">
                        <span className="relative text-white">Open</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
