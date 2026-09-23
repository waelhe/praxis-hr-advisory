"use client";

import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { Check, X } from "lucide-react";

export function SmallBusiness() {
  const { lang, t } = useLang();
  const { smallBusinessPrinciples, sbComparison } = useContent();

  return (
    <section id="small-business" className="scroll-mt-20 bg-navy-50/70 py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          index="10"
          eyebrow={t("Small business mode", "وضع الأعمال الصغيرة")}
          title={
            lang === "ar" ? (
              <>
                أنظمة بسيطة يستطيع المالك إدارتها{" "}
                <span className="font-serif font-medium text-tealbr-700">
                  فعلًا
                </span>
              </>
            ) : (
              <>
                Simple systems the owner can{" "}
                <span className="font-serif font-medium italic text-tealbr-700">
                  actually run
                </span>
              </>
            )
          }
          description={
            <p>
              {t(
                "A 30-person company has limited HR budget, informal processes, and owner-dependent management. It does not need enterprise bureaucracy — it needs working systems with the same underlying discipline, sized for the business it is. Complexity is a cost small businesses pay twice: once in money, once in abandonment.",
                "شركة من ثلاثين شخصًا لديها ميزانية موارد بشرية محدودة، وعمليات غير رسمية، وإدارة معتمدة على المالك. لا تحتاج بيروقراطية مؤسسية — بل أنظمة عاملة بالانضباط الجوهري ذاته، بمقاس عملها الحالي. التعقيد كلفة تدفعها الأعمال الصغيرة مرتين: مرة بالمال، ومرة بالإهمال."
              )}
            </p>
          }
        />

        {/* Principles */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {smallBusinessPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-navy-200/80 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100">
                  <p.icon className="h-5 w-5 text-sage-600" strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 font-display text-[15px] font-bold tracking-tight text-navy-950">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparison table */}
        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-navy-200/90 bg-white">
            <div className="border-b border-navy-100 bg-navy-900 px-5 py-4 sm:px-7">
              <h3 className="font-display text-[15.5px] font-bold text-white">
                {t("The same discipline, sized differently", "الانضباط ذاته بمقاس مختلف")}
              </h3>
              <p className="mt-0.5 text-[12.5px] text-navy-300">
                {t(
                  "What enterprise machinery and a small-business-first alternative actually look like, side by side.",
                  "كيف يبدو الماكيناري المؤسسي والبديل الأول للأعمال الصغيرة، جنبًا إلى جنب."
                )}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-start">
                <thead>
                  <tr className="border-b border-navy-100 bg-navy-50/60">
                    {sbComparison.columns.map((col, i) => (
                      <th
                        key={col}
                        className={`px-5 py-3.5 font-display text-[12px] font-bold uppercase tracking-wider sm:px-7 ${
                          i === 2 ? "text-tealbr-700" : "text-navy-500"
                        }`}
                      >
                        {i === 0 ? (
                          col
                        ) : (
                          <span className="flex items-center gap-1.5">
                            {i === 1 ? (
                              <X className="h-3.5 w-3.5 text-navy-400" />
                            ) : (
                              <Check className="h-3.5 w-3.5" />
                            )}
                            {col}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sbComparison.rows.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-navy-100 last:border-0 hover:bg-navy-50/40"
                    >
                      <td className="px-5 py-4 font-display text-[13px] font-semibold text-navy-900 sm:px-7">
                        {row[0]}
                      </td>
                      <td className="px-5 py-4 text-[12.5px] leading-relaxed text-navy-500 sm:px-7">
                        {row[1]}
                      </td>
                      <td className="border-s border-tealbr-100 bg-tealbr-50/40 px-5 py-4 text-[12.5px] leading-relaxed font-medium text-navy-800 sm:px-7">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-navy-100 bg-sage-50/60 px-5 py-4 sm:px-7">
              <p className="text-[12.5px] leading-relaxed text-sage-700">
                <strong>{t("The test before any platform purchase:", "الاختبار قبل أي شراء منصة:")}</strong>{" "}
                {t(
                  "have you already tried clear responsibilities, weekly check-ins, basic KPIs, documented expectations, and structured feedback? If not, that is the intervention — and it costs a writing pad, not a subscription.",
                  "هل جربت أصلًا المسؤوليات الواضحة، واللقاءات الأسبوعية، ومؤشرات الأداء الأساسية، والتوقعات الموثقة، والتغذية الراجعة المهيكلة؟ إن لم يكن، فهذا هو التدخل — وكلفته دفتر كتابة لا اشتراك."
                )}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
