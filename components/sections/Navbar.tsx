"use client";

import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Logo } from "@/components/ui/Logo";
import { usePathname } from "@/i18n/navigation";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === "ru" ? "en" : "ru";
  const navItems = [
    [t("features"), "#features"],
    [t("how"), "#how-it-works"],
    [t("pricing"), "#pricing"],
    [t("faq"), "#faq"],
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Logo />
        <nav aria-label={t("aria")}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            href={`/${nextLocale}${pathname === "/" ? "" : pathname}`}
            className="language-switch"
            aria-label={t("switchTo")}
          >
            <span className={locale === "ru" ? "active" : ""}>RU</span>
            <i />
            <span className={locale === "en" ? "active" : ""}>EN</span>
          </a>
          <a href="#contact" className="nav-cta">
            {t("demo")} <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
