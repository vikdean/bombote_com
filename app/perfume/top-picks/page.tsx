import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { BicepsFlexed, DollarSign, Heart, Star } from "lucide-react";

const top_picks = [
  {
    brand: "Dior",
    name: "Sauvage Elixir",
    type: "Elixir",
    picture: "/top-picks/sauvage_elixir.jpg",
    scent: "🌕🌕🌕🌕🌕",
    longevity: "8 hours+",
    price: "moderate",
    overall_score: "10/10",
    description:
      "The Modern Mens perfume; perfect scent, with incredible performance at an OK price; highly recommended. If you are looking for a clone, Zimaya - Zukhruf Black is about a 95% match scent wise, with a solid performance, and its only around $25 for 100ml.",
  },
  {
    brand: "Initio",
    name: "Paragon",
    type: "Parfum",
    picture: "/top-picks/PARAGON.jpg",
    scent: "🌕🌕🌕🌕🌗",
    longevity: "~7 hours",
    price: "expensive",
    overall_score: "10/9",
    description: "Creamy-fruity-woody-spicy scent, good performance; however, its quite expensive.",
  },
  {
    brand: "Carolina Herrera",
    name: "Bad Boy Extreme",
    type: "Parfum",
    picture: "/top-picks/carolina-herrera-bad-boy-extreme.jpg",
    scent: "🌕🌕🌕🌕🌗",
    longevity: "8 hours+",
    price: "standard",
    overall_score: "10/9.5",
    description: "Unique scent, very good performance at a good price.",
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Scandal Pour Homme Absolu",
    type: "Parfum",
    picture: "/top-picks/jean-paul-gaultier-scandal.jpg",
    scent: "🌕🌕🌕🌕🌕",
    longevity: "~7 hours",
    price: "standard",
    overall_score: "10/9",
    description: "Lovely sweet, but not too sweet scent, good performance, affordable price.",
  },
  {
    brand: "Kenzo",
    name: "Homme",
    type: "Eau de Parfum",
    picture: "/top-picks/kenzo-homme.jpg",
    scent: "🌕🌕🌕🌕🌗",
    longevity: "8 hours+",
    price: "cheap",
    overall_score: "10/9.5",
    description: "Pleasant scent, similar to the Dior Sauvage Elixir. Very good performance at a bargain price.",
  },
  {
    brand: "Amouage",
    name: "Interlude 53 Man",
    type: "Eau de Parfum",
    picture: "/top-picks/Interlude-Man-53.jpg",
    scent: "🌕🌕🌕🌕🌑",
    longevity: "8 hours+",
    price: "expensive",
    overall_score: "10/9",
    description: "Unique scent, great performance, but expensive. Very similar to the regular Interlude, but less intrusive.",
  },
  {
    brand: "Ahmed Al Maghribi",
    name: "Brûlée",
    type: "Eau de Parfum",
    picture: "/top-picks/Brulee-scaled-1.jpeg",
    scent: "🌕🌕🌕🌕🌑",
    longevity: "8 hours",
    price: "cheap",
    overall_score: "10/9",
    description: "Woody-oriental scent with all-day performance, good price.",
  },
  {
    brand: "Mancera",
    name: "Red Tobacco",
    type: "Eau de Parfum",
    picture: "/top-picks/mancera_red_tobacco.jpg",
    scent: "🌕🌕🌕🌕🌑",
    longevity: "8 hours+",
    price: "cheap",
    overall_score: "10/9",
    description: "Smoky spicy-sweet tobacco with really good performance and it comes cheap.",
  },
  {
    brand: "Montale",
    name: "Oud Tobacco",
    type: "Eau de Parfum",
    picture: "/top-picks/montale_oud_tobacco.jpg",
    scent: "🌕🌕🌕🌕🌗",
    longevity: "8 hours+",
    price: "cheap",
    overall_score: "10/9.5",
    description: "Oriental woody Tobacco scent with good performance, really cheap.",
  },
];

