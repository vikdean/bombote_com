import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { BicepsFlexed, DollarSign, Heart, Link2, Star } from "lucide-react";
import Link from "next/link";

const top_picks = [
  {
    brand: "Dior",
    name: "Sauvage Elixir",
    type: "Elixir",
    picture: "/top-picks/sauvage_elixir.jpg",
    scent: "🌕🌕🌕🌕🌕",
    longevity: "12 hours+",
    price: "moderate",
    overall_score: "10/10",
    link: "https://amzn.to/42feVx5",
    description: "The Modern Mens perfume; perfect scent, with incredible performance at an OK price (get the Parfum or EDP version if you can't afford it).  Highly recommended.",
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
    link: "https://amzn.to/4kafhdU",
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
    overall_score: "10/9",
    link: "https://amzn.to/4fWLRxA",
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
    link: "https://amzn.to/4hfMDqp",
    description: "Lovely sweet, but not too sweet scent, good performance, affordable price.",
  },
  {
    brand: "Kenzo",
    name: "Homme",
    type: "Eau de Parfum",
    picture: "/top-picks/kenzo-homme.jpg",
    scent: "🌕🌕🌕🌕🌗",
    longevity: "10 hours+",
    price: "cheap",
    overall_score: "10/9",
    link: "https://amzn.to/3PClXnX",
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
    link: "https://amzn.to/4jRGWAT",
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
    link: "https://bombote.com/",
    description: "Woody-oriental scent with all-day performance, good price.",
  },
  {
    brand: "Mancera",
    name: "Red Tobacco",
    type: "Eau de Parfum",
    picture: "/top-picks/mancera_red_tobacco.jpg",
    scent: "🌕🌕🌕🌕🌑",
    longevity: "9 hours+",
    price: "cheap",
    overall_score: "10/9",
    link: "https://amzn.to/3DSX30K",
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
    overall_score: "10/9",
    link: "https://amzn.to/3BZG8Jz",
    description: "Oriental woody Tobacco scent with good performance, really cheap.",
  },
];

export const metadata = {
  title: "Bombote - Perfume Top Picks",
  description:
    "fragrance reviews, perfume ratings, best perfumes, cologne reviews, top fragrances, niche fragrances, designer perfumes, fragrance recommendations, perfume guide, unisex perfumes, luxury perfumes, fragrance notes, Eau de Parfum reviews, cologne guide, perfume comparisons, top-rated perfumes, affordable perfumes, mens cologne, fragrance database, perfume analysis, scent reviews",
};

export default function TopPicks() {
  return (
    <div className="bg-secondary" aria-label="Top Perfume Picks">
      <div className="max-w-[1400px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground pb-8">My Top Picks</h1>
        <div className="grid grid-cols-1 gap-6">
          {top_picks.map((option) => (
            <Card
              key={option.brand}
              className="text-xl rounded-xl border border-emerald-900 bg-gradient-to-tl from-emerald-700/40 from-1% to-card to-40% shadow-md w-full hover:border-emerald-600 duration-200"
            >
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
                    <div className="flex items-center gap-2">
                      <Link2 className="h-5 w-5" />
                      Link:{" "}
                      <Link href={option.link} className="text-emerald-300 hover:text-emerald-200" target="_blank" rel="noopener noreferrer">
                        Amazon
                      </Link>
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
