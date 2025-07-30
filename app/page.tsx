"use client";

import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { Sparkles, Film, Tv, Droplets, Play, CirclePlay, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const CustomStyles: React.FC = () => (
  <style jsx global>{`
    @keyframes float {
      0%,
      100% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
        opacity: 0.3;
      }
      25% {
        transform: translateY(-20px) translateX(10px) rotate(90deg);
        opacity: 0.6;
      }
      50% {
        transform: translateY(-40px) translateX(-5px) rotate(180deg);
        opacity: 0.4;
      }
      75% {
        transform: translateY(-20px) translateX(-10px) rotate(270deg);
        opacity: 0.7;
      }
    }

    @keyframes draw-line {
      0% {
        stroke-dashoffset: 1000;
        opacity: 0;
      }
      50% {
        opacity: 0.8;
      }
      100% {
        stroke-dashoffset: 0;
        opacity: 0.4;
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-draw-line {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: draw-line 8s ease-in-out infinite;
      animation-delay: 1s;
    }

    .gradient-radial {
      background: radial-gradient(circle, var(--tw-gradient-stops));
    }
  `}</style>
);

const ThematicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(16,23,42,1)_0%,rgba(30,41,59,1)_35%,rgba(51,65,85,1)_70%,rgba(71,85,105,1)_100%)]" />

      {/* Perfume-themed elements */}
      <div className="absolute top-[10%] left-[15%] w-64 h-64 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-emerald-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-8 left-4 w-2 h-2 bg-emerald-400/50 rounded-full animate-bounce" />
        <div className="absolute top-4 right-8 w-1 h-1 bg-emerald-300/40 rounded-full animate-ping" />
      </div>

      {/* Movie-themed elements */}
      <div className="absolute top-[40%] right-[10%] w-96 h-96 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/25 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-8 border border-white/10 rounded-lg transform rotate-45" />
        <div className="absolute inset-12 border border-white/5 rounded-lg transform rotate-12" />
        <div className="absolute top-1/2 left-1/2 w-4 h-px bg-white/20 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* TV-themed elements */}
      <div className="absolute bottom-[15%] left-[50%] w-72 h-72 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-amber-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-8 h-6 border border-amber-300/30 rounded-sm transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-1/4 w-px h-4 bg-amber-300/20 animate-float" />
      </div>

      {/* Floating particles network */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-float"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + i * 7}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Organic lines connecting thematic elements */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(245 158 11)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Subtle connecting lines */}
        <path d="M 200 150 Q 400 100 800 400" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-draw-line" />
        <path d="M 300 500 Q 600 300 900 200" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-draw-line" />
        <path d="M 100 400 Q 500 600 800 450" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-draw-line" />
      </svg>

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <ThematicBackground />
      <CustomStyles />
      <StructuredData type="website" />

      <div className="min-h-screen relative isolate">
        {/* Hero Section */}
        <div className="max-w-[1920px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mt-4 mb-8">
              <Image src="/logo.png" alt="Logo" width="220" height="200" />
            </div>
            <h1 className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-4xl tracking-tight text-transparent sm:text-5xl md:text-6xl font-semibold font-sans pt-12 pb-4">
              Honest Reviews & Ratings
            </h1>
            <p className="text-lg md:text-xl text-gray-400 pb-20">My curated collections of unbiased fragrance, movie, and TV show ratings</p>

            {/* Perfume Card */}
            <div className="container mx-auto max-w-6xl px-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="group relative overflow-hidden border-0 bg-card/70 backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl border-border/30">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 opacity-20 transition-all duration-500 group-hover:opacity-30 shadow-emerald-500/20 group-hover:shadow-2xl group-hover:shadow-opacity-30`}
                  />
                  <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] bg-gradient-radial from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardHeader className="relative pb-6 pt-8">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700`} />
                    <div
                      className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl shadow-foreground/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <div className="rounded-full p-6 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm">
                        <Sparkles className="h-12 w-12" />
                      </div>
                    </div>
                    <CardTitle className="text-center text-3xl font-extrabold tracking-tight text-foreground pt-1">Perfume Ratings</CardTitle>
                  </CardHeader>
                  <CardContent className="relative pb-8">
                    <CardDescription className="text-center text-sm text-muted-foreground leading-relaxed px-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2">
                        <Droplets className="h-4 w-4 text-emerald-400" />
                        <span className="text-sm font-medium text-muted-foreground">200+ Fragrances tested</span>
                      </div>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="relative px-8 pb-8">
                    <Link href="/perfume" className="w-full">
                      <Button
                        className="w-full flex items-center gap-2 h-12 bg-gradient-to-r border border-foreground/20 text-foreground font-bold text-lg transition-all duration-300 hover:border-transparent from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 hover:text-white hover:shadow-lg hover:shadow-gray-900/50"
                        variant="outline"
                      >
                        Open
                        <span className="text-sm opacity-80">→</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                {/* Movie Card */}
                <Card className="group relative overflow-hidden border-0 bg-card/70 backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl border-border/30">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-20 transition-all duration-500 group-hover:opacity-30 shadow-blue-500/20 group-hover:shadow-2xl group-hover:shadow-opacity-30`}
                  />
                  <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] bg-gradient-radial from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardHeader className="relative pb-6 pt-8">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700`} />
                    <div
                      className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl shadow-foreground/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <div className="rounded-full p-6 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm">
                        <Film className="h-12 w-12" />
                      </div>
                    </div>
                    <CardTitle className="text-center text-3xl font-extrabold tracking-tight text-foreground pt-1">Movie Ratings</CardTitle>
                  </CardHeader>
                  <CardContent className="relative pb-8">
                    <CardDescription className="text-center text-sm text-muted-foreground leading-relaxed px-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2">
                        <Star className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-medium text-muted-foreground">2000+ Movies rated</span>
                      </div>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="relative px-8 pb-8">
                    <Link href="/movies" className="w-full">
                      <Button
                        className="w-full flex items-center gap-2 h-12 bg-gradient-to-r border border-foreground/20 text-foreground font-bold text-lg transition-all duration-300 hover:border-transparent from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:text-white hover:shadow-lg hover:shadow-gray-900/50"
                        variant="outline"
                      >
                        Open
                        <span className="text-sm opacity-80">→</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                {/* TV Show Card */}
                <Card className="group relative overflow-hidden border-0 bg-card/70 backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl border-border/30">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-700 opacity-20 transition-all duration-500 group-hover:opacity-30 shadow-amber-500/20 group-hover:shadow-2xl group-hover:shadow-opacity-30`}
                  />
                  <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] bg-gradient-radial from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardHeader className="relative pb-6 pt-8">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-amber-700`} />
                    <div
                      className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-700 shadow-2xl shadow-foreground/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <div className="rounded-full p-6 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm">
                        <Tv className="h-12 w-12" />
                      </div>
                    </div>
                    <CardTitle className="text-center text-3xl font-extrabold tracking-tight text-foreground pt-1">TV Show Ratings</CardTitle>
                  </CardHeader>
                  <CardContent className="relative pb-8">
                    <CardDescription className="text-center text-sm text-muted-foreground leading-relaxed px-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2">
                        <CirclePlay className="h-4 w-4 text-amber-400" />
                        <span className="text-sm font-medium text-muted-foreground">500+ Shows reviewed</span>
                      </div>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="relative px-8 pb-8">
                    <Link href="/series" className="w-full">
                      <Button
                        className="w-full h-12 flex items-center gap-2 bg-gradient-to-r border border-foreground/20 text-foreground font-bold text-lg transition-all duration-300 hover:border-transparent from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 hover:text-white hover:shadow-lg hover:shadow-gray-900/50"
                        variant="outline"
                      >
                        Open
                        <span className="text-sm opacity-80">→</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
