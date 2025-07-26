import Navigation from "@/components/MoviesNavigation";
import Footer from "@/components/Footer";

export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow bg-secondary">{children}</main>
      <Footer />
    </div>
  );
}
