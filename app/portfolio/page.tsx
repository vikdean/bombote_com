import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Turong.fit",
    description: "Its a simple Workout Planner allowing the user to plan weekly workouts, tracking muscle groups, sets, and reps.",
    href: "https://turong.fit",
    image: "/portfolio/turong.png",
    stats: [{ label: "State", value: "Live" }],
  },
  {
    title: "SkillSift.net",
    description: "This was my first AI powered Project, aiming to provide CV Analytics and comparisons. The target demographic was quite narrow, so I wasn't able to market it effectively.",
    href: "",
    image: "/portfolio/skillsift.png",
    stats: [{ label: "State", value: "Dead" }],
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative" aria-label="Design Portfolio">
      <div className="w-[95%] max-w-7xl mx-auto">
        <div className="mt-6 space-y-4 px-4 sm:px-6 lg:px-8 pt-12 pb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent font-sans tracking-tight leading-[1.35] pb-2">
            My Projects Portfolio
          </h1>
        </div>

        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => {
              const isLive = project.stats.some((stat) => stat.label === "State" && stat.value === "Live");

              return (
                <Card
                  key={project.title}
                  className="relative mx-auto w-full max-w-6xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_30px_70px_rgba(15,23,42,0.6)] hover:border-white/30"
                >
                  <CardContent className="px-0 pt-0 pb-12">
                    <div className="px-10 mt-8">
                      <CardHeader className="p-0 space-y-4">
                        <CardTitle className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{project.title}</CardTitle>
                        <CardDescription className="text-base md:text-lg leading-relaxed text-white/70">{project.description}</CardDescription>
                      </CardHeader>
                    </div>
                    <div className="px-10 mt-10">
                      <AspectRatio ratio={16 / 9}>
                        <div className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] shadow-black/40">
                          <Image
                            src={project.image}
                            alt={`${project.title} interface preview`}
                            fill
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-transparent" aria-hidden />
                          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/15 bg-slate-950/70 px-6 py-4 text-sm md:text-base text-white/80 backdrop-blur-lg">
                            <div className="flex flex-wrap items-center gap-6">
                              {project.stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                  <span className="text-white/60 uppercase tracking-[0.25em] text-[0.7rem] md:text-sm">{stat.label}</span>
                                  <span className="text-white font-semibold text-lg md:text-2xl">{stat.value}</span>
                                </div>
                              ))}
                            </div>
                            {isLive && project.href && (
                              <Link href={project.href} target="_blank" rel="noreferrer noopener" className="ml-auto shrink-0">
                                <Button className="bg-emerald-500 text-white hover:bg-emerald-500/90">Visit this site</Button>
                              </Link>
                            )}
                          </div>
                          <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-60" aria-hidden />
                        </div>
                      </AspectRatio>
                    </div>
                  </CardContent>
                  <div className="pointer-events-none absolute -right-14 -top-12 h-48 w-48 rounded-full bg-white/15 blur-3xl"></div>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
