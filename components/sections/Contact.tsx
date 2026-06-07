"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, Check, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { createLeadFormSchema, type LeadFormValues } from "@/lib/validation";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("contact");
  const schema = createLeadFormSchema({
    name: t("errors.name"),
    email: t("errors.email"),
    company: t("errors.company"),
    message: t("errors.message"),
  });
  const inputFields = [
    { name: "name", label: t("name"), placeholder: t("namePlaceholder"), type: "text" },
    { name: "email", label: t("email"), placeholder: t("emailPlaceholder"), type: "email" },
    { name: "company", label: t("company"), placeholder: t("companyPlaceholder"), type: "text" },
  ] as const;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section-pad">
      <div className="site-container contact-shell">
        <div className="contact-copy">
          <span className="section-label">{t("label")}</span>
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
          <ul>
            {(t.raw("benefits") as string[]).map((benefit) => <li key={benefit}><Check size={14} /> {benefit}</li>)}
          </ul>
          <div className="contact-security"><ShieldCheck size={18} /><span><strong>{t("securityTitle")}</strong><small>{t("securityDescription")}</small></span></div>
        </div>
        <div className="form-card">
          {submitted ? (
            <div className="success-state" role="status">
              <span><CheckCircle2 size={28} /></span>
              <h3>{t("successTitle")}</h3>
              <p>{t("successDescription")}</p>
              <button type="button" onClick={() => setSubmitted(false)}>{t("successReset")}</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-heading"><span><Sparkles size={15} /></span><div><h3>{t("formTitle")}</h3><p>{t("formReply")}</p></div></div>
              <div className="field-grid">
                {inputFields.map((field) => (
                  <div className={field.name === "company" ? "field field-full" : "field"} key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input id={field.name} type={field.type} placeholder={field.placeholder} aria-invalid={Boolean(errors[field.name])} {...register(field.name)} />
                    {errors[field.name] ? <p className="field-error">{errors[field.name]?.message}</p> : null}
                  </div>
                ))}
                <div className="field field-full">
                  <label htmlFor="message">{t("message")}</label>
                  <textarea id="message" rows={4} placeholder={t("messagePlaceholder")} aria-invalid={Boolean(errors.message)} {...register("message")} />
                  {errors.message ? <p className="field-error">{errors.message.message}</p> : null}
                </div>
              </div>
              <button className="submit-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("sending") : t("submit")} <ArrowRight size={17} />
              </button>
              <p className="form-note">{t("note")}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
