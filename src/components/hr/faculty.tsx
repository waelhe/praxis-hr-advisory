"use client";

import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { GraduationCap, Briefcase, Compass, BookOpen, Search } from "lucide-react";

const bgIcons = [GraduationCap, Briefcase, Compass, BookOpen];

export function Faculty() {
  const { lang, t } = useLang();
  const { faculty } = useContent();

  return (
    <section id="faculty" className="scroll-mt-20 bg-navy-950 py-20 lg:py-24">
      <div className="shell">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Profile card */}
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              dark
              index="08"
              eyebrow={t("The faculty", "الخبير")}
              title={
                lang === "ar" ? (
                  <>
                    صرامة أستاذ، وندوب{" "}
                    <span className="font-serif font-medium text-tealbr-200">
                      مدير
                    </span>
                  </>
                ) : (
                  <>
                    A professor&apos;s rigor, a director&apos;s{" "}
                    <span className="font-serif font-medium italic text-tealbr-200">
                      scars
                    </span>
                  </>
                )
              }
              description={
                <p>
                  {t(
                    "The advisory voice behind Praxis combines two careers most organizations hire separately — and benefit from only when combined.",
                    "الصوت الاستشاري خلف براكسيس يجمع مسيرتين توظّفهما معظم المنظمات منفصلتين — ولا تجني ثمارهما إلا حين تجتمعان."
                  )}
                </p>
              }
            />

            <Reveal delay={0.1}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-navy-800 bg-navy-900/70">
                <div className="line-grid-navy flex items-center gap-5 border-b border-navy-800 bg-navy-900/40 p-6">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-navy-800 font-serif text-[26px] font-semibold text-tealbr-200 ring-1 ring-tealbr-200/30">
                    DH
                  </span>
                  <div>
                    <p className="font-display text-[19px] font-bold tracking-tight text-white">
                      {faculty.name}
                    </p>
                    <p className="mt-1 text-[12.5px] font-medium leading-snug text-tealbr-200">
                      {faculty.role}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-serif text-[14.5px] italic leading-relaxed text-navy-200">
                    {lang === "ar" ? `«${faculty.tagline}»` : `&ldquo;${faculty.tagline}&rdquo;`}
                  </p>
                  <div className="mt-5 border-t border-navy-800 pt-5">
                    <p className="eyebrow mb-2.5 text-navy-400">{t("Areas of expertise", "مجالات الخبرة")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {faculty.expertise.map((e) => (
                        <span
                          key={e}
                          className="rounded-md border border-navy-700 bg-navy-800/60 px-2.5 py-1 text-[11.5px] font-medium text-navy-100"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 border-t border-navy-800 pt-5">
                    <p className="eyebrow mb-2.5 flex items-center gap-1.5 text-navy-400">
                      <Search className="h-3.5 w-3.5" /> {t("Current research interests", "اهتمامات البحث الحالية")}
                    </p>
                    <ul className="space-y-2">
                      {faculty.researchInterests.map((r) => (
                        <li key={r} className="flex gap-2.5 text-[12.5px] leading-relaxed text-navy-200">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tealbr-400" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Background detail */}
          <div className="grid gap-5 sm:grid-cols-2">
            {faculty.background.map((b, i) => {
              const Icon = bgIcons[i % bgIcons.length];
              return (
                <Reveal key={b.label} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-navy-800 bg-navy-900/50 p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tealbr-600/15 ring-1 ring-tealbr-200/20">
                      <Icon className="h-5 w-5 text-tealbr-200" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-4 font-display text-[15.5px] font-bold tracking-tight text-white">
                      {b.label}
                    </h3>
                    <ul className="mt-3 space-y-2.5">
                      {b.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-navy-200">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-tealbr-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={0.28} className="sm:col-span-2">
              <div className="rounded-2xl border border-tealbr-200/25 bg-gradient-to-br from-tealbr-600/15 to-transparent p-6">
                <p className="eyebrow text-tealbr-200">{t("Demonstrated, not decorated", "مُثبَتة، لا مزيَّنة")}</p>
                <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-navy-100">
                  {t(
                    "Expertise here is measured by the questions asked before the recommendations given — by the cases worked, the systems built, and the diagnoses that survived contact with data. Profile and cases on this platform are illustrative of the practice, and exist to be interrogated, not admired.",
                    "تُقاس الخبرة هنا بالأسئلة المطروحة قبل التوصيات المقدَّمة — بالحالات المدروسة، والأنظمة المبنية، والتشخيصات التي نجت من ملامسة البيانات. الملف والحالات في هذه المنصة توضيحيان للممارسة، ووجدا ليُحقَّق فيهما لا ليُُبْهَر بهما."
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
