"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [openItem, setOpenItem] = useState(0);
  const t = useTranslations("faq");
  const faqs = t.raw("items") as Array<{ question: string; answer: string }>;

  return (
    <section id="faq" className="faq-section section-pad">
      <div className="site-container faq-grid">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          description={t("description")}
        />
        <div className="accordion">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                  >
                    {faq.question}
                    <Plus size={18} aria-hidden="true" />
                  </button>
                </h3>
                <div id={panelId} className="faq-answer" hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
