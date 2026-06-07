import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="footer">
      <div className="site-container footer-top">
        <div><Logo /><p>{t("description")}</p></div>
        <div className="footer-links">
          <div><strong>{t("product")}</strong><a href="#features">{t("features")}</a><a href="#how-it-works">{t("how")}</a><a href="#pricing">{t("pricing")}</a></div>
          <div><strong>{t("company")}</strong><a href="#contact">{t("contact")}</a><a href="#faq">{t("faq")}</a><a href="#top">{t("about")}</a></div>
          <div><strong>{t("connect")}</strong><a href="#contact">LinkedIn <ArrowUpRight size={12} /></a><a href="#contact">X / Twitter <ArrowUpRight size={12} /></a></div>
        </div>
      </div>
      <div className="site-container footer-bottom"><span>{t("copyright")}</span><span>{t("legal")}</span></div>
    </footer>
  );
}
