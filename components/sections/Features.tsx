"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { features } from "@/data/features";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { gsap } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Features() {
  const root = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  useGSAP(
    () => {
      if (reducedMotion) return;
      gsap.from(".feature-card", {
        scrollTrigger: { trigger: ".features-grid", start: "top 78%" },
        y: 46,
        autoAlpha: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.09,
        immediateRender: false,
      });
    },
    { scope: root, dependencies: [reducedMotion] },
  );

  return (
    <section ref={root} id="features" className="features-section section-pad">
      <div className="site-container">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          description={t("description")}
        />
        <div className="features-grid">
          {features.map(({ icon: Icon, accent }, index) => {
            const item = items[index];
            return (
            <GlowCard className={`feature-card accent-${accent}`} key={item.title}>
              <div className="feature-top">
                <span className="feature-icon"><Icon size={21} /></span>
                <span className="feature-number">0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#contact" aria-label={t("learnAria", { title: item.title })}>
                {t("explore")} <ArrowUpRight size={15} />
              </a>
            </GlowCard>
          )})}
        </div>
      </div>
    </section>
  );
}
