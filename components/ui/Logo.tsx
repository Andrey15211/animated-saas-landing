 "use client";

import { useTranslations } from "next-intl";

export function Logo() {
  const t = useTranslations("common");

  return (
    <a href="#top" className="logo" aria-label={t("brandHome")}>
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
      </span>
      <span>
        FlowPilot <strong>AI</strong>
      </span>
    </a>
  );
}
