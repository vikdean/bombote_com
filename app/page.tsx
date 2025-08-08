"use client";

import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { Sparkles, Film, Tv, Droplets, Play, CirclePlay, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { CircleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  return (
    <>
      <StructuredData type="website" />
      <div className="thematic-background"></div>

      <div className="min-h-screen relative isolate">
        {/* Hero Section */}
        <div className="max-w-[1920px] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mt-4 mb-4 sm:mt-2 sm:mb-2">
              <Image src="/logo.png" alt="Logo" width={220} height={200} className="max-w-[160px] sm:max-w-[180px] md:max-w-[200px] h-auto" />
            </div>
            <h1 className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-2xl tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-sans pt-8 pb-2">
              Honest Reviews & Ratings
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-400 pb-8 sm:pb-4 md:pb-16 px-4">My curated collections of unbiased fragrance, movie, and TV show ratings</p>

            {/* Perfume Card */}
            <div className="container mx-auto max-w-6xl px-2 sm:px-4">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="group relative overflow-hidden border-0 bg-card/70 backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl border-border/30">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 opacity-20 transition-all duration-500 group-hover:opacity-30 shadow-emerald-500/20 group-hover:shadow-2xl group-hover:shadow-opacity-30`}
                  />
                  <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] bg-gradient-radial from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardHeader className="relative pb-4 pt-6 sm:pb-6 sm:pt-8">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700`} />
                    <div
                      className={`mx-auto mb-3 sm:mb-4 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl shadow-foreground/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <div className="rounded-full p-3 sm:p-4 md:p-6 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm">
                        <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                      </div>
                    </div>
                    <CardTitle className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground pt-1">Perfume Ratings</CardTitle>
                  </CardHeader>
                  <CardContent className="relative pb-4 sm:pb-6 md:pb-8">
                    <CardDescription className="text-center text-xs sm:text-sm text-muted-foreground leading-relaxed px-2">
                      <div className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-1 sm:px-4 sm:py-2">
                        <Droplets className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground">200+ Fragrances tested</span>
                      </div>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="relative px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
                    <Link href="/perfume" className="w-full">
                      <Button
                        className="w-full flex items-center gap-2 h-10 sm:h-11 md:h-12 bg-gradient-to-r text-foreground font-bold text-sm sm:text-base md:text-lg transition-all duration-300 from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 hover:text-white hover:shadow-lg hover:shadow-gray-900/50"
                        variant="outline"
                      >
                        Open
                        <span className="text-xs sm:text-sm opacity-80">→</span>
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
                  <CardHeader className="relative pb-4 pt-6 sm:pb-6 sm:pt-8">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700`} />
                    <div
                      className={`mx-auto mb-3 sm:mb-4 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl shadow-foreground/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <div className="rounded-full p-3 sm:p-4 md:p-6 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm">
                        <Film className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                      </div>
                    </div>
                    <CardTitle className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground pt-1">Movie Ratings</CardTitle>
                  </CardHeader>
                  <CardContent className="relative pb-4 sm:pb-6 md:pb-8">
                    <CardDescription className="text-center text-xs sm:text-sm text-muted-foreground leading-relaxed px-2">
                      <div className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-1 sm:px-4 sm:py-2">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground">2000+ Movies rated</span>
                      </div>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="relative px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
                    <Link href="/movies" className="w-full">
                      <Button
                        className="w-full flex items-center gap-2 h-10 sm:h-11 md:h-12 bg-gradient-to-r text-foreground font-bold text-sm sm:text-base md:text-lg transition-all duration-300 from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:text-white hover:shadow-lg hover:shadow-gray-900/50"
                        variant="outline"
                      >
                        Open
                        <span className="text-xs sm:text-sm opacity-80">→</span>
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
                  <CardHeader className="relative pb-4 pt-6 sm:pb-6 sm:pt-8">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-amber-700`} />
                    <div
                      className={`mx-auto mb-3 sm:mb-4 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-700 shadow-2xl shadow-foreground/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <div className="rounded-full p-3 sm:p-4 md:p-6 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm">
                        <Tv className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                      </div>
                    </div>
                    <CardTitle className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground pt-1">TV Show Ratings</CardTitle>
                  </CardHeader>
                  <CardContent className="relative pb-4 sm:pb-6 md:pb-8">
                    <CardDescription className="text-center text-xs sm:text-sm text-muted-foreground leading-relaxed px-2">
                      <div className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-1 sm:px-4 sm:py-2">
                        <CirclePlay className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground">500+ Shows reviewed</span>
                      </div>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="relative px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
                    <Link href="/series" className="w-full">
                      <Button
                        className="w-full h-10 sm:h-11 md:h-12 flex items-center gap-2 bg-gradient-to-r text-foreground font-bold text-sm sm:text-base md:text-lg transition-all duration-300 from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 hover:text-white hover:shadow-lg hover:shadow-gray-900/50"
                        variant="outline"
                      >
                        Open
                        <span className="text-xs sm:text-sm opacity-80">→</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Alert */}
            <Alert className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 text-left mt-12 w-[60%]">
              <div className="flex items-center space-x-4 rounded-md py-1">
                <CircleAlert className="text-neutral-200" />
                <div className="flex-1 space-y-1">
                  <AlertTitle className="text-xs md:text-sm font-bold leading-none text-foreground">Note</AlertTitle>
                  <AlertDescription className="text-xs md:text-sm text-gray-300">
                    Please keep in mind, the ratings on this site are strictly based on my own personal taste and preferences.
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          </div>
        </div>
      </div>
    </>
  );
}
