'use client';
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ArrowRight } from 'lucide-react';
import { Sparkles } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import sohubAILogo from '@/assets/sohub-ai-logo.svg';
import sohubConnectLogo from '@/assets/connect (1).png';
import oMamaLogo from '@/assets/O-mama (1).png';
import empLogo from '@/assets/emp (1).png';
import filmicLogo from '@/assets/Filmic (1).png';
import tolparLogo from '@/assets/tolpar-logo.svg';
import protectLogo from '@/assets/protect-logo (1).png';

const initiatives = [
    { name: 'CONNECT', src: sohubConnectLogo },
    { name: 'O-MAMA', src: oMamaLogo },
    { name: 'EMP', src: empLogo },
    { name: 'TOLPAR', src: tolparLogo },
    { name: 'AI', src: sohubAILogo },
    { name: 'PROTECT', src: protectLogo },
    { name: 'FILMIC STATION', src: filmicLogo },
    { name: 'XIMPUL', src: '/src/assets/84aae5ae-dcca-4942-a63a-ee14ebc01c94.png' },
]

export const SocialProof = () => {
    const { theme } = useTheme();
    return (
        <section className="w-full overflow-hidden bg-background pt-24 pb-8 relative flex flex-col">
            <div className="pointer-events-none absolute inset-0 z-0 top-48" aria-hidden="true">
                <div className="absolute inset-x-0 bottom-0 h-[500px] w-full overflow-hidden">
                    <div className="absolute inset-0 [mask-image:radial-gradient(50%_50%,white,transparent)]">
                        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--gradient-color),transparent_70%)] before:opacity-20" />
                        <div className="absolute -left-1/2 top-[60%] aspect-[1/0.7] z-0 w-[200%] rounded-[100%] border-t border-zinc-900/10 dark:border-white/10 bg-background" />
                        <Sparkles
                            density={1200}
                            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                            color={theme === "dark" ? "#ffffff" : "#000000"}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full relative z-10">
                <div className="mx-auto max-w-4xl px-6 text-center space-y-4 relative">
                    <div className="mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full backdrop-blur-xl bg-white/70 border border-border/30 px-3 sm:px-4 py-2 shadow-sm">
                        <span className="rounded-full bg-primary px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-primary-foreground tracking-wide">
                            SOHUB
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-foreground-muted">Solution Hub Technologies</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium tracking-tight text-foreground flex flex-col items-center gap-4">
                        <span>We build technology that helps</span>
                        <span>Bangladesh work better.</span>
                    </h2>
                    <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
                        Technology, built with discipline, to solve real problems — reliably, at scale.
                    </p>
                </div>

                <div className="mt-10 flex flex-col items-center gap-10 w-full">
                    <div className="relative h-[100px] w-full mb-4">
                        <InfiniteSlider
                            className='flex h-full w-full items-center'
                            duration={150}
                            gap={64}
                        >
                            {[...initiatives, ...initiatives, ...initiatives, ...initiatives].map((item, index) => (
                                <div
                                    key={`${item.name}-${index}`}
                                    className="w-56 h-24 flex items-center justify-center transition-all duration-300 transform-gpu will-change-transform hover:scale-105 cursor-pointer"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className={`h-10 w-auto object-contain transition-all duration-300 grayscale ${item.name === 'O-MAMA' ? 'opacity-100 brightness-75 contrast-125' : item.name === 'EMP' ? 'opacity-100' : item.name === 'CONNECT' ? 'opacity-100' : 'opacity-60'} hover:filter-none hover:opacity-100 ${item.name === 'PROTECT' ? 'mix-blend-multiply dark:mix-blend-normal' : ''}`}
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>
                        <ProgressiveBlur
                            className='pointer-events-none absolute top-0 left-0 h-full w-[150px] sm:w-[300px]'
                            direction='left'
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className='pointer-events-none absolute top-0 right-0 h-full w-[150px] sm:w-[300px]'
                            direction='right'
                            blurIntensity={1}
                        />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 px-6">
                        <a
                            href="#initiatives"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#EA580C] hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Explore initiatives
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#why"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-white px-5 py-2.5 text-xs font-medium text-foreground transition-all duration-300 hover:bg-white hover:border-border hover:shadow-sm hover:-translate-y-0.5"
                        >
                            Why we exist
                        </a>
                        <a
                            href="#approach"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-white px-5 py-2.5 text-xs font-medium text-foreground transition-all duration-300 hover:bg-white hover:border-border hover:shadow-sm hover:-translate-y-0.5"
                        >
                            Our approach
                        </a>
                    </div>

                    <div className="text-center">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                            Our Focus
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {['Discipline', 'Transparency', 'Results'].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-border/30 bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white hover:text-foreground"
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
