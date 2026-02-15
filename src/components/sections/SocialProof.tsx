'use client';
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ArrowRight } from 'lucide-react';
import { Sparkles } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";

import carouselConnect from '@/assets/carousel/connect.png';
import carouselOMama from '@/assets/carousel/o-mama.png';
import carouselEmp from '@/assets/carousel/emp.png';
import carouselFilmic from '@/assets/carousel/filmic-station.png';
import carouselTolpar from '@/assets/carousel/tolpar.png';
import carouselAI from '@/assets/carousel/sohub-ai.png';
import carouselProtect from '@/assets/carousel/protect.png';
import carouselXimpul from '@/assets/carousel/ximpul.png';

const initiatives = [
    { name: 'CONNECT', src: carouselConnect },
    { name: 'O-MAMA', src: carouselOMama },
    { name: 'EMP', src: carouselEmp },
    { name: 'TOLPAR', src: carouselTolpar },
    { name: 'AI', src: carouselAI },
    { name: 'PROTECT', src: carouselProtect },
    { name: 'FILMIC STATION', src: carouselFilmic },
    { name: 'XIMPUL', src: carouselXimpul },
]

export const SocialProof = () => {
    const { theme } = useTheme();
    return (
        <section className="w-full overflow-hidden bg-background pt-24 pb-8 relative flex flex-col">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 z-0 top-52" aria-hidden="true">
                <div className="absolute inset-x-0 bottom-0 h-[500px] w-full overflow-hidden">
                    <div className="absolute inset-0 [mask-image:radial-gradient(50%_50%,white,transparent)]">
                        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--gradient-color),transparent_70%)] before:opacity-20" />
                        <div className="absolute -left-1/2 top-[45%] sm:top-[58%] aspect-[1/0.7] z-0 w-[200%] rounded-[100%] border-t border-zinc-900/10 dark:border-white/10 bg-background" />
                        <Sparkles
                            density={1200}
                            className="absolute inset-x-0 top-0 h-[55%] w-full [mask-image:radial-gradient(50%_80%,white,transparent_85%)]"
                            color={theme === "dark" ? "#ffffff" : "#000000"}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full relative z-10">
                {/* Hero Text Block */}
                <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center space-y-3 sm:space-y-4 relative">
                    {/* Badge */}
                    <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full backdrop-blur-xl bg-white/70 border border-border/30 px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                        <span className="rounded-full bg-primary px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs font-bold text-primary-foreground tracking-wide">
                            SOHUB
                        </span>
                        <span className="text-[11px] sm:text-sm font-medium text-foreground-muted">Solution Hub Technologies</span>
                    </div>

                    {/* Heading — separate mobile and desktop versions for clean line breaks */}
                    {/* Mobile heading (below sm) */}
                    <h2 className="sm:hidden text-[26px] leading-[1.25] font-medium tracking-tight text-foreground">
                        We build technology{'\n'}that helps Bangladesh{'\n'}work better.
                    </h2>
                    {/* Desktop heading (sm and above) — unchanged */}
                    <h2 className="hidden sm:flex text-4xl md:text-[50px] font-medium tracking-tight text-foreground flex-col items-center gap-4">
                        <span>We build technology that helps</span>
                        <span>Bangladesh work better.</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[13px] leading-relaxed sm:text-lg text-foreground/70 sm:text-foreground/80 max-w-[280px] sm:max-w-4xl mx-auto">
                        Technology, built with discipline, to solve real problems — reliably, at scale.
                    </p>
                </div>

                <div className="mt-6 sm:mt-4 flex flex-col items-center gap-8 sm:gap-10 w-full">
                    {/* Logo Carousel */}
                    <div className="relative h-[55px] sm:h-[100px] w-full mt-10 sm:mt-0">
                        <InfiniteSlider
                            className='flex h-full w-full items-center'
                            duration={150}
                            gap={32}
                        >
                            {[...initiatives, ...initiatives, ...initiatives, ...initiatives].map((item, index) => (
                                <div
                                    key={`${item.name}-${index}`}
                                    className="w-28 sm:w-32 h-[45px] sm:h-20 flex items-center justify-center transition-all duration-300 transform-gpu will-change-transform hover:scale-105 cursor-pointer"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className={`h-6 sm:h-8 w-auto max-w-[100px] sm:max-w-[120px] object-contain ${item.name === 'PROTECT' ? 'mix-blend-multiply dark:mix-blend-normal' : ''}`}
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>
                        <ProgressiveBlur
                            className='pointer-events-none absolute top-0 left-0 h-full w-[80px] sm:w-[300px]'
                            direction='left'
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className='pointer-events-none absolute top-0 right-0 h-full w-[80px] sm:w-[300px]'
                            direction='right'
                            blurIntensity={1}
                        />
                    </div>

                    {/* CTA Buttons — stacked on mobile, inline on desktop */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 px-8 sm:px-6 w-full sm:w-auto mt-20 sm:mt-8">
                        <a
                            href="#initiatives"
                            className="group w-auto sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F97316] px-8 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#EA580C] hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Initiatives
                            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <a
                                href="#why"
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-medium text-foreground transition-all duration-300 hover:bg-white hover:border-border hover:shadow-sm hover:-translate-y-0.5"
                            >
                                Why we exist
                            </a>
                            <a
                                href="#approach"
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-medium text-foreground transition-all duration-300 hover:bg-white hover:border-border hover:shadow-sm hover:-translate-y-0.5"
                            >
                                Our approach
                            </a>
                        </div>
                    </div>

                    {/* Our Focus */}
                    <div className="text-center">
                        <p className="mb-3 sm:mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                            Our Focus
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                            {['Discipline', 'Transparency', 'Results'].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-border/30 bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-sm font-medium text-foreground transition-colors hover:bg-white hover:text-foreground"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
