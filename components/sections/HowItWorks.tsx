"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import {
  ArrowDown,
  BellRing,
  Braces,
  CircleUserRound,
  DatabaseZap,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const stepIcons = [Braces, CircleUserRound, Sparkles, DatabaseZap] as const;

export function HowItWorks() {
  const root = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const reducedMotion = useReducedMotion();
  const t = useTranslations("how");
  const stepContent = t.raw("steps") as Array<{ title: string; description: string }>;

  useGSAP(
    () => {
      if (reducedMotion || window.innerWidth < 900) return;

      gsap.utils.toArray<HTMLElement>(".timeline-step").forEach((step, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 58%",
            end: "bottom 58%",
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index),
          },
        });
      });
    },
    { scope: root, dependencies: [reducedMotion] },
  );

  return (
    <section ref={root} id="how-it-works" className="how-section section-pad">
      <div className="site-container">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          description={t("description")}
        />
        <div className="how-grid">
          <div className="timeline-copy">
            {stepContent.map(({ title, description }, index) => {
              const Icon = stepIcons[index];
              const number = `0${index + 1}`;
              return (
              <article className={`timeline-step ${activeStep === index ? "active" : ""}`} key={number}>
                <div className="step-number">{number}</div>
                <div>
                  <span className="step-icon"><Icon size={18} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            )})}
          </div>
          <div className="sticky-workflow">
            <div className="workflow-visual">
              <div className="visual-head">
                <div><i /><i /><i /></div>
                <span>{t("workflow")}</span>
                <em>{t("active")}</em>
              </div>
              <div className="visual-canvas">
                <div className={`canvas-node source ${activeStep >= 0 ? "is-on" : ""}`}>
                  <span><CircleUserRound size={17} /></span><p>{t("newLead")}<small>{t("websiteForm")}</small></p>
                </div>
                <div className="canvas-line"><i className={activeStep >= 1 ? "is-on" : ""} /></div>
                <div className={`canvas-node ai ${activeStep >= 1 ? "is-on" : ""}`}>
                  <span><Sparkles size={17} /></span><p>{t("aiQualification")}<small>{t("intentScore")}</small></p><b>92</b>
                </div>
                <div className="canvas-line"><i className={activeStep >= 2 ? "is-on" : ""} /></div>
                <div className="branch-row">
                  <div className={`canvas-node compact ${activeStep >= 2 ? "is-on" : ""}`}><span><DatabaseZap size={16} /></span><p>{t("updateCrm")}<small>{t("qualified")}</small></p></div>
                  <div className={`canvas-node compact ${activeStep >= 3 ? "is-on" : ""}`}><span><BellRing size={16} /></span><p>{t("notifySales")}<small>{t("slackEmail")}</small></p></div>
                </div>
              </div>
              <div className="visual-footer"><span><i /> {t("healthy")}</span><small>{t("lastRun")}</small></div>
            </div>
            <div className="scroll-cue"><ArrowDown size={14} /> {t("scroll")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