export const metadata = {
  title: "Perfume Top Picks & Recommendations",
  description:
    "Curated selection of the best perfumes and fragrances personally tested and rated. Discover top-performing colognes from designer and niche brands with detailed reviews, longevity, and value analysis.",
  keywords: [
    "best perfumes",
    "top perfume picks",
    "perfume recommendations",
    "best cologne",
    "top fragrances",
    "designer perfumes",
    "niche fragrances",
    "best men's cologne",
    "fragrance reviews",
    "perfume guide",
    "cologne recommendations",
    "luxury perfumes",
    "affordable perfumes",
    "long lasting perfumes",
    "high performance fragrances",
    "perfume ratings",
  ],
  authors: [{ name: "VA" }],
  creator: "VA",
  publisher: "Bombote.com",
  category: "Lifestyle",
  classification: "Product Recommendations",
  openGraph: {
    title: "Perfume Top Picks & Recommendations | Bombote.com",
    description: "Curated selection of the best perfumes and fragrances personally tested and rated. Discover top-performing colognes with detailed reviews and value analysis.",
    url: "https://bombote.com/perfume/top-picks",
    type: "website",
    locale: "en_US",
    siteName: "Bombote.com",
    images: [
      {
        url: "/top-picks/sauvage_elixir.jpg",
        width: 380,
        height: 300,
        alt: "Dior Sauvage Elixir - Top Perfume Pick",
      },
      {
        url: "/logo.png",
        width: 220,
        height: 200,
        alt: "Bombote.com Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfume Top Picks & Recommendations | Bombote.com",
    description: "Curated selection of the best perfumes and fragrances personally tested and rated with detailed reviews.",
    images: ["/top-picks/sauvage_elixir.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bombote.com/perfume/top-picks",
  },
  other: {
    "revisit-after": "14 days",
    rating: "general",
    distribution: "global",
    "content-type": "product-recommendations",
  },
};

export default function TopPicks() {
  return (
    <div className="w-[95%] max-w-7xl mx-auto pt-16" aria-label="Top Perfume Picks">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground pb-8">My Top Picks</h1>
        <div className="grid grid-cols-1 gap-8 pb-16">
          {top_picks.map((option) => (
            <Card key={option.brand} className="text-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl shadow-black/50 w-full">
              <CardContent className="grid grid-cols-2 gap-4 p-6">
                <div className="col-span-1">
                  <Image src={option.picture} alt="Perfume Picture" width="380" height="300" className="object-contain rounded-3xl shadow-md" />
                </div>
                <div className="col-span-1 space-y-4">
                  <div>
                    <p className="text-xl md:text-3xl font-bold">{option.brand}</p>
                    <p className="text-base md:text-xl mt-2">{option.name}</p>
                  </div>
                  <Badge
                    className={`rounded-md py-1 px-2 text-foreground ${
                      option.type === "Parfum"
                        ? "bg-purple-800 hover:bg-purple-600"
                        : option.type === "Eau de Parfum"
                        ? "bg-orange-800 hover:bg-orange-600"
                        : option.type === "Elixir"
                        ? "bg-blue-700 hover:bg-blue-500"
                        : option.type === "Eau de Toilette"
                        ? "bg-gray-600 hover:bg-gray-400"
                        : ""
                    }`}
                  >
                    {option.type}
                  </Badge>
                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Scent: <Badge className="bg-muted-foreground/40 rounded-md py-1">{option.scent}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <BicepsFlexed className="h-5 w-5" />
                      Longevity: <Badge className="bg-muted-foreground/40 rounded-md py-1 text-foreground">{option.longevity}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Price: <Badge className="bg-muted-foreground/40 rounded-md py-1 text-foreground">{option.price}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      Rating: <Badge className="bg-orange-700 rounded-md py-1 text-foreground">{option.overall_score}</Badge>
                    </div>
                  </div>
                  <p className="text-foreground/90 text-xs md:text-base">{option.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
