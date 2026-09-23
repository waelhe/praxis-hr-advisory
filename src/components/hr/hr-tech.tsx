"use client";

import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { Bot, UserRound, CheckCircle2 } from "lucide-react";

export function HrTech() {
  const { lang, t } = useLang();
  const { aiApplications, aiEvaluationChecks, aiNoFashion } = useContent();

  return (
    <section id="hr-tech" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          index="11"
          eyebrow={t("HR technology & AI", "تقنية الموارد البشرية والذكاء الاصطناعي")}
          title={
            lang === "ar" ? (
              <>
                تُقاس التقنية بالمشكلة،{" "}
                <span className="font-serif font-medium text-tealbr-700">
                  لا بالموضة
                </span>
              </>
            ) : (
              <>
                Technology judged by the problem,{" "}
                <span className="font-serif font-medium italic text-tealbr-700">
                  not the fashion
                </span>
              </>
            )
          }
          description={
            <p>
              {t(
                "AI-assisted HR is evaluated like any intervention: problem first, evidence second, tool last. For every application the same two questions are answered — what does the machine actually do, and what deliberately stays human.",
                "يُقيَّم الذكاء الاصطناعي المساعد في الموارد البشرية كأي تدخل: المشكلة أولًا، والأدلة ثانيًا، والأداة أخيرًا. ولكل تطبيق يُجاب عن السؤالين ذاتهما — ما الذي تفعله الآلة فعلًا، وما الذي يبقى بشريًا عمدًا."
              )}
            </p>
          }
        />

        {/* Applications grid */}
        <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {aiApplications.map((a, i) => (
            <Reveal key={a.name} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-2xl border border-navy-200/80 bg-white p-5 transition-all duration-200 hover:border-navy-300 hover:shadow-[0_10px_30px_-20px_rgba(10,26,38,0.3)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900">
                    <a.icon className="h-4.5 w-4.5 text-tealbr-200" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display text-[14px] font-bold tracking-tight text-navy-950">
                    {a.name}
                  </h3>
                </div>
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <Bot className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tealbr-600" />
                    <p className="text-[12.5px] leading-snug text-navy-700">
                      <span className="font-semibold text-tealbr-700">{t("Automate:", "أتمِت:")}</span>{" "}
                      {a.use}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <UserRound className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage-600" />
                    <p className="text-[12.5px] leading-snug text-navy-700">
                      <span className="font-semibold text-sage-700">{t("Keep human:", "أبقِه بشريًا:")}</span>{" "}
                      {a.humanKept}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Evaluation discipline */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-navy-200/90 bg-navy-50/60 p-6 sm:p-8">
              <h3 className="font-display text-[16px] font-bold tracking-tight text-navy-950">
                {t("The seven checks before any AI recommendation", "الفحوص السبعة قبل أي توصية ذكاء اصطناعي")}
              </h3>
              <p className="mt-1.5 text-[13px] text-navy-600">
                {t(
                  "Applied in the diagnosis console to every technology question, without exception.",
                  "تُطبَّق في وحدة التشخيص على كل سؤال تقني، دون استثناء."
                )}
              </p>
              <ol className="mt-5 space-y-3">
                {aiEvaluationChecks.map((check, i) => (
                  <li key={check} className="flex items-start gap-3">
                    <span className="tnum mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-md bg-navy-900 font-mono text-[10.5px] font-bold text-tealbr-200">
                      {i + 1}
                    </span>
                    <p className="text-[13px] leading-relaxed text-navy-700">{check}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-amberbr-200 bg-gradient-to-br from-amberbr-50 to-white p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amberbr-500/15 ring-1 ring-amberbr-500/30">
                <aiNoFashion.icon className="h-5.5 w-5.5 text-amberbr-600" strokeWidth={1.9} />
              </span>
              <p className="mt-5 font-serif text-[18px] italic leading-relaxed text-navy-800">
                {lang === "ar" ? `«${aiNoFashion.quote}»` : `&ldquo;${aiNoFashion.quote}&rdquo;`}
              </p>
              <p className="mt-4 flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-amberbr-700">
                <CheckCircle2 className="h-4 w-4" />
                {t("The Praxis technology principle", "مبدأ براكسيس للتقنية")}
              </p>
              <p className="mt-3 text-[12.5px] leading-relaxed text-navy-600">
                {t(
                  "Automated decision-making in employment carries specific legal exposure in many jurisdictions — bias, adverse impact, and transparency duties. The decision layer stays human, and the audit trail stays open.",
                  "يحمل القرار الآلي في التوظيف تعرّضًا قانونيًا محددًا في ولايات قضائية كثيرة — انحياز، وأثر معاكس، وواجبات شفافية. تبقى طبقة القرار بشرية، ويبقى مسار التدقيق مفتوحًا."
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
