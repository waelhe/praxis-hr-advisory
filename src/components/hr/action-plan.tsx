"use client";

import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { CalendarClock, UserRound, HelpCircle, Gauge, Zap, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const horizonStyles: Record<string, { badge: string; border: string; icon: React.ElementType }> = {
  NOW: {
    badge: "bg-amberbr-600 text-white",
    border: "border-amberbr-200 bg-amberbr-50/60",
    icon: Zap,
  },
  NEXT: {
    badge: "bg-tealbr-600 text-white",
    border: "border-tealbr-200 bg-tealbr-50/50",
    icon: ArrowRight,
  },
  LATER: {
    badge: "bg-navy-800 text-white",
    border: "border-navy-200 bg-navy-50/60",
    icon: Clock,
  },
};

export function ActionPlan() {
  const { lang, t } = useLang();
  const { exampleActions } = useContent();

  const horizonLabels: Record<string, string> = {
    NOW: t("NOW", "الآن"),
    NEXT: t("NEXT", "التالي"),
    LATER: t("LATER", "لاحقًا"),
  };

  const actionSpec = [
    { icon: CalendarClock, label: t("Action", "الإجراء"), note: t("what concretely changes", "ما يتغير تحديدًا") },
    { icon: UserRound, label: t("Responsible person", "الشخص المسؤول"), note: t("one owner, named", "مالك واحد، مسمّى") },
    { icon: HelpCircle, label: t("Reason", "السبب"), note: t("why this, from the evidence", "لماذا هذا، من الأدلة") },
    { icon: Gauge, label: t("KPI", "مؤشر الأداء"), note: t("the number that will move", "الرقم الذي سيتحرك") },
  ];

  return (
    <section id="action" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          index="09"
          eyebrow={t("From diagnosis to motion", "من التشخيص إلى الحركة")}
          title={
            lang === "ar" ? (
              <>
                كل خطة تنحل إلى{" "}
                <span className="font-serif font-medium text-tealbr-700">
                  الآن ← التالي ← لاحقًا
                </span>
              </>
            ) : (
              <>
                Every plan resolves into{" "}
                <span className="font-serif font-medium italic text-tealbr-700">
                  NOW → NEXT → LATER
                </span>
              </>
            )
          }
          description={
            <p>
              {t(
                "A diagnosis that does not become sequenced action is an essay. Each action carries its own specification: the action itself, the responsible person, the reason grounded in evidence, the expected impact, required resources, its KPI, and a review date. Below — the framework applied to the retention case from the archive.",
                "التشخيص الذي لا يتحول إلى فعلٍ مرتَّب مقالة. كل إجراء يحمل مواصفته الخاصة: الإجراء نفسه، والشخص المسؤول، والسبب المستند إلى الأدلة، والأثر المتوقع، والموارد المطلوبة، ومؤشر أدائه، وتاريخ مراجعته. أدناه — الإطار مطبَّقًا على حالة الاستبقاء من الأرشيف."
              )}
            </p>
          }
        />

        {/* Spec legend */}
        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-3 rounded-2xl border border-navy-200/80 bg-navy-50/50 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {actionSpec.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-navy-200">
                  <s.icon className="h-4 w-4 text-tealbr-700" />
                </span>
                <div>
                  <p className="font-display text-[13px] font-semibold text-navy-900">
                    {s.label}
                  </p>
                  <p className="text-[11.5px] text-navy-500">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Example plan */}
        <div className="mt-6 space-y-4">
          {exampleActions.map((a, i) => {
            const style = horizonStyles[a.horizon];
            return (
              <Reveal key={`${a.horizon}-${a.action}`} delay={i * 0.05}>
                <div
                  className={cn(
                    "grid items-start gap-4 rounded-2xl border p-5 sm:p-6 lg:grid-cols-[150px_1fr_1fr_1fr]",
                    style.border
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg font-display text-[11px] font-bold tracking-wider",
                        style.badge
                      )}
                    >
                      <style.icon className="h-4 w-4 rtl:rotate-180" />
                    </span>
                    <div>
                      <p className="font-display text-[14px] font-bold tracking-tight text-navy-950">
                        {horizonLabels[a.horizon] ?? a.horizon}
                      </p>
                      <p className="text-[11.5px] font-medium text-navy-500">{a.when}</p>
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow mb-1 text-[10px] text-navy-400">{t("Action", "الإجراء")}</p>
                    <p className="font-display text-[13.5px] font-semibold leading-snug text-navy-900">
                      {a.action}
                    </p>
                    <p className="mt-1.5 text-[12px] text-navy-500">
                      {t("Owner:", "المسؤول:")} <span className="font-semibold text-navy-700">{a.owner}</span>
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1 text-[10px] text-navy-400">{t("Reason", "السبب")}</p>
                    <p className="text-[12.5px] leading-relaxed text-navy-700">{a.reason}</p>
                  </div>
                  <div className="lg:border-s lg:border-navy-200/70 lg:ps-4">
                    <p className="eyebrow mb-1 text-[10px] text-navy-400">{t("KPI", "مؤشر الأداء")}</p>
                    <p className="tnum text-[12.5px] font-semibold leading-relaxed text-tealbr-700">
                      {a.kpi}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-[12.5px] text-navy-500">
            {t(
              "The same structure prints as a one-page plan: every action owned, dated, measured — and reviewed before the next quarter closes.",
              "الهيكل ذاته يُطبع خطةً من صفحة واحدة: كل إجراء بمالك وتاريخ وقياس — ويُراجَع قبل انتهاء الربع التالي."
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
