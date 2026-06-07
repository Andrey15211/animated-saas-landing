import {
  ArrowRight,
  BellRing,
  Check,
  Database,
  Mail,
  Sparkles,
  TriangleAlert,
  UserRoundSearch,
  Workflow,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProblemSolution() {
  const t = useTranslations("problem");
  const tools = t.raw("tools") as string[];
  const pains = t.raw("pains") as string[];
  const actions = t.raw("actions") as string[];
  const solutions = t.raw("solutions") as string[];

  return (
    <section className="problem-section section-pad">
      <div className="site-container">
        <SectionHeading
          label={t("label")}
          title={t("title")}
          description={t("description")}
          align="center"
        />
        <div className="problem-grid">
          <div className="problem-card pain-card">
            <div className="problem-card-head">
              <span className="problem-icon red"><TriangleAlert size={19} /></span>
              <div><small>{t("without")}</small><h3>{t("withoutTitle")}</h3></div>
            </div>
            <div className="tangled-lines" aria-hidden="true">
              <span className="tool-chip chip-one"><Mail size={14} /> {tools[0]}</span>
              <span className="tool-chip chip-two"><Database size={14} /> {tools[1]}</span>
              <span className="tool-chip chip-three"><BellRing size={14} /> {tools[2]}</span>
              <span className="tool-chip chip-four"><UserRoundSearch size={14} /> {tools[3]}</span>
              <svg viewBox="0 0 480 180" preserveAspectRatio="none">
                <path d="M70 35 C210 20, 230 165, 405 145" />
                <path d="M80 145 C180 70, 310 85, 400 35" />
                <path d="M220 20 C180 85, 340 115, 235 165" />
              </svg>
            </div>
            <ul className="pain-list">
              {pains.map((point) => <li key={point}><span>×</span>{point}</li>)}
            </ul>
          </div>

          <div className="problem-card solution-card">
            <div className="problem-card-head">
              <span className="problem-icon violet"><Sparkles size={19} /></span>
              <div><small>{t("with")}</small><h3>{t("withTitle")}</h3></div>
            </div>
            <div className="solution-flow">
              <div className="solution-source">
                <span><Mail size={14} /></span>
                <span><Database size={14} /></span>
                <span><BellRing size={14} /></span>
              </div>
              <ArrowRight size={20} />
              <div className="solution-core"><Workflow size={25} /><i /></div>
              <ArrowRight size={20} />
              <div className="solution-actions">
                {actions.map((action) => <span key={action}>{action}</span>)}
              </div>
            </div>
            <ul className="solution-list">
              {solutions.map((point) => <li key={point}><span><Check size={12} /></span>{point}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
