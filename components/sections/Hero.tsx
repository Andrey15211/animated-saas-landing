"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Check,
  CircleUserRound,
  Clock3,
  Mail,
  MousePointer2,
  Play,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { gsap } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const t = useTranslations("hero");
  const common = useTranslations("common");

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.set("[data-hero-reveal]", { clearProps: "all" });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      timeline
        .from("[data-hero-reveal]", {
          y: 32,
          autoAlpha: 0,
          stagger: 0.11,
        })
        .from(
          ".dashboard-shell",
          { y: 42, rotationX: 6, autoAlpha: 0, duration: 1.2 },
          "-=.65",
        )
        .from(
          ".float-card",
          { scale: 0.86, autoAlpha: 0, stagger: 0.12 },
          "-=.7",
        );

      gsap.to(".float-card-a", {
        y: -10,
        duration: 3.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".float-card-b", {
        y: 9,
        duration: 4.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: root, dependencies: [reducedMotion] },
  );

  return (
    <section ref={root} id="top" className="hero">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <div data-hero-reveal className="hero-signal">
            <span>
              <Sparkles size={13} /> {t("signal")}
            </span>
            <i />
            {t("automated")}
          </div>
          <h1 data-hero-reveal>
            {t("title")} <span>{t("titleAccent")}</span>
          </h1>
          <p data-hero-reveal className="hero-description">
            {t("description")}
          </p>
          <div data-hero-reveal className="hero-actions">
            <Button href="#contact">
              {t("primary")} <ArrowRight size={17} />
            </Button>
            <Button href="#how-it-works" variant="secondary">
              <Play size={15} fill="currentColor" /> {t("secondary")}
            </Button>
          </div>
          <div data-hero-reveal className="hero-proof">
            <span>
              <Check size={14} /> {t("proofCard")}
            </span>
            <span>
              <Check size={14} /> {t("proofSetup")}
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label={t("previewAria")}>
          <div className="dashboard-shell">
            <div className="dashboard-topbar">
              <div className="window-controls"><i /><i /><i /></div>
              <span>{t("commandCenter")}</span>
              <div className="live-status"><i /> {common("live")}</div>
            </div>
            <div className="dashboard-body">
              <aside className="dashboard-sidebar" aria-hidden="true">
                <div className="mini-logo"><Zap size={15} fill="currentColor" /></div>
                {[0, 1, 2, 3, 4].map((item) => <i key={item} className={item === 1 ? "active" : ""} />)}
              </aside>
              <div className="dashboard-main">
                <div className="dash-header">
                  <div><small>{t("greeting")}</small><strong>{t("pipeline")}</strong></div>
                  <span>{t("period")}</span>
                </div>
                <div className="metric-row">
                  <div className="metric-card">
                    <span>{t("qualifiedLeads")}</span>
                    <strong>1,284</strong>
                    <em><TrendingUp size={11} /> 18.4%</em>
                  </div>
                  <div className="metric-card">
                    <span>{t("hoursSaved")}</span>
                    <strong>236</strong>
                    <em><TrendingUp size={11} /> 24.1%</em>
                  </div>
                  <div className="metric-card chart-card">
                    <span>{t("conversion")}</span><strong>34.8%</strong>
                    <div className="mini-chart">{[20, 34, 28, 51, 46, 72, 83, 69, 92].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
                  </div>
                </div>
                <div className="workflow-panel">
                  <div className="panel-title"><strong>{t("qualificationFlow")}</strong><span>{t("running")}</span></div>
                  <div className="workflow">
                    <div className="workflow-node node-lead"><CircleUserRound size={15} /><span>{t("newLead")}</span></div>
                    <ArrowRight className="flow-arrow" size={18} />
                    <div className="workflow-node node-ai"><Sparkles size={15} /><span>{t("aiScore")}</span></div>
                    <ArrowRight className="flow-arrow" size={18} />
                    <div className="workflow-split">
                      <div className="workflow-node"><Mail size={14} /><span>{t("followUp")}</span></div>
                      <div className="workflow-node"><MousePointer2 size={14} /><span>{t("assignOwner")}</span></div>
                    </div>
                  </div>
                </div>
                <div className="activity-row">
                  <div><span className="avatar">AR</span><p><strong>Alex Rivera</strong><small>{t("movedQualified")}</small></p><time>{common("now")}</time></div>
                  <div><span className="avatar avatar-blue">SK</span><p><strong>Sarah Kim</strong><small>{t("followUpScheduled")}</small></p><time>2m</time></div>
                </div>
              </div>
            </div>
          </div>
          <div className="float-card float-card-a">
            <span className="float-icon"><Sparkles size={15} /></span>
            <p><small>{t("aiQualification")}</small><strong>{t("hotLead")}</strong></p>
            <em>94</em>
          </div>
          <div className="float-card float-card-b">
            <span className="float-icon cyan"><Clock3 size={15} /></span>
            <p><small>{t("responseTime")}</small><strong>{t("faster")}</strong></p>
          </div>
        </div>
      </div>
      <div className="trusted site-container" data-hero-reveal>
        <span>{t("integrations")}</span>
        <div><b>hubspot</b><b>Salesforce</b><b>slack</b><b>Notion</b><b>zapier</b></div>
      </div>
    </section>
  );
}
