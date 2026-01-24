import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

export default function NeuralNetworkHero({
  title,
  description,
  badgeText = "Solution Hub Technologies",
  badgeLabel = "SOHUB",
  ctaButtons = [
    { text: "Explore ecosystem", href: "#ecosystem", primary: true },
    { text: "Why we exist", href: "#why" },
  ],
  microDetails = ["Discipline", "Transparency", "Results"],
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const microRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (badgeRef.current) {
        gsap.set(badgeRef.current, { autoAlpha: 0, y: -10 });
        tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0);
      }

      if (titleRef.current) {
        gsap.set(titleRef.current, { autoAlpha: 0, y: 30 });
        tl.to(titleRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.1);
      }

      if (paraRef.current) {
        gsap.set(paraRef.current, { autoAlpha: 0, y: 20 });
        tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.3);
      }

      if (ctaRef.current) {
        gsap.set(ctaRef.current, { autoAlpha: 0, y: 20 });
        tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.45);
      }

      if (microRef.current) {
        gsap.set(microRef.current, { autoAlpha: 0, y: 10 });
        tl.to(microRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.55);
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-background"
    >
      <div className="container-main relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="mb-6 flex items-center gap-2 rounded-full border border-primary/25 bg-background px-4 py-1.5 font-medium">
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
            {badgeLabel}
          </span>
          <span className="text-sm text-foreground-muted">{badgeText}</span>
        </div>

        {/* Title */}
        <h1 ref={titleRef} className="text-display max-w-5xl text-balance text-foreground">
          {title}
        </h1>

        {/* Description */}
        <p ref={paraRef} className="mt-8 max-w-2xl text-body-lg text-pretty">
          {description}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {ctaButtons.map((button) => (
            <a
              key={button.href + button.text}
              href={button.href}
              className={button.primary ? "btn-primary" : "btn-outline"}
            >
              {button.text}
            </a>
          ))}
        </div>

        {/* Micro Details */}
        <div ref={microRef} className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-foreground-muted">
          {microDetails.map((detail) => (
            <span key={detail} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              {detail}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
