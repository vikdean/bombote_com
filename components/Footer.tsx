import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-8">
      <div className="py-2 bg-muted-foreground/15 shadow-2xl backdrop-blur-md border-t border-white/30">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <Image src="/footer_logo.png" alt="Logo" width="180" height="200" />
            <p className="mt-2 text-xs text-white">&copy; 2025 Bombote. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
