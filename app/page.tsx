import Image from "next/image";

export const metadata = {
  title: "Bombote.com",
  description: "Perfume, Movie and TV Show ratings",
};

export default function Home() {
  return (
    <div className="bg-secondary min-h-screen">
      <div className="max-w-[1920px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8 mt-8">
            <Image src="/logo.png" alt="Logo" width="220" height="200" />
          </div>
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            Welcome to Bombote.com
          </h1>
          <p className="text-xl md:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
            Your ultimate destination for curated ratings and reviews of perfumes, movies, and TV shows. Discover your next favorite scent or binge-worthy series.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-5xl">
            <div className="group">
              <a href="/perfume" className="block p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105">
                
                <Image src="/icons8-perfume-bottle-100.png" width="50" height="50" alt="bottle" className="mb-4 flex-col flex items-center justify-center"/>
                
                <h3 className="text-2xl font-bold text-white mb-3">Perfume Ratings</h3>
                <p className="text-gray-400 mb-4">Explore our comprehensive collection of fragrance reviews and ratings</p>
                <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                  <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Browse Perfumes</span>
                  </span>
                </div>
              </a>
            </div>

            <div className="group">
              <a href="/movies" className="block p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105">
                <Image src="/icons8-movie-50.png" width="50" height="50" alt="movie" className="mb-4 flex-col flex items-center justify-center"/>
                <h3 className="text-2xl font-bold text-white mb-3">Movie Ratings</h3>
                <p className="text-gray-400 mb-4">Find your next movie night pick with our detailed film reviews</p>
                <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                  <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Browse Movies</span>
                  </span>
                </div>
              </a>
            </div>

            <div className="group">
              <a href="/series" className="block p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105">
                <Image src="/icons8-tv-50.png" width="50" height="50" alt="tv" className="mb-4 flex-col flex items-center justify-center"/>
                <h3 className="text-2xl font-bold text-white mb-3">TV Show Ratings</h3>
                <p className="text-gray-400 mb-4">Discover binge-worthy series with our TV show recommendations</p>
                <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                  <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Browse TV Shows</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
