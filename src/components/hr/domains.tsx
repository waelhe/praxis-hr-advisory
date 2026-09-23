"use client";

import { useState } from "react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { useLang, useContent } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Domains() {
  const { lang, t } = useLang();
  const { domains } = useContent();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="domains" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow={t("HR domains", "مجالات الموارد البشرية")}
          title={
            lang === "ar" ? (
              <>
                أحد عشر مجالًا،{" "}
                <span className="font-serif font-medium text-tealbr-700">
                  وممارسة واحدة مترابطة
                </span>
              </>
            ) : (
              <>
                Eleven domains, one{" "}
                <span className="font-serif font-medium italic text-tealbr-700">
                  connected practice
                </span>
              </>
            )
          }
          description={
            <p>
              {t(
                "Human resource problems do not respect functional boundaries — a pay decision is a recruiting message, a manager is a retention system, an org chart is a communication network. Expert-level analysis across all eleven domains, with the connections between them in view.",
                "مشكلات الموارد البشرية لا تحترم الحدود الوظيفية — فقرار الأجر رسالة استقطاب، والمدير نظام استبقاء، والهيكل التنظيمي شبكة تواصل. تحليل بمستوى الخبراء عبر المجالات الأحد عشر كافة، مع إبقاء الروابط بينها في الميدان."
              )}
            </p>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={d.title} delay={(i % 3) * 0.06}>
                <div
                  className={cn(
                    "h-full rounded-2xl border p-5 transition-all duration-200",
                    isOpen
                      ? "border-tealbr-200 bg-tealbr-50/40 shadow-[0_10px_30px_-16px_rgba(11,101,93,0.35)]"
                      : "border-navy-200/80 bg-white hover:border-navy-300 hover:shadow-[0_10px_30px_-20px_rgba(10,26,38,0.3)]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-3 text-start"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                          isOpen ? "bg-tealbr-600" : "bg-navy-900"
                        )}
                      >
                        <d.icon className="h-5 w-5 text-tealbr-200" strokeWidth={1.8} />
                      </span>
                      <span className="font-display text-[14.5px] font-bold leading-tight tracking-tight text-navy-950">
                        {d.title}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "mt-1 h-4 w-4 shrink-0 text-navy-400 transition-transform duration-200",
                        isOpen && "rotate-180 text-tealbr-700"
                      )}
                    />
                  </button>
                  <p className="mt-3 text-[13px] leading-relaxed text-navy-600">{d.summary}</p>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="eyebrow mb-1.5 text-navy-400">{t("Practice areas", "مجالات الممارسة")}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {d.topics.map((topic) => (
                          <span
                            key={topic}
                            className="rounded-md border border-navy-200 bg-white px-2 py-1 text-[11.5px] font-medium text-navy-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
