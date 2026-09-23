"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { ArrowRight, Lightbulb } from "lucide-react";

export function Cases() {
  const { lang, t } = useLang();
  const { caseStudies } = useContent();

  return (
    <section id="cases" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          index="07"
          eyebrow={t("Case archive", "أرشيف الحالات")}
          title={
            lang === "ar" ? (
              <>
                تشخيصات،{" "}
                <span className="font-serif font-medium text-tealbr-700">
                  لا حكايات
                </span>
              </>
            ) : (
              <>
                Diagnoses, not{" "}
                <span className="font-serif font-medium italic text-tealbr-700">
                  anecdotes
                </span>
              </>
            )
          }
          description={
            <p>
              {t(
                "Realistic organizational scenarios, worked end to end: presenting problem, evidence, diagnosis, competing alternatives, intervention, measured result, and what the case teaches. No one-solution stories — in each case the obvious first answer was the wrong one.",
                "سيناريوهات تنظيمية واقعية مدروسة من البداية إلى النهاية: المشكلة المعلَنة، والأدلة، والتشخيص، والبدائل المتنافسة، والتدخل، والنتيجة المقيسة، وما تعلّمه الحالة. لا قصص حل واحد — في كل حالة كان الجواب الأول البديهي هو الخاطئ."
              )}
            </p>
          }
        />

        <Reveal className="mt-10">
          <Tabs defaultValue={caseStudies[0].id} className="w-full">
            <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-xl border border-navy-200 bg-navy-50/70 p-1.5">
              {caseStudies.map((c) => (
                <TabsTrigger
                  key={c.id}
                  value={c.id}
                  className="h-10 shrink-0 rounded-lg px-4 font-display text-[13px] font-semibold data-[state=active]:bg-navy-900 data-[state=active]:text-white"
                >
                  {c.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {caseStudies.map((c) => (
              <TabsContent key={c.id} value={c.id} className="mt-6">
                <div className="overflow-hidden rounded-2xl border border-navy-200/90 bg-white">
                  {/* Case header */}
                  <div className="grid lg:grid-cols-[1.05fr_1fr]">
                    <div className="relative min-h-[240px]">
                      <Image
                        src={c.image}
                        alt={c.imageAlt}
                        width={1376}
                        height={768}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />
                      <div className="absolute bottom-0 start-0 end-0 p-5 sm:p-6">
                        <span className="eyebrow rounded-full bg-tealbr-600/90 px-3 py-1 text-[10px] text-white">
                          {c.kicker}
                        </span>
                        <h3 className="mt-2.5 font-display text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
                          {c.title}
                        </h3>
                        <p className="mt-1 text-[12.5px] font-medium text-navy-200">
                          {c.sector}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center border-t border-navy-100 bg-navy-50/50 p-6 sm:p-8 lg:border-s lg:border-t-0">
                      <p className="eyebrow text-navy-400">{t("The presenting complaint", "الشكوى المعلَنة")}</p>
                      <p className="mt-2 font-serif text-[16px] italic leading-relaxed text-navy-800">
                        {c.context}
                      </p>
                      <p className="mt-4 flex items-start gap-2 text-[12.5px] leading-relaxed text-navy-500">
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tealbr-600 rtl:rotate-180" />
                        {t(
                          "Composite case drawn from recurring organizational patterns; details anonymized and figures illustrative.",
                          "حالة مركّبة من أنماط تنظيمية متكررة؛ التفاصيل مجهولة الهوية والأرقام توضيحية."
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Stage flow */}
                  <div className="border-t border-navy-100 p-6 sm:p-8">
                    <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
                      {c.stages.map((s, i) => (
                        <div
                          key={s.label}
                          className="group relative border-s border-navy-200 py-2 ps-5 pe-4 sm:[&:nth-child(odd)]:border-e sm:[&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+4)]:border-b lg:[&:nth-child(odd)]:border-e lg:[&:nth-child(-n+4)]:border-b-0"
                        >
                          <span
                            className={`absolute -start-[5px] top-3.5 h-2.5 w-2.5 rounded-full ring-4 ring-white ${
                              ["bg-navy-400", "bg-navy-500", "bg-tealbr-600", "bg-sage-500"][i % 4]
                            }`}
                          />
                          <p className="font-display text-[12px] font-bold uppercase tracking-wider text-tealbr-700">
                            {s.label}
                          </p>
                          <p className="mt-1.5 text-[12.5px] leading-relaxed text-navy-700">
                            {s.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics + lessons */}
                  <div className="grid gap-0 border-t border-navy-100 lg:grid-cols-[1.15fr_1fr]">
                    <div className="border-b border-navy-100 p-6 sm:p-8 lg:border-b-0 lg:border-e">
                      <p className="eyebrow text-navy-400">{t("Measured movement", "الحركة المقيسة")}</p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {c.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl border border-navy-200 bg-navy-50/50 p-4"
                          >
                            <p className="text-[11px] font-semibold leading-tight text-navy-500">
                              {m.label}
                            </p>
                            <div className="mt-2 flex items-baseline gap-2">
                              <span className="tnum font-display text-[13px] font-medium text-navy-400 line-through decoration-navy-300">
                                {m.before}
                              </span>
                              <ArrowRight className="h-3 w-3 text-tealbr-600 rtl:rotate-180" />
                              <span className="tnum font-display text-[17px] font-bold text-tealbr-700">
                                {m.after}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-sage-50/60 p-6 sm:p-8">
                      <p className="eyebrow flex items-center gap-1.5 text-sage-700">
                        <Lightbulb className="h-3.5 w-3.5" /> {t("What the case teaches", "ما تعلّمنا إياه الحالة")}
                      </p>
                      <ul className="mt-3.5 space-y-2.5">
                        {c.lessons.map((l) => (
                          <li key={l} className="flex gap-2.5 text-[13px] leading-relaxed text-sage-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500" />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
