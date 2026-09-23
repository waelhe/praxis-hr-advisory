"use client";

import { useState } from "react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { BookMarked, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Library() {
  const { lang, t } = useLang();
  const { libraryCategories } = useContent();
  const [active, setActive] = useState(libraryCategories[0].id);
  const category = libraryCategories.find((c) => c.id === active)!;

  return (
    <section id="library" className="scroll-mt-20 bg-navy-950 py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          dark
          index="05"
          eyebrow={t("The knowledge library", "مكتبة المعرفة")}
          title={
            lang === "ar" ? (
              <>
                نظرية تنجو من ملامسة{" "}
                <span className="font-serif font-medium text-tealbr-200">
                  الواقع
                </span>
              </>
            ) : (
              <>
                Theory that survives contact with{" "}
                <span className="font-serif font-medium italic text-tealbr-200">
                  practice
                </span>
              </>
            )
          }
          description={
            <p>
              {t(
                "Professor-mode explanations of the frameworks behind every diagnosis: what the research says, why it matters, when it applies, when it fails, and how it translates into managerial action. No academic terminology without translation.",
                "شروح بوضع الأستاذ للأطر الكامنة خلف كل تشخيص: ماذا يقول البحث، ولماذا يهم، ومتى ينطبق، ومتى يفشل، وكيف يُترجم إلى إجراء إداري. لا مصطلحات أكاديمية دون ترجمة."
              )}
            </p>
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Category rail */}
          <div>
            <p className="eyebrow mb-3 text-navy-400">{t("Topics", "الموضوعات")}</p>
            <div className="flex flex-wrap gap-1.5 lg:flex-col">
              {libraryCategories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "flex shrink-0 items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 text-start font-display text-[13.5px] font-semibold transition-colors",
                    active === c.id
                      ? "bg-tealbr-600 text-white"
                      : "text-navy-200 hover:bg-navy-800/80 hover:text-white"
                  )}
                >
                  {c.label}
                  <ChevronRight
                    className={cn(
                      "hidden h-3.5 w-3.5 transition-opacity lg:block rtl:rotate-180",
                      active === c.id ? "opacity-100" : "opacity-30"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Entries */}
          <div className="space-y-4">
            {category.entries.map((e, i) => (
              <Reveal key={`${category.id}-${e.title}`} delay={i * 0.05}>
                <article className="rounded-xl border border-navy-800 bg-navy-900/70 p-5 transition-colors hover:border-navy-700 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-[16px] font-bold leading-snug tracking-tight text-white">
                      {e.title}
                    </h3>
                    <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-tealbr-300" />
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-navy-200">
                    {e.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-navy-800 pt-3.5">
                    <span className="eyebrow me-1 self-center text-[10px] text-navy-400">
                      {t("Frameworks", "الأطر")}
                    </span>
                    {e.frameworks.map((f) => (
                      <span
                        key={f}
                        className="rounded-md bg-navy-800/80 px-2 py-1 text-[11.5px] font-medium text-tealbr-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
