"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { Slider } from "@/components/ui/slider";
import { ArrowDown, Calculator, TrendingDown, Info } from "lucide-react";
import { cn } from "@/lib/utils";

function money(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

interface CalcInput {
  key: string;
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  value: number;
  format: (v: number) => string;
}

const BILINGUAL_INPUTS: Record<string, { label: [string, string]; hint: [string, string]; min: number; max: number; step: number; value: number; format: (v: number) => string }> = {
  employees: { label: ["Employees", "الموظفون"], hint: ["total headcount in scope", "إجمالي العدد المشمول"], min: 10, max: 2000, step: 10, value: 150, format: (v: number) => `${v}` },
  salary: { label: ["Average annual salary", "متوسط الراتب السنوي"], hint: ["fully loaded, gross", "إجمالي وشامل التحميل الكامل"], min: 20000, max: 200000, step: 2500, value: 60000, format: money },
  rate: { label: ["Annual turnover rate", "معدل الدوران السنوي"], hint: ["voluntary + involuntary", "طوعي + غير طوعي"], min: 3, max: 60, step: 1, value: 18, format: (v: number) => `${v}%` },
  regret: { label: ["Regretted share", "الحصة المؤسفة"], hint: ["% of leavers you wish had stayed", "% من المغادرين تتمنى لو بقوا"], min: 10, max: 90, step: 5, value: 40, format: (v: number) => `${v}%` },
  hire: { label: ["Cost per hire", "تكلفة التوظيف الواحد"], hint: ["sourcing, assessment, onboarding admin", "الاستقطاب والتقييم وإدارة التهيئة"], min: 1000, max: 25000, step: 500, value: 5000, format: money },
  fill: { label: ["Months to fill vacancy", "أشهر لشغل الشاغر"], hint: ["requisition to start date", "من الطلب حتى تاريخ المباشرة"], min: 0.5, max: 9, step: 0.5, value: 2.5, format: (v: number) => `${v} mo` },
  ramp: { label: ["Ramp to full productivity", "الصعود إلى الإنتاجية الكاملة"], hint: ["new hire reaching full output", "المعيَّن الجديد يبلغ الإنتاج الكامل"], min: 1, max: 12, step: 0.5, value: 4, format: (v: number) => `${v} mo` },
};

const DEFAULT_VALUES = Object.fromEntries(
  Object.entries(BILINGUAL_INPUTS).map(([k, v]) => [k, v.value])
);

export function Tools() {
  const { lang, t } = useLang();
  const { diagnosticTools } = useContent();
  const [vals, setVals] = useState<Record<string, number>>(DEFAULT_VALUES);

  const inputDefaults: CalcInput[] = useMemo(
    () =>
      Object.entries(BILINGUAL_INPUTS).map(([key, d]) => ({
        key,
        label: d.label[lang === "ar" ? 1 : 0],
        hint: d.hint[lang === "ar" ? 1 : 0],
        min: d.min,
        max: d.max,
        step: d.step,
        value: d.value,
        format: d.format,
      })),
    [lang]
  );

  const result = useMemo(() => {
    const departures = (vals.employees * vals.rate) / 100;
    const regretted = departures * (vals.regret / 100);
    const monthlySalary = vals.salary / 12;
    // 50% productivity loss while vacant (team absorbs at partial capacity)
    const vacancyLoss = monthlySalary * vals.fill * 0.5;
    // 50% average productivity gap during ramp-up
    const rampLoss = monthlySalary * vals.ramp * 0.5;
    const replacementTotal = vals.hire + vacancyLoss + rampLoss;
    const total = departures * replacementTotal;
    const regrettedCost = regretted * replacementTotal;
    const payroll = vals.employees * vals.salary;
    const pctPayroll = payroll > 0 ? (total / payroll) * 100 : 0;
    const hireShare = (vals.hire / replacementTotal) * 100;
    const vacancyShare = (vacancyLoss / replacementTotal) * 100;
    return {
      departures,
      regretted,
      replacementTotal,
      total,
      regrettedCost,
      pctPayroll,
      hireShare,
      vacancyShare,
      rampShare: 100 - (vals.hire / replacementTotal) * 100 - (vacancyLoss / replacementTotal) * 100,
    };
  }, [vals]);

  const riskLevel =
    result.pctPayroll >= 15 ? "high" : result.pctPayroll >= 8 ? "elevated" : "contained";

  const riskText =
    riskLevel === "high"
      ? t(
          "This level is a business risk, not an HR statistic — treat it with the same urgency as a revenue problem of equal size.",
          "هذا المستوى خطرٌ على الأعمال لا إحصاء موارد بشرية — عامله بالإلحاح نفسه الذي تعالج به مشكلة إيرادات بحجم مماثل."
        )
      : riskLevel === "elevated"
      ? t(
          "Worth a segmented view before accepting: check where regretted attrition concentrates by role, tenure, and manager.",
          "يستحق نظرة مقسّمة قبل قبوله: افحص أين يتركز التسرّب المؤسف حسب الدور والأقدمية والمدير."
        )
      : t(
          "Contained overall — verify the regretted share is not concentrated in critical roles or a single team.",
          "محتوى إجمالًا — تحقق فقط من أن الحصة المؤسفة غير مركزة في أدوار حرجة أو فريق واحد."
        );

  return (
    <section id="tools" className="scroll-mt-20 bg-navy-50/70 py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          index="06"
          eyebrow={t("Diagnostic instruments", "أدوات التشخيص")}
          title={
            lang === "ar" ? (
              <>
                أدوات تحوّل البيانات إلى{" "}
                <span className="font-serif font-medium text-tealbr-700">
                  قرارات
                </span>
              </>
            ) : (
              <>
                Tools that turn data into{" "}
                <span className="font-serif font-medium italic text-tealbr-700">
                  decisions
                </span>
              </>
            )
          }
          description={
            <p>
              {t(
                "Twelve standard instruments of the practice — each built to answer a specific diagnostic question, not to decorate a report. One of them is live below: price your turnover before you decide it is acceptable.",
                "اثنتا عشرة أداة قياسية للممارسة — كلٌّ منها مبنية للإجابة عن سؤال تشخيصي محدد، لا لتزيين تقرير. واحدة منها تفاعلية أدناه: سعّر دورانك قبل أن تقرر أنه مقبول."
              )}
            </p>
          }
        />

        {/* Tool grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {diagnosticTools.map((tool, i) => (
            <Reveal key={tool.name} delay={(i % 4) * 0.05}>
              <div
                className={cn(
                  "group h-full rounded-2xl border p-5 transition-all duration-200",
                  tool.interactive
                    ? "border-tealbr-300 bg-tealbr-50/70 shadow-[0_14px_36px_-20px_rgba(11,101,93,0.45)]"
                    : "border-navy-200/80 bg-white hover:border-navy-300 hover:shadow-[0_10px_30px_-20px_rgba(10,26,38,0.3)]"
                )}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl",
                      tool.interactive ? "bg-tealbr-600" : "bg-navy-900"
                    )}
                  >
                    <tool.icon className="h-5 w-5 text-tealbr-200" strokeWidth={1.8} />
                  </span>
                  {tool.interactive ? (
                    <span className="flex items-center gap-1 rounded-full bg-tealbr-600 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">
                      <Calculator className="h-3 w-3" /> {t("live", "تفاعلي")}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 font-display text-[14.5px] font-bold tracking-tight text-navy-950">
                  {tool.name}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-navy-600">
                  {tool.purpose}
                </p>
                <div className="mt-4 space-y-1.5 border-t border-navy-100 pt-3.5">
                  <p className="text-[11.5px] leading-snug text-navy-500">
                    <span className="font-semibold text-navy-700">{t("Inputs:", "المدخلات:")}</span>{" "}
                    {tool.inputs.join(" · ")}
                  </p>
                  <p className="text-[11.5px] leading-snug text-navy-500">
                    <span className="font-semibold text-navy-700">{t("Output:", "الناتج:")}</span>{" "}
                    {tool.outputs}
                  </p>
                </div>
                {tool.interactive ? (
                  <a
                    href="#calculator"
                    className="mt-4 inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold text-tealbr-700 hover:text-tealbr-600"
                  >
                    {t("Launch the calculator", "افتح الحاسبة")}
                    <ArrowDown className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Interactive turnover cost calculator ─────────── */}
        <Reveal delay={0.1}>
          <div id="calculator" className="mt-12 scroll-mt-24">
            <div className="overflow-hidden rounded-2xl border border-navy-800 bg-navy-950 shadow-[0_24px_70px_-30px_rgba(10,26,38,0.7)]">
              <div className="flex flex-wrap items-center gap-3 border-b border-navy-800 bg-navy-900/60 px-6 py-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tealbr-600">
                  <TrendingDown className="h-4.5 w-4.5 text-white" />
                </span>
                <div>
                  <h3 className="font-display text-[15px] font-bold text-white">
                    {t("Turnover Cost Analyzer", "محلّل تكلفة الدوران")}
                  </h3>
                  <p className="text-[12px] text-navy-300">
                    {t(
                      "The first number every retention decision should see",
                      "الرقم الأول الذي ينبغي أن تراه كل قرار استبقاء"
                    )}
                  </p>
                </div>
                <span className="ms-auto hidden font-mono text-[11px] uppercase tracking-widest text-navy-400 sm:block">
                  {t("instrument 01 / 12", "الأداة 01 / 12")}
                </span>
              </div>

              <div className="grid gap-8 p-6 lg:grid-cols-[1fr_1.1fr] lg:p-8">
                {/* Inputs */}
                <div className="space-y-5">
                  <p className="eyebrow text-navy-400">{t("Your parameters", "معاييرك")}</p>
                  {inputDefaults.map((d) => (
                    <div key={d.key}>
                      <div className="flex items-baseline justify-between gap-3">
                        <label htmlFor={`calc-${d.key}`} className="font-display text-[13px] font-semibold text-navy-100">
                          {d.label}
                        </label>
                        <span className="tnum font-display text-[13px] font-bold text-tealbr-200">
                          {d.format(vals[d.key])}
                        </span>
                      </div>
                      <p className="mb-2 text-[11px] text-navy-400">{d.hint}</p>
                      <Slider
                        id={`calc-${d.key}`}
                        value={[vals[d.key]]}
                        min={d.min}
                        max={d.max}
                        step={d.step}
                        onValueChange={([v]) => setVals((prev) => ({ ...prev, [d.key]: v }))}
                        className="py-1 [&_[data-slot=slider-range]]:bg-tealbr-500"
                      />
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="flex flex-col gap-5 rounded-xl border border-navy-800 bg-navy-900/70 p-5 sm:p-6">
                  <div>
                    <p className="eyebrow text-navy-400">{t("Estimated annual cost of turnover", "التكلفة السنوية المقدَّرة للدوران")}</p>
                    <p className="tnum mt-1 font-display text-4xl font-bold tracking-tight text-white sm:text-[2.75rem]">
                      {money(result.total)}
                    </p>
                    <p className="mt-1.5 text-[13px] text-navy-300">
                      {result.departures.toFixed(1)} {t("departures ×", "مغادرة ×")}{" "}
                      {money(result.replacementTotal)} {t("average replacement cost ·", "متوسط تكلفة الاستبدال ·")}{" "}
                      <span className="font-semibold text-tealbr-200">
                        {t(`${result.pctPayroll.toFixed(1)}% of payroll`, `${result.pctPayroll.toFixed(1)}% من الرواتب`)}
                      </span>
                    </p>
                  </div>

                  {/* Breakdown bar */}
                  <div>
                    <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-navy-800">
                      <div
                        className="bg-tealbr-500"
                        style={{ width: `${Math.max(result.hireShare, 2)}%` }}
                        title={t("Hiring cost", "تكلفة التوظيف")}
                      />
                      <div
                        className="bg-navy-400"
                        style={{ width: `${Math.max(result.vacancyShare, 2)}%` }}
                        title={t("Vacancy productivity loss", "خسارة إنتاج الشغور")}
                      />
                      <div
                        className="bg-sage-500"
                        style={{ width: `${Math.max(result.rampShare, 2)}%` }}
                        title={t("Ramp-up productivity loss", "خسارة إنتاج الصعود")}
                      />
                    </div>
                    <div className="mt-2.5 grid grid-cols-3 gap-2 text-[11.5px] text-navy-300">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-tealbr-500" />
                        {t("Hiring", "التوظيف")} {result.hireShare.toFixed(0)}%
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-navy-400" />
                        {t("Vacancy", "الشغور")} {result.vacancyShare.toFixed(0)}%
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-sage-500" />
                        {t("Ramp-up", "الصعود")} {result.rampShare.toFixed(0)}%
                      </span>
                    </div>
                  </div>

                  {/* Regretted block */}
                  <div
                    className={cn(
                      "rounded-xl border p-4",
                      riskLevel === "high"
                        ? "border-amberbr-500/50 bg-amberbr-500/10"
                        : riskLevel === "elevated"
                        ? "border-amberbr-100/40 bg-navy-800/50"
                        : "border-sage-500/40 bg-sage-500/10"
                    )}
                  >
                    <p className="flex items-center gap-2 font-display text-[13px] font-bold text-white">
                      {t("Regretted portion:", "الجزء المؤسف:")} {money(result.regrettedCost)}
                      <span className="tnum rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-navy-100">
                        {result.regretted.toFixed(1)} {t("people", "أشخاص")}
                      </span>
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-navy-200">
                      {riskText}
                    </p>
                  </div>

                  <p className="mt-auto flex items-start gap-2 text-[11.5px] leading-relaxed text-navy-400">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {t(
                      "Directional estimate using standard assumptions (50% productivity loss during vacancy and ramp). Adjust to your measured values for decision-grade figures — this instrument exists to size the problem honestly, not precisely.",
                      "تقدير اتجاهي بافتراضات قياسية (خسارة إنتاجية 50% خلال الشغور والصعود). عدّلها إلى قيمك المقيسة لأرقام بجودة القرار — وُلدت هذه الأداة لتقيس حجم المشكلة بصدق، لا بدقة."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
