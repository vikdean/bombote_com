import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-40 bg-secondary">
      <div className="py-10 bg-gradient-to-tr from-orange-400 from-10% via-orange-600 via-25% to-orange-950 to-80% shadow">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <Image src="/logo.png" alt="Logo" width="120" height="30" />
            <p className="mt-5 text-sm text-white">&copy; 2025 Bombote. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
