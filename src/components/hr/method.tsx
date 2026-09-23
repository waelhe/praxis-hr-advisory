"use client";

import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Method() {
  const { lang, t } = useLang();
  const { methodPhases } = useContent();

  const comparisonDims = [
    t("Impact", "الأثر"),
    t("Cost", "التكلفة"),
    t("Complexity", "التعقيد"),
    t("Time", "الوقت"),
    t("Organizational risk", "المخاطر التنظيمية"),
    t("Employee impact", "أثر الموظفين"),
    t("Sustainability", "الاستدامة"),
  ];

  return (
    <section id="method" className="scroll-mt-20 bg-navy-50/70 py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          index="02"
          eyebrow={t("The diagnostic method", "منهجية التشخيص")}
          title={
            lang === "ar" ? (
              <>
                خمس عشرة خطوة بين{" "}
                <span className="font-serif font-medium text-tealbr-700">
                  «ثمة خطأ ما»
                </span>{" "}
                وتدخلٍ يعمل
              </>
            ) : (
              <>
                Fifteen steps between{" "}
                <span className="font-serif font-medium italic text-tealbr-700">
                  &ldquo;something is wrong&rdquo;
                </span>{" "}
                and a working intervention
              </>
            )
          }
          description={
            <p>
              {t(
                "Every major HR problem follows the same structured process — the discipline a physician applies to a symptom, applied to organizations. Three phases: diagnose what is actually happening, analyze competing explanations against evidence, then act and learn.",
                "كل مشكلة موارد بشرية كبرى تتبع العملية المهيكلة ذاتها — الانضباط الذي يطبّقه الطبيب على العَرَض، مطبَّقًا على المنظمات. ثلاث مراحل: تشخيص ما يحدث فعلًا، وتحليل التفسيرات المتنافسة مقابل الأدلة، ثم التنفيذ والتعلّم."
              )}
            </p>
          }
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {methodPhases.map((phase, pi) => (
            <Reveal key={phase.phase} delay={pi * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-navy-200/80 bg-white p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-bold text-navy-200">
                    {phase.phase}
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-tight text-navy-950">
                    {phase.label}
                  </h3>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-navy-600">
                  {phase.summary}
                </p>
                <ol className="mt-5 space-y-3 border-t border-navy-100 pt-5">
                  {phase.steps.map((step) => (
                    <li key={step.n} className="group flex gap-3.5">
                      <span
                        className={cn(
                          "tnum mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-[11px] font-bold",
                          pi === 2
                            ? "bg-sage-100 text-sage-700"
                            : "bg-tealbr-50 text-tealbr-700"
                        )}
                      >
                        {step.n}
                      </span>
                      <div>
                        <p className="font-display text-[13.5px] font-semibold leading-tight text-navy-900">
                          {step.title}
                        </p>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-navy-600">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border border-navy-200/80 bg-white px-6 py-4">
            <p className="eyebrow text-navy-500">{t("Step 11 — the comparison that decides", "الخطوة 11 — المقارنة التي تقرّر")}</p>
            <div className="flex flex-wrap gap-2">
              {comparisonDims.map((dim) => (
                <span
                  key={dim}
                  className="rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-[12px] font-medium text-navy-700"
                >
                  {dim}
                </span>
              ))}
            </div>
            <p className="text-[13px] text-navy-600 lg:ms-auto lg:max-w-sm">
              {t(
                "Interventions are never presented singly — options compete on seven dimensions before one is chosen.",
                "لا تُعرض التدخلات فرادى أبدًا — فالخيارات تتنافس على سبعة أبعاد قبل اختيار أحدها."
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
