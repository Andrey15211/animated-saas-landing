"use client";

import { useState } from "react";
import { Check, MoveRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { pricingPlans } from "@/data/pricing";
import { estimateMonthlyCost } from "@/lib/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pricing() {
  const [leads, setLeads] = useState(10_000);
  const estimate = estimateMonthlyCost(leads);
  const t = useTranslations("pricing");
  const locale = useLocale();
  const plans = t.raw("plans") as Array<{ name: string; description: string; features: string[] }>;

  return (
    <section id="pricing" className="pricing-section section-pad">
      <div className="site-container">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          description={t("description")}
          align="center"
        />
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => {
            const content = plans[index];
            return (
            <article className={`price-card ${plan.featured ? "featured" : ""}`} key={content.name}>
              {plan.featured ? <span className="popular">{t("popular")}</span> : null}
              <div className="price-head"><h3>{content.name}</h3><p>{content.description}</p></div>
              <div className="price"><span>$</span><strong>{plan.price}</strong><small>{t("perMonth")}</small></div>
              <a href="#contact" className={plan.featured ? "price-button primary" : "price-button"}>
                {t("start", { plan: content.name })} <MoveRight size={16} />
              </a>
              <ul>{content.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
            </article>
          )})}
        </div>
        <div className="calculator">
          <div>
            <span className="section-label">{t("calculator")}</span>
            <h3>{t("estimateTitle")}</h3>
            <p>{t("estimateDescription")}</p>
          </div>
          <div className="calculator-control">
            <div className="calculator-values">
              <p><small>{t("monthlyLeads")}</small><strong>{leads.toLocaleString(locale)}</strong></p>
              <span />
              <p><small>{t("estimatedCost")}</small><strong>${estimate}<em>{t("perMonthShort")}</em></strong></p>
            </div>
            <label htmlFor="lead-volume" className="sr-only">{t("rangeAria")}</label>
            <input
              id="lead-volume"
              type="range"
              min="500"
              max="100000"
              step="500"
              value={leads}
              onChange={(event) => setLeads(Number(event.target.value))}
              style={{ "--range-progress": `${((leads - 500) / 99500) * 100}%` } as React.CSSProperties}
            />
            <div className="range-labels"><span>500</span><span>{t("max")}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
