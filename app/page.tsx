import Image from "next/image";

export const metadata = {
  title: "Bombote.com",
  description: "Perfume, Movie and TV Show ratings",
};

export default function Home() {
  return (
    <div className="bg-secondary min-h-screen">
      <div className="max-w-[1920px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-12 mt-8">
            <Image src="/logo.png" alt="Logo" width="280" height="200" />
          </div>
          <div className="flex flex-row space-x-6 items-center">
              <a href="/perfume" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Perfume Ratings</span>
                </span>
              </a>
            <a href="/movies" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Movie Ratings</span>
              </span>
            </a>

            <a href="/series" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">TV Show Ratings</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
